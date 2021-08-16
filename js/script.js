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

    const aboutUsContentImg = document.querySelector('.about_us__content__img');

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
    if (document.body.contains(aboutUsContentImg)) {
        gif();
    }

    //Reviews

    function reviews() {
        const reviewsBtn = document.querySelectorAll('.reviews__btn'),
              reviewsModal = document.querySelectorAll('.reviews__modal'),
              closeModalReviews = document.querySelector('.close__modal__reviews'),
              closeModal = document.querySelector('use');
      
        //открытие модал окна
        reviewsBtn.forEach(item => {
            item.addEventListener('click', (e) => {
                e.target.classList.add('reviews__btn__active');
                reviewsModal.forEach(item => {
                    item.classList.add('active__reviews__modal');
                });
                document.body.style.overflow = 'hidden';// чтобы оснoвное окно нельзя было прокрутить
            });
        });

        reviewsModal.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target === elem || e.target === closeModalReviews || e.target === closeModal) {
                    reviewsModal.forEach(item => {
                        item.classList.remove('active__reviews__modal');
                    });                    
                    document.body.style.overflow = '';  // возвращаем, чтобы можно было скроллить страницу
                    reviewsBtn.forEach(item => {
                        item.classList.remove('reviews__btn__active');
                    });
    
                }
               
            });
        });
        


    }
      
    reviews();
    


    //Всплывающие фотки 

    function photo() {

        const gifPortfolio = document.querySelectorAll('.gif__portfolio__inner');

        gifPortfolio.forEach(item => {
            item.addEventListener("mouseout", getClickPosition, false);
        });
        let current = 1;
        setInterval(() => {
            current++;
            if ( current === 9) {
                current = 1;
            }
        }, 200);

        let currentTwo = 0;
        setInterval(() => {
            currentTwo++;
            if ( currentTwo === 8) {
                currentTwo = 0;
            }
        }, 200);
        function getClickPosition (e) { //слушатель события движения мыши

            const pictureOne = document.querySelectorAll(".gif__photo__one"),
                  pictureTwo = document.querySelectorAll(".gif__photo__two"),
                  pictureThree = document.querySelectorAll(".gif__photo__three"),
                  pictureFour = document.querySelectorAll(".gif__photo__four"),
                  pictureFive = document.querySelectorAll(".gif__photo__five"),
                  pictureSix = document.querySelectorAll(".gif__photo__six"),
                  pictureSeven = document.querySelectorAll(".gif__photo__seven"),
                  pictureEight = document.querySelectorAll(".gif__photo__eight");
            let parentPosition = getPosition(e.currentTarget);
            
            pictureOne.forEach(item => {
                item.style.zIndex = 1;
            });
            pictureTwo.forEach(item => {
                item.style.zIndex = 2;
            });
            pictureThree.forEach(item => {
                item.style.zIndex = 3;
            });
            pictureFour.forEach(item => {
                item.style.zIndex = 4;
            });
            pictureFive.forEach(item => {
                item.style.zIndex = 5;
            });
            pictureSix.forEach(item => {
                item.style.zIndex = 6;
            });
            pictureSeven.forEach(item => {
                item.style.zIndex = 7;
            });
            pictureEight.forEach(item => {
                item.style.zIndex = 8;
            });
            
            function check (variable) {
                variable.forEach(item => {
                    let xPosition = e.clientX - parentPosition.x - (item.clientWidth / 2);
                    let yPosition = e.clientY - parentPosition.y - (item.clientHeight / 2);
                    if (current == item.style.zIndex || currentTwo == item.style.zIndex) {
                        item.style.left = xPosition + "px";
                        item.style.top = yPosition + "px";
                        item.style.transition = '.4s linear';
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                        item.style.borderRadius = '0';
                        item.classList.add('active');
                        item.style.borderRadius = '0';
                        item.style.marginLeft = '-100px';
                    } else {
                        setTimeout(() => {
                            item.style.opacity = '0';
                            item.style.transform = 'scale(0)';
                            item.style.borderRadius = '100%';
                            item.style.marginLeft = '0px';
                        }, 0);
                    }
                });
            }

            check(pictureOne);
            check(pictureTwo);
            check(pictureThree);
            check(pictureFour);
            check(pictureFive);
            check(pictureSix);
            check(pictureSeven);
            check(pictureEight);
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
            return {x: xPos + 10, y: yPos};
        }
    }

    if (document.documentElement.clientWidth >= 768 ) {
        photo();
        serviceImg();
    } 

    

    //Клик на инпут

    function clickInput() {
        
        document.onclick=(e)=>{

            if(e.target.classList.contains('input')){
                closeDescr();
              e.target.closest('div').querySelector('.input__descr').style.display="block";
            }
            else{
                closeDescr();
            }
        };

        function closeDescr(){
            document.querySelectorAll('.input__descr').forEach(el=>{
                if(el.style.display=='block' && el.closest('div').querySelector('input').value=="")el.style.display='none';
            });
        }

    }
    clickInput();


    //modal 
    function modal() {

        const feedbackModal = document.querySelectorAll('.feedback__modal'),
              closeModalFeedback = document.querySelector('.close__modal__feedback'),
              closeModalFeedbackUse = document.getElementById('close__modal__feedback__use__id'),
              btnModalOpen = document.querySelectorAll('.btn__modal');

        btnModalOpen.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                feedbackModal.forEach(item => {
                    item.style.display = 'block';
                });
                document.body.style.overflow = 'hidden';// чтобы оснoвное окно нельзя было прокрутить

            });
        });

        feedbackModal.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target === item || e.target === closeModalFeedback || e.target === closeModalFeedbackUse) {
                    feedbackModal.forEach(item => {
                        item.style.display = 'none';
                    });
                    document.body.style.overflow = '';  // возвращаем, чтобы можно было скроллить страницу
                    
                }
            
            });
        });     
    }
    modal();

    //При наводе на блок появляется картинка и бегает за мышкой

    function serviceImg() {
        const picture = document.querySelectorAll(".service__animation__img");

        document.querySelectorAll('.animation').forEach(item => {
            item.addEventListener("mousemove", getClickPosition, false);
            item.addEventListener("mouseout", () => {
                picture.forEach(el => {  
                    el.classList.add('hidden');
                    el.classList.remove('show');
                });
            });
        });
        
        function getClickPosition (e) { //слушатель события движения мыши
            let parentPosition = getPosition(e.currentTarget);
            picture.forEach(elem => {
                let xPosition = e.clientX - parentPosition.x - (elem.clientWidth / 2);
                let yPosition = e.clientY - parentPosition.y - (elem.clientHeight / 2);
                elem.style.left = xPosition + "px";
                elem.style.top = yPosition + "px";
                elem.classList.remove('hidden');
                elem.classList.add('show');
            });
        }

        function getPosition(element) { //расчёт позиции элемента
            let xPos = 0;
            let yPos = 0;
            while (element) {
                if (element.tagName == "DIV") {
                    let xScroll = element.scrollLeft || document.documentElement.scrollLeft;
                    let yScroll = element.scrollTop || document.documentElement.scrollTop;
                    xPos += (element.offsetLeft - xScroll + element.clientLeft);
                    yPos += (element.offsetTop - yScroll + element.clientTop);
                } else {
                    xPos += (element.offsetLeft - element.scrollLeft + element.clientLeft);
                    yPos += (element.offsetTop - element.scrollTop + element.clientTop);
                }
                element = element.offsetParent;
            }
        
            return {x: xPos -400, y: yPos};
        }
    }

    // Запуск видео

    function playVideo() {
        const playUse = document.querySelector('.play__video__use'),
              serviceIntroVideo = document.querySelector('.service__intro__video');
              

        playUse.addEventListener('click', (e) => {
            if (e.target.style.opacity == '0') {
                serviceIntroVideo.pause();
                e.target.style.opacity = '1';
            } else {
                serviceIntroVideo.play();
                e.target.style.opacity = '0';
            }
        });

        serviceIntroVideo.addEventListener('click', (e) => {
            if (playUse.style.opacity == '0') {
                e.target.pause();
                playUse.style.opacity = '1';
            } else {
                e.target.play();
                playUse.style.opacity = '0';
            }
        });
        serviceIntroVideo.addEventListener('ended', (e) => {
            e.target.pause();
            playUse.style.opacity = '1';
        });
    

    }

    playVideo();

    // //Плавное увеличение чисел

    // function onScrolledTo(el, callback) {

    //     // Определяем нормализованное смещение элемента в видимой области окна (от 0 до 1)
    //     // 0 = элемент выехал снизу из под экрана ... 1 = элемент заехал вверх под экран
    //     function normOffset() {
    //       let eR = el.getBoundingClientRect();
    //       return 1.0 - eR.bottom / (window.innerHeight + el.offsetHeight);
    //     }
      
    //     // Выполнение задачи
    //     function taskUpdate() {
    //       if (normOffset() > 0) {
    //         window.removeEventListener('resize', onUpdate);
    //         window.removeEventListener('scroll', onUpdate);
    //         callback();
    //       }
    //     }
      
    //     // Слушатель
    //     function onUpdate(event) {
    //       taskUpdate();
    //     }
      
    //     // Запуск задачи
    //     window.addEventListener('resize', onUpdate);
    //     window.addEventListener('scroll', onUpdate);
    //     taskUpdate();
      
    //   }

    // onScrolledTo(document.querySelector('.service__info__inner__right__number'), 
        playNumber(5, 40,200,500,2000,120,140,147,149,150, '.numberOne');
        playNumber(0, 20,100,300,2000,900,980,990,999,1000, '.numberTwo');
    // );

    function playNumber(one, two, three, four, five, six, seven, eight, nine, ten, selector ) {
        
        const number = document.querySelector(selector);
        let current = 0;
            setInterval(() => {
                if(current <= six) {
                    number.innerHTML = current++;
                }
            }, one);
            setInterval(() => {
                if(current <= seven) {
                    number.innerHTML = current++;
                }
            }, two);
            setInterval(() => {
                if(current <= eight) {
                    number.innerHTML = current++;
                }
            }, three);
            setInterval(() => {
                if(current <= nine) {
                    number.innerHTML = current++;
                }
            }, four);
            setInterval(() => {
                if(current <= ten) {
                    number.innerHTML = current++;
                }
            }, five);  
    }

    


});


