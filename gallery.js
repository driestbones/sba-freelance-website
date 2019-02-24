'use strict';

function getFullImg(){
    const imgUl = document.querySelector('.img-thumbnails');
    imgUl.addEventListener('click', event => {
        event.stopPropagation;
        const clickedElem = event.target;
        if (clickedElem.className === 'thumbnail'){
            const fullImg = document.getElementById('full-img');
            fullImg.src = `media/full-size-imgs/img${clickedElem.id}.jpg`;
        
            const imgText = document.getElementById('img-text');
            imgText.innerHTML = `<span>${clickedElem.alt}</span>`;
        }
    })
}

function generateThumbnails(num){
    const imgUl = document.querySelector('.img-thumbnails');
    imgUl.innerHTML = '';
    for (let i = 1; i <= num; i++){
        const imgLi = document.createElement('li');
        const imgLink = `<img class="thumbnail" src="media/thumbnails/img${i}_tn.jpg" alt="caption text for img${i}.jpg" id="${i}" />`;
        imgLi.innerHTML = imgLink;
        imgUl.appendChild(imgLi);
    }

}

generateThumbnails(24);
getFullImg();