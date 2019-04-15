#!/usr/bin/env bash

# Requires imagemagick `brew install imagemagick`.
# Run from project root. `..` relative to to this file.

IMAGE_DIRECTORY=images/foods
THUMBNAIL_DIRECTORY=images/thumbs

mkdir $THUMBNAIL_DIRECTORY

COUNTER=0
# Assumption: filename is `img-<number>.jpg`
for i in $(find "${IMAGE_DIRECTORY}" -name '*.jpg' -depth 1|sort --numeric-sort --key 2 --field-separator -); do
    COUNTER=$((COUNTER + 1))
    convert $i -thumbnail 128x128^ -gravity center "${THUMBNAIL_DIRECTORY}/img-${COUNTER}_tn.jpg"
    echo "Generated ${THUMBNAIL_DIRECTORY}/img-${COUNTER}_tn.jpg"
done