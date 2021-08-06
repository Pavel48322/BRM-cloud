'use strict';


document.addEventListener('DOMContentLoaded', () => {


    // Menu

    function menu() {
        const menuBtn =document.querySelector('.menu__text'),
          menuBurger = document.querySelector('.menu__burger'),
          menuClose = document.querySelector('.menu__close'),
          menu = document.querySelector('.menu'),
          menuTitle = document.querySelectorAll('.menu__table > li'),
          menuLink = document.querySelectorAll('.menu__table > li > ul');


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

        menuTitle.forEach(item => {
            item.addEventListener('mouseover', () => {
                menuLink.forEach(item => {
                    item.style.display = 'block';
                });
            });
        });



    }

    menu();

    // directions 

    function directions() {
        const directionsLinkTitle = document.querySelectorAll('.directions__link__title'),
              directionsItemBlock = document.querySelectorAll('.directions__item__block');

        directionsLinkTitle.forEach(item => {
            item.addEventListener('mouseover', (e) => {
                directionsLinkTitle.forEach(item => {
                    item.classList.remove('directions__link__title__active');
                });
                e.target.classList.add('directions__link__title__active');
                if (directionsLinkTitle[1].className == 'directions__link__title directions__link__title__active') {
                    directionsItemBlock.forEach(item => {
                        item.classList.remove('directions__item__block__active');
                        directionsItemBlock[1].classList.add('directions__item__block__active');
                    });
                }
                else if (directionsLinkTitle[2].className == 'directions__link__title directions__link__title__active') {
                    directionsItemBlock.forEach(item => {
                        item.classList.remove('directions__item__block__active');
                        directionsItemBlock[2].classList.add('directions__item__block__active');
                    });
                }
                else if (directionsLinkTitle[3].className == 'directions__link__title directions__link__title__active') {
                    directionsItemBlock.forEach(item => {
                        item.classList.remove('directions__item__block__active');
                        directionsItemBlock[3].classList.add('directions__item__block__active');
                    });
                }
                else if (directionsLinkTitle[4].className == 'directions__link__title directions__link__title__active') {
                    directionsItemBlock.forEach(item => {
                        item.classList.remove('directions__item__block__active');
                        directionsItemBlock[4].classList.add('directions__item__block__active');
                    });
                }
                else if (directionsLinkTitle[5].className == 'directions__link__title directions__link__title__active') {
                    directionsItemBlock.forEach(item => {
                        item.classList.remove('directions__item__block__active');
                        directionsItemBlock[5].classList.add('directions__item__block__active');
                    });
                } else {
                    directionsItemBlock.forEach(item => {
                        item.classList.remove('directions__item__block__active');
                        directionsItemBlock[0].classList.add('directions__item__block__active');
                    });
                }
            });
        });             
    }

    directions();

});


