'use strict';

function getFullImg(img){
    const fullImg = document.getElementById('full-img');
    fullImg.src = img.src;

    const imgText = document.getElementById('img-text');
    imgText.innerHTML = `<span>${img.alt}</span>`;
}

function generateThumbnails(num){
    const imgUl = document.querySelector('.img-thumbnails');
    imgUl.innerHTML = '';
    for (let i = 1; i <= num; i++){
        const imgLi = document.createElement('li');
        const imgLink = `<img class="thumbnail" src="media/full-size-imgs/img${i}.jpg" alt="caption text for img${i}.jpg" onclick="getFullImg(this)" />`;
        imgLi.innerHTML = imgLink;
        imgUl.appendChild(imgLi);
    }

}

generateThumbnails(7);