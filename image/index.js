console.log('100');

const burgerMenu = document.querySelector('.header__burger-menu');
const menu = document.querySelector('.menu');
const activeMenu = document.querySelector('.menu--active');
const wrapper = document.querySelector('.wrapper')
const body = document.querySelector('body');
const steps = document.querySelector('.steps');

//Pop-up/
const btnLogin = document.querySelector('.btn__login')
const popUp = document.querySelector('.sign-pop-up')
const header = document.querySelector('.header');
const loginSignIn = document.querySelector('.login-pop-up')




// открытие и закрытие модального окна в мобильной версии

document.addEventListener('click', event => {

  if (document.documentElement.clientWidth < 391) {
    // закрываем модальное окно




    if (event.target.closest('.menu__btn-close') || !event.target.closest('.menu__burger')) {
      menu.style.display = 'none';
      // wrapper.classList.remove('dark__theme');
    }

    // открыть модальное окно бургер-меню
    if (event.target.closest('.header__burger-btn')) {
      menu.style.display = 'inline-block'
      // wrapper.classList.add('dark__theme');git 
    }


    if (!event.target.closest('.sign-pop-up')) {
      popUp.classList.remove('sign-pop-up--active');
    }

    if (!event.target.closest('.login-pop-up')) {
      loginSignIn.classList.remove('login-pop-up--active');
    }

    if (event.target.closest('.menu__link__account')) {
      menu.style.display = 'none';
      popUp.classList.add('sign-pop-up--active');
    }
  }


  // ДОБАВИТЬ ТЕМНУЮ ТЕМУ

  if (document.documentElement.clientWidth > 391) {

    // При клике вне попапа SignIn закрывается 
    if (!event.target.closest('.sign-pop-up')) {
      popUp.classList.remove('sign-pop-up--active');
      loginSignIn.classList.remove('login-pop-up--active')
      // body.style.overflow = 'auto';
      // wrapper.classList.remove('dark__theme');
    }


    // При клике на кнопку Login открывается попап
    if (event.target.closest('.btn__login')) {
      popUp.classList.toggle('sign-pop-up--active');

      // body.style.overflow = 'auto';
      // wrapper.classList.add('dark__theme');
    }
  }
  // // LOGIN POPUP

  // При клике Register попапа SignIn появляется попап Сreate account
  if (event.target.closest('.sign-pop-up__registration-link')) {
    popUp.classList.remove('sign-pop-up--active');
    loginSignIn.classList.add('login-pop-up--active')
  }

  // При клике в пределах попапа Login попап не скрывается
  if (event.target.closest('.login-pop-up')) {
    loginSignIn.classList.add('login-pop-up--active')
  }

  // При клике LogIn попапа Login попап переключается на попап SignIn
  if (event.target.closest('.login-pop-up__registration-link')) {
    popUp.classList.add('sign-pop-up--active');
    loginSignIn.classList.remove('login-pop-up--active')
  }

  // При введении email и пароля появляется алерт с веденными данными
  if (event.target.closest('.sign-pop-up__sigh-in')) {
    alert(`email: ${document.querySelector('.sign-pop-up__email-input').value}
    password ${document.querySelector('.sign-pop-up__password-input').value}`);

  }

  // При введении email и пароля появляется алерт с веденными данными
  if (event.target.closest('.login-pop-up__sigh-in')) {
    alert(`email: ${document.querySelector('.login-pop-up__email-input').value}
    password ${document.querySelector('.login-pop-up__password-input').value}`);
  }



})


let item = document.querySelectorAll('.destinations__item');



