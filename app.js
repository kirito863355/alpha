let items = document.querySelectorAll('.dis-charakters .list .item');
let next = document.getElementById('next')
let prew = document.getElementById('prew')
let thumbnail = document.querySelectorAll('.thumbnail .item');

//config set

let countItem = items.length;
let itemActive = 0;

//event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}

//event prev click
prew.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}

// auto run
let refreshInterval = setInterval(() =>{
    next.click();
}, 8000)

function showSlider(){
    //remove active item
    let itemActiveOld = document.querySelector('.dis-charakters .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active')
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    //active new item
    items[itemActive].classList.add('active');
    thumbnail[itemActive].classList.add('active');
}

thumbnail.forEach((thumbnail, index ) =>{
    thumbnail.addEventListener('click' , () => {
        itemActive = index;
        showSlider();
    } )
})

