/*
document.addEventListener("DOMContentLoaded", event => {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element =>{
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

  
});
*/


$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  
  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

  new WOW().init()


  
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: {
        required: true,
        minlength: 16,
      },
      
      userEmail: {
        required: true,
        email: true,
      },
    }, 
    messages: {
      userName: {
        required: "Имя обязательно!",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не более 15 символов",
      },
      userPhone: {
        required: "Телефон обязателен!",
        minlength: "Телефон в формате: +7(000)00-00-000",
      },
      userEmail: {
        required: "Email обязателен!",
        email: "Введите корректный email",
      }
    }

  });

  // 
  $('[type=tel]').mask('+7(000)00-00-000', {
    placeholder: "+7(__) __-__-___"
  });


  
  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: {
        required: true,
        minlength: 16,
      },
    },
    messages: {
      userName: {
        required: "Имя обязательно!",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не более 15 символов",
      },
      userPhone: {
        required: "Телефон обязателен!",
        minlength: "Телефон в формате: +7(000)00-00-000",
      }
    }

  });

  
  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: {
        required: true,
        minlength: 16,
      },
      
      userQuestion: {
        required: true
      },
    },
    messages: {
      userName: {
        required: "Имя обязательно!",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не более 15 символов",
      },
      userPhone: {
        required: "Телефон обязателен!",
        minlength: "Телефон в формате: +7(000)00-00-000",
      },
      userQuestion: {
        required: "Задайте вопрос",
      }
    }

  });
  
});