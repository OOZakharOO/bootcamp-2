"use strict";

const Ant = function(carouselId){
    let id = document.getElementById(carouselId);
    if (id){
        this.carouselRoot = carouselId;
    } else {
        this.carouselRoot = document.querySelector(".ant-carousel");
    }
    // все объекты слайдера
    this.list = this.carouselRoot.querySelector(".ant-carousel-list");
    this.items = this.carouselRoot.querySelectorAll(".ant-carousel-element");
    this.firstItem = this.carouselRoot.querySelector(".ant-carousel-element");
    this.left_arrow = this.carouselRoot.querySelector(".ant-carousel-arrow-left");
    this.right_arrow = this.carouselRoot.querySelector(".ant-carousel-arrow-right");
    this.dots = this.carouselRoot.querySelector(".ant-carousel-dots");

    this.options = Ant.defaults;
    Ant.initialise(this);
};

Ant.defaults = {
    visibleItem: 1,
    loop: true,
    auto: true,
    interval: 3000,
    speed: 1000,
    touch: true,
    arrows: true,
    dots: true,
};

Ant.prototype.elemPrev = function (num) {
    num = num || 1;

    if (this.options.dots) this.dotOn(this.currentElement);
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
        setTimeout(function() {
            this$.list.style.cssText = "transition:none;";
        }, this.options.speed);
    }
};

Ant.prototype.elemNext = function (num) {
    num = num || 1;

    if (this.options.dots) this.dotOn(this.currentElement);
    this.currentElement += num;
    if (this.currentElement >= this.dotsVisible) this.currentElement = 0;
    if (this.options.dots) this.dotOff(this.currentElement);

    if (!this.options.loop) {
        this.currentOffset -= this.elemWidth * num;
        this.list.style.marginLeft = this.currentOffset + "px";
        if (this.currentElement == this.dotsVisible - 1) {
            this.right_arrow.style.display = "none";
            this.touchNext = false;
        }
        this.left_arrow.style.display = "block";
        this.touchPrev = true;
    } else {
        let elm,
         buf,
          this$ = this; 
        this.list.style.cssText = 
            "transition:margin " + this.options.speed + "ms ease;";
        this.list.style.marginLeft = "-" + this.elemWidth * num + "px";
        this.list.style.cssText = "transition:margin " + this.options.speed + "ms ease;";
        this.list.style.marginLeft = "0px";
        setTimeout(function() {
            this$.list.style.cssText = "transition:none;";
            for (let i = 0; i < num; i++) {
                elm = this$.list.firstElementChild;
                buf = elm.cloneNode(true);
                this$.list.appendChild(buf);
                this$.list.removeChild(elm);
            }
            this$.list.style.marginLeft = "0px";
        }, this.options.speed);
    };
}; 

Ant.prototype.dotOn = function (num) {
    this.indicatorDotsAll[num].style.cssText = 
      "background-color:#000000; cursor:pointer;";
};

Ant.prototype.dotOff = function (num) {
    this.indicatorDotsAll[num].style.cssText = 
      "background-color:#ff0000; cursor:default;";
};

Ant.initialise = function(that) {
    that.elemCount = that.items.length;
    that.dotsVisible = that.elemCount;
    let elemStyle = window.getComputedStyle(that.firstItem);
    that.elemWidth = that.firstItem.offsetWidth + parseInt(elemStyle.marginLeft) + parseInt(elemStyle.marginRight);

    that.currentElement = 0;
    that.currentOffset = 0;
    that.touchPrev = true;
    that.touchNext = true;
    let xTouch, yTouch, xDiff, yDiff, stTime, mvTime;
    let bgTime = getTime();

    function getTime() {
        return new Date().getTime();
    }

    function setAutoScroll() {
        that.autoScroll = setInterval(() => {
            let fnTime = getTime();
            if (fnTime - bgTime + 20 > that.options.interval) {
                bgTime = fnTime;
                that.elemNext();
            }
        }, that.options.interval);
    };

    if (that.elemCount <= that.options.visibleItem) {
        that.options.auto = false;
        that.options.touch = false;
        that.options.arrows = false;
        that.options.dots = false;
        that.left_arrow.style.display = "none";
        that.right_arrow.style.display = "none";
    }

    if (!that.options.loop) {
        that.dotsVisible = that.elemCount - that.options.visibleItem + 1
        that.left_arrow.style.display = "none";
        that.touchPrev = false;
        that.options.auto = false;
    } else if (that.options.auto) {
        setAutoScroll();
        that.list.addEventListener("mouseenter", function() {
            clearInterval(that.autoScroll);
        }, false);
        that.list.addEventListener("mouseleave", setAutoScroll, false); 
    }

    if (that.options.touch) {
        that.list.addEventListener("touchstart", function(event) {
            xTouch = parseInt(event.touches[0].clientX);
            yTouch = parseInt(event.touches[0].clientY);
            stTime = getTime()
        }, false);
        that.list.addEventListener("touchmove", function(event) {
            xDiff = xTouch - parseInt(event.touches[0].clientX);
            yDiff = yTouch - parseInt(event.touches[0].clientY);
            mvTime = getTime;
            if (Math.abs(xDiff) > 15 && Math.abs(xDiff) > Math.abs(yDiff) && mvTime - stTime < 75) {
                stTime = 0;
                if (that.touchNext && xDiff > 0) {
                    bgTime = mvTime;
                    that.elemNext();
                } else if (that.touchPrev && xDiff < 0) {
                    bgTime = mvTime;
                    that.elemPrev();
                }
            }
        }, false);
    }

    if (that.options.arrows) {
        if (!that.options.loop) that.list.style.cssText = "transistion:matgin " + that.options.speed + "ms ease;";
        that.left_arrow.addEventListener("click", function() {
            let fnTime = getTime();
            if (fnTime - bgTime > that.options.speed) {
                bgTime = fnTime;
                that.elemPrev();
            }
        }, false);
        that.right_arrow.addEventListener("click", function() {
            let fnTime = getTime();
            if (fnTime - bgTime > that.options.speed) {
                bgTime = fnTime;
                that.elemNext();
            }
        }, false);
    } else {
        that.left_arrow.style.display = "none";
        that.right_arrow.style.display = "none";
    }
    if (that.options.dots) {
        let sum = "",
        diffNum;
        for (let i = 0; i < that.dotsVisible; i++) {
            sum += '<span class="ant-dot"></span>';
        }
        that.dots.innerHTML = sum;
        that.indicatorDotsAll = that.carouselRoot.querySelectorAll("span.ant-dot");
        for (let n = 0; n < that.dotsVisible; n++) {
            that.indicatorDotsAll[n].addEventListener("click", function() {
                diffNum = Math.abs(n - that.currentElement);
                if (n < that.currentElement) {
                    bgTime = getTime();
                    that.elemPrev(diffNum);
                } else if (n > that.currentElement) {
                    bgTime = getTime();
                    that.elemNext(diffNum);
                }
            }, false);
        }
        that.dotOff(0);
        for (let i = 1; i < that.dotsVisible; i++) {
            that.dotOn(i);
        }
    }
};

new Ant();