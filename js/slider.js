"use strict";

const Ant = function(carouselId){
    let carouselId = document.getElementById(carouselId);
    if (carouselId){
        this.carouselRoot = carouselId;
    } else {
        this.carouselRoot = ducument.querySelector(".ant-carousel");
    }
    // все объекты слайдера
    this.list = this.carouselRoot.querySelector(".ant-carousel-list");
    this.items = this.carouselRoot.querySelectorAll(".ant-carousel-element");
    this.firstItem = this.carouselRoot.querySelector(".ant-carousel-element");
    this.left_arrow = this.carouselRoot.querySelector(".ant-carousel-arrow-left");
    this.right_arrow = this.carouselRoot.querySelector(".ant-carousel-arrow-right");
    this.dots = this.carouselRoot.querySelector(".ant-carousel-dots");


//     // s3_ant-carousel
//     const antСarousel = document.querySelector('.s3_ant-carousel');

//     // ant-carousel-hider
//     const antCarouselHider = document.querySelector('.ant-carousel-hider');
// carousel-arrow-left
//     const antCarouselArrowLeft = document.querySelector('.ant-carousel-arrow-left');

//     // ant-carousel-list
//     const antCarouselList = document.querySelector('.ant-carousel-list');

//     // ant-carousel-element
//     const antCarouselElement = document.querySelector('.ant-carousel-element');

//    // ant-carousel-arrow-right
//     const antCarouselArrowRight = document.querySelector('.ant-carousel-arrow-right');

//    // ant-carousel-dots
//     const antCarouselDots = document.querySelector('.ant-carousel-dots');
//     this 
//     // ant-
};

Ant.defaults = {
    visibleItem: 1,
    loop: true,
    auto: true,
    interval: 1500,
    speed: 1750,
    touch: true,
    arrows: true,
    dots: true,
};

Ant.prototype.elemPrev = function(num){
    num = num || 1;

    if (this.options.dots) this.dotOn(this.surrentElement);
    this.currentElement -= num;
    if (this.currentElement < 0) this.currentElement = this.visibleItem - 1;
    if (this.options.dots) this.dotOff(this.currentElement);

    if (!this.options.loop) {
        this.currentOffset += this.elemWidth * num;
        this.list.style.marginLeft = this.currentOffset + "px";
        if (this.currentElement == 0) {
            this.left_arrow.style.display = "none";
            this.touchPrev = false;
        }
        this.right_arrow.style.display = "block";
        this.touchNext = true;
    } else {
        let elem, buf, this$ = this;

        for (let i = 0; i < num; i++) {
            // записываем ссылку на поледний елемент списка в переменную elem
            elem = this.list.lastElementChild;
            // создаем глубокий последнего елемента списка 
            buf = elem.cloneNode(true);
            // встраиваем склонированый последний елемент списка в самое начало списка
            this.list.insertBefore(buf, this.list.firstElementChild);
            // удаляем последний елемент списка из которого делали клон
            elem.remove();
        }
        this.list.style.cssText = "transition:margin " + this.options.speed + "ms ease;";
        this.list.style.marginLeft = "0px";
        setTimeout(() => {
            this$.list.style.cssText = "transition:none"
        }, this.options.speed);
    }
}

Ant.prototype.elemNext = function(num){
    
}