if (document.documentElement.clientWidth > 391) {
  // Нажимаем на левую картинку слайд вправо переходит
  document.querySelector('.destination__item-right').addEventListener('click', function () {
    item.forEach(element => {
      element.classList.add('item__right')
      element.classList.remove('item__left')
      element.classList.remove('item__center')
    })
    document.querySelector('.dot__third').classList.add('destinations__dot-btn--active');
    document.querySelector('.dot__first').classList.remove('destinations__dot-btn--active');
    document.querySelector('.dot__second').classList.remove('destinations__dot-btn--active');

    // Нажимаешь на картинку недоступную - 1, переключается на нее
    document.querySelector('.destination__item-right-unactive').addEventListener('click', function () {
      item.forEach(element => {
        element.classList.remove('item__right')
        element.classList.add('item__left')
        element.classList.remove('item__center')
      })
      // меняется кнопка на соответсвующий элемент
      document.querySelector('.dot__first').classList.add('destinations__dot-btn--active');
      document.querySelector('.dot__third').classList.remove('destinations__dot-btn--active');
      document.querySelector('.dot__second').classList.remove('destinations__dot-btn--active');
    })

    // Нажимаешь на картинку недоступную - 3, после того как нажал на 3 картину, которая недотупна
    document.querySelector('.destination__item-left-unactive').addEventListener('click', function () {
      item.forEach(element => {
        element.classList.add('item__right')
        element.classList.remove('item__left')
        element.classList.remove('item__center')
      })
      document.querySelector('.dot__third').classList.add('destinations__dot-btn--active');
      document.querySelector('.dot__first').classList.remove('destinations__dot-btn--active');
      document.querySelector('.dot__second').classList.remove('destinations__dot-btn--active');
    })
  })

  // Нажимаем на правую картинку слайд влево переходит
  document.querySelector('.destination__item-left').addEventListener('click', function () {

    item.forEach(element => {
      element.classList.add('item__left');
      element.classList.remove('item__center');
      element.classList.remove('item__right');
    })
    document.querySelector('.dot__first').classList.add('destinations__dot-btn--active');
    document.querySelector('.dot__third').classList.remove('destinations__dot-btn--active');
    document.querySelector('.dot__second').classList.remove('destinations__dot-btn--active');

    //Нажимаешь на картинку справа, которая недосупно
    document.querySelector('.destination__item-left-unactive').addEventListener('click', function () {
      item.forEach(element => {
        element.classList.add('item__right')
        element.classList.remove('item__left')
        element.classList.remove('item__center')
      })

    })
    document.querySelector('.destination__item-right-unactive').addEventListener('click', function () {
      item.forEach(element => {
        element.classList.remove('item__right')
        element.classList.add('item__left')
        element.classList.remove('item__center')
      })
    })
  })

  // Нажимаем на центральную картинку слайд влево переходит
  document.querySelector('.destination__item-center').addEventListener('click', function () {

    item.forEach(element => {
      element.classList.add('item__center');
      element.classList.remove('item__right');
      element.classList.remove('item__left');
    })
    document.querySelector('.dot__second').classList.add('destinations__dot-btn--active');
    document.querySelector('.dot__third').classList.remove('destinations__dot-btn--active');
    document.querySelector('.dot__first').classList.remove('destinations__dot-btn--active');
  })

  //Нажатие на первую кнопуку
  document.querySelector('.dot__first').addEventListener('click', function () {
    this.classList.add('destinations__dot-btn--active');
    document.querySelector('.dot__second').classList.remove('destinations__dot-btn--active');
    document.querySelector('.dot__third').classList.remove('destinations__dot-btn--active');
    item.forEach(element => {
      element.classList.add('item__left');
      element.classList.remove('item__center');
      element.classList.remove('item__right');
    })
  })

  //Нажатие на вторую кнопуку
  document.querySelector('.dot__second').addEventListener('click', function () {
    this.classList.add('destinations__dot-btn--active');
    document.querySelector('.dot__first').classList.remove('destinations__dot-btn--active');
    document.querySelector('.dot__third').classList.remove('destinations__dot-btn--active');
    item.forEach(element => {
      element.classList.remove('item__left');
      element.classList.add('item__center');
      element.classList.remove('item__right');
    })


  })

  //Нажатие на третью кнопку
  document.querySelector('.dot__third').addEventListener('click', function () {
    this.classList.add('destinations__dot-btn--active');
    document.querySelector('.dot__second').classList.remove('destinations__dot-btn--active');
    document.querySelector('.dot__first').classList.remove('destinations__dot-btn--active');
    item.forEach(element => {
      element.classList.remove('item__left');
      element.classList.remove('item__center');
      element.classList.add('item__right');
    })
  })

}


// МОБИЛЬНАЯ ВЕСРИЯ СЛАЙДЕР

const arrowLeftMobile = document.querySelector('.destinations__arrow-left');
const arrowRightMobile = document.querySelector('.destinations__arrow-right');
const dots = document.querySelectorAll('.destinations__dot-btn');


if (document.documentElement.clientWidth < 391) {
  // document.querySelector('.dot__first').classList.add('destinations__dot-btn--active');
  // document.querySelector('.dot__second').classList.remove('destinations__dot-btn--active');
  arrowLeftMobile.classList.add('destinations__arrow--unactive')
  document.querySelector('.destination__item-left-unactive').style.display = "none";
  document.querySelector('.destination__item-right-unactive').style.display = 'none'

  let index = 1;

  //Слайды
  const activeSlide = n => {

    for (slide of item) {
      slide.classList.remove('destinations__item--active')
    }
    item[n].classList.add('destinations__item--active')
  }

  const nextSlide = () => {
    if (index == item.length - 2) {
      index = 1
      activeSlide(index);
    } else {
      index++;
      activeSlide(index);
    }
  }

  
// ТОЧКИ
  let indexDots = 0
  const activeDots = x => {

    for (dotBtn of dots) {
      dotBtn.classList.remove('destinations__dot-btn--active')
    }
    dots[x].classList.add('destinations__dot-btn--active')
  }

  const nextDots = () => {
    if (indexDots == dots.length - 1) {
      indexDots  = 0
      activeDots(indexDots);
    } else {
      indexDots++;
      activeDots(indexDots);
    }
  }

  arrowRightMobile.addEventListener('click', nextSlide);
  arrowRightMobile.addEventListener('click', nextDots)
  arrowLeftMobile.addEventListener('click', nextSlide)
  arrowLeftMobile.addEventListener('click', nextDots);
}






