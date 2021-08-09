'use strict';


document.addEventListener('DOMContentLoaded', () => {


    // Menu

    function menu() {
        const menuBtn =document.querySelector('.header__menu__block'),
          menuBurger = document.querySelector('.menu__burger'),
          menuClose = document.querySelector('.menu__close'),
          menu = document.querySelector('.menu'),
          menuTitle = document.querySelectorAll('.menu__table > li');


        menuBtn.addEventListener('click', () => {
            menuBtn.style.display = "none";
            menuBurger.style.display = 'none';
            menuClose.style.display = 'block';
            menu.style.display = 'block';
        });

        menuClose.addEventListener('click', () => {
            menuClose.style.display = "none";
            menuBurger.style.display = 'block';
            menuBtn.style.display = 'block';
            menu.style.display = 'none';
        });

        menuTitle.forEach(el => {
            el.addEventListener("mouseover", () => {
                menuTitle.forEach(elem => {
                    if (elem.classList.contains('active')) elem.classList.remove('active');
                });

                el.classList.add('active');
            });
            el.addEventListener("mouseout",() => {
                menuTitle.forEach(elem => {
                    if (elem.classList.contains('active')) elem.classList.remove('active');
                });
            });


        });
    }

    menu();

    // directions 

    function directions() {
        const directionsLinkTitle = document.querySelectorAll('.directions__link__title'),
              directionsItemBlock = document.querySelectorAll('.directions__item__block');

        directionsLinkTitle.forEach((el, titleindex)=> {
            el.addEventListener('mouseover', (e) => {
                directionsLinkTitle.forEach((el) => {
                    el.classList.remove('directions__link__title__active');
                });
                e.target.classList.add('directions__link__title__active');
                directionsItemBlock.forEach((el, textindex) => {
                    titleindex === textindex ? el.classList.add('directions__item__block__active') : el.classList.remove('directions__item__block__active');
                });
            });
        });             
    }

    directions();

    //Gif

    function gif() {
        function getCoords(el) {
            // кроме IE8-
            let block = document.querySelector(".about_us__content__gif__block").getBoundingClientRect();
            let blockBottom =
              block.top + document.querySelector(".about_us__content__gif__block").offsetHeight;
            let blockLeft = block.left + pageXOffset;
    
            let elem = el.getBoundingClientRect();
    
            if (blockBottom >= elem.top && blockLeft <= elem.left + pageXOffset)
              return true;
            else {
              if (el.classList.contains("active")) el.classList.remove("active");
            }
          }
    
          setInterval(() => {
            document.querySelectorAll("path").forEach((el) => {
              if (getCoords(el)) el.classList.add("active");
            });
          }, 10);
    }

    gif();

    //Reviews

    function reviews() {
        const reviewsText = document.querySelectorAll('.reviews__text'),
              reviewsBtn = document.querySelectorAll('.reviews__btn'),
              reviewsModal = document.querySelector('.reviews__modal'),
              closeModalReviews = document.querySelector('.close__modal__reviews'),
              closeModal = document.querySelector('use');

        //чтобы после 7 строк кода появился скролл
        reviewsText.forEach(item => {
          item.style.height = item.offsetHeight + 'px';
        });
      
        //открытие модал окна
        reviewsBtn.forEach(item => {
            item.addEventListener('click', (e) => {
                e.target.classList.add('reviews__btn__active');
                reviewsModal.style.display = 'block';
                document.body.style.overflow = 'hidden';// чтобы оснoвное окно нельзя было прокрутить
            });
        });

        reviewsModal.addEventListener('click', (e) => {
            console.log(e.target);
            if (e.target === reviewsModal || e.target === closeModalReviews || e.target === closeModal) {
                reviewsModal.style.display = 'none';
                document.body.style.overflow = '';  // возвращаем, чтобы можно было скроллить страницу
                reviewsBtn.forEach(item => {
                    item.classList.remove('reviews__btn__active');
                });

            }
           
        });


    }
      
    reviews();


    //Всплывающие фотки 

    function photo() {

        const gifPortfolio = document.querySelector('.gif__portfolio__inner');

        gifPortfolio.addEventListener("mouseout", getClickPosition, false);

        function getClickPosition (e) { //слушатель события движения мыши

            let picture = document.querySelectorAll(".gif__photo");
            let parentPosition = getPosition(e.currentTarget);

            picture.forEach(item => {
                let xPosition = e.clientX - parentPosition.x - (item.clientWidth / 2);
                let yPosition = e.clientY - parentPosition.y - (item.clientHeight / 2);
                item.style.left = xPosition + "px";
                item.style.top = yPosition + "px";
                item.style.transition = '1s';
                item.style.opacity = '1';
                item.classList.add('active');
                item.style.borderRadius = '0';
                setTimeout(() => {
                    item.style.opacity = '0';
                    item.style.borderRadius = '10%';
                }, 2000);
            });
        }
           
        function getPosition(element) { //расчёт позиции элемента
            let xPos = 0;
            let yPos = 0;
            while (element) {
             if (element.tagName == "DIV") {
              const xScroll = element.scrollLeft || document.documentElement.scrollLeft;
              const yScroll = element.scrollTop || document.documentElement.scrollTop;
              xPos += (element.offsetLeft - xScroll + element.clientLeft);
              yPos += (element.offsetTop - yScroll + element.clientTop);
             } 
             else {
              xPos += (element.offsetLeft - element.scrollLeft + element.clientLeft);
              yPos += (element.offsetTop - element.scrollTop + element.clientTop);
             }
             element = element.offsetParent;
            }
            return { x: xPos, y: yPos };
        }
    }

    photo();

    

});


