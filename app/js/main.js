"use strict";
"use strict";

var addressBox = document.querySelector('.contacts__box');
var addressClose = document.querySelector('.box__btn');
addressClose.addEventListener('click', function () {
  addressBox.classList.add('contacts__box--close');
});
"use strict";

var burger = document.querySelector('.header__burger');
var menu = document.querySelector('.header__nav--768');
var close = document.querySelector('.nav__close');
burger.addEventListener('click', function () {
  burger.classList.add('burger--active');
  menu.classList.add('header__nav--active');
  document.body.classList.add('stop-scroll');
});
close.addEventListener('click', function () {
  burger.classList.remove('burger--active');
  menu.classList.remove('header__nav--active');
  document.body.classList.remove('stop-scroll');
});
"use strict";

var searchString = document.querySelector('.header__search');
var search = document.querySelector('.header__btn');
var searchClose = document.querySelector('.search__close');
search.addEventListener('click', function () {
  searchString.classList.add('header__search--active');
});
searchClose.addEventListener('click', function () {
  searchString.classList.remove('header__search--active');
});
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var validationContacts = new JustValidate('.contacts__form', {
    errorLabelStyle: {
      color: '#ff3030'
    },
    errorFieldCssClass: ['invalid-contacts'],
    errorLabelCssClass: ['contacts-error-label']
  });
  var validation = new JustValidate('.about-us__form', {
    errorLabelStyle: {
      color: '#f06666'
    },
    errorFieldCssClass: ['invalid'],
    errorLabelCssClass: ['about-us-error-label']
  });
  validationContacts.addField('#name', [{
    rule: 'minLength',
    value: 2,
    errorMessage: "Недостаточное количество символов"
  }, {
    rule: 'maxLength',
    value: 20,
    errorMessage: "Вы ввели больше символов чем положено"
  }, {
    rule: 'required',
    errorMessage: "Введите имя"
  }, {
    rule: 'customRegexp',
    value: /[а-я]/gi,
    errorMessage: "Недопустимый формат"
  }]).addField('#email-input', [{
    rule: 'required',
    errorMessage: 'Введите email'
  }, {
    rule: 'email',
    errorMessage: 'Недопустимый формат'
  }, {
    rule: 'customRegexp',
    value: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi,
    errorMessage: "Недопустимый формат"
  }]);
  validation.addField('#email', [{
    rule: 'required',
    errorMessage: 'Введите email'
  }, {
    rule: 'email',
    errorMessage: 'Недопустимый формат'
  }, {
    rule: 'customRegexp',
    value: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi,
    errorMessage: "Недопустимый формат"
  }]);
});
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var validationContacts = new JustValidate('.contacts__form', {
    errorLabelStyle: {
      color: '#ff3030'
    },
    errorFieldCssClass: ['invalid-contacts'],
    errorLabelCssClass: ['contacts-error-label']
  });
  var validation = new JustValidate('.about-us__form', {
    errorLabelStyle: {
      color: '#f06666'
    },
    errorFieldCssClass: ['invalid'],
    errorLabelCssClass: ['about-us-error-label']
  });
  validationContacts.addField('#name', [{
    rule: 'minLength',
    value: 2,
    errorMessage: "Недостаточное количество символов"
  }, {
    rule: 'maxLength',
    value: 20,
    errorMessage: "Вы ввели больше символов чем положено"
  }, {
    rule: 'required',
    errorMessage: "Введите имя"
  }, {
    rule: 'customRegexp',
    value: /[а-я]/gi,
    errorMessage: "Недопустимый формат"
  }]).addField('#email-input', [{
    rule: 'required',
    errorMessage: 'Введите email'
  }, {
    rule: 'email',
    errorMessage: 'Недопустимый формат'
  }, {
    rule: 'customRegexp',
    value: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi,
    errorMessage: "Недопустимый формат"
  }]);
  validation.addField('#email', [{
    rule: 'required',
    errorMessage: 'Введите email'
  }, {
    rule: 'email',
    errorMessage: 'Недопустимый формат'
  }, {
    rule: 'customRegexp',
    value: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi,
    errorMessage: "Недопустимый формат"
  }]);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyIsImFkZHJlc3NfY2xvc2UuanMiLCJidXJnZXIuanMiLCJzZWFyY2guanMiLCJ2YWxpZGF0aW9uLmpzIiwibWFpbi5qcyJdLCJuYW1lcyI6WyJhZGRyZXNzQm94IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkcmVzc0Nsb3NlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsImJ1cmdlciIsIm1lbnUiLCJjbG9zZSIsImJvZHkiLCJyZW1vdmUiLCJzZWFyY2hTdHJpbmciLCJzZWFyY2giLCJzZWFyY2hDbG9zZSIsInZhbGlkYXRpb25Db250YWN0cyIsIkp1c3RWYWxpZGF0ZSIsImVycm9yTGFiZWxTdHlsZSIsImNvbG9yIiwiZXJyb3JGaWVsZENzc0NsYXNzIiwiZXJyb3JMYWJlbENzc0NsYXNzIiwidmFsaWRhdGlvbiIsImFkZEZpZWxkIiwicnVsZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSUEsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztBQUN6RCxJQUFJQyxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztBQUV0REMsWUFBWSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUN6Q0osVUFBVSxDQUFDSyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztBQUNwRCxDQUFDLENBQUM7OztBQ0xGLElBQU1DLE1BQU0sR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMsaUJBQWlCLENBQUM7QUFDeEQsSUFBTU0sSUFBSSxHQUFHUCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztBQUN4RCxJQUFNTyxLQUFLLEdBQUVSLFFBQVEsQ0FBQ0MsYUFBYSxDQUFFLGFBQWEsQ0FBQztBQUduREssTUFBTSxDQUFDSCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQy9CLFlBQVk7RUFF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LENBQ0YsQ0FBQyxDQUNESCxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDckJDLElBQUksRUFBRSxVQUFVO0lBQ2hCRSxZQUFZLEVBQUU7RUFDbEIsQ0FBQyxFQUNEO0lBQ0VGLElBQUksRUFBRSxPQUFPO0lBQ2JFLFlBQVksRUFBRTtFQUNoQixDQUFDLEVBQ0Q7SUFDSUYsSUFBSSxFQUFFLGNBQWM7SUFDcEJDLEtBQUssRUFBRSxxREFBcUQ7SUFDNURDLFlBQVksRUFBRTtFQUNsQixDQUFDLENBQ0YsQ0FBQztFQUNGSixVQUFVLENBQ1RDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQkMsSUFBSSxFQUFFLFVBQVU7SUFDaEJFLFlBQVksRUFBRTtFQUNoQixDQUFDLEVBQ0Q7SUFDRUYsSUFBSSxFQUFFLE9BQU87SUFDYkUsWUFBWSxFQUFFO0VBQ2hCLENBQUMsRUFDRDtJQUNFRixJQUFJLEVBQUUsY0FBYztJQUNwQkMsS0FBSyxFQUFFLHFEQUFxRDtJQUM1REMsWUFBWSxFQUFFO0VBQ2xCLENBQUMsQ0FDQSxDQUFDO0FBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIiLCJsZXQgYWRkcmVzc0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0c19fYm94Jyk7XG5sZXQgYWRkcmVzc0Nsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJveF9fYnRuJyk7XG5cbmFkZHJlc3NDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRyZXNzQm94LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RzX19ib3gtLWNsb3NlJylcbn0pIiwiY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYnVyZ2VyJyk7XG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2LS03NjgnKTtcbmNvbnN0IGNsb3NlID1kb2N1bWVudC5xdWVyeVNlbGVjdG9yICgnLm5hdl9fY2xvc2UnKTtcblxuXG5idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuZnVuY3Rpb24gKCkge1xuXG4gICAgYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2J1cmdlci0tYWN0aXZlJyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX25hdi0tYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzdG9wLXNjcm9sbCcpO1xufSk7XG5cbmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcbmZ1bmN0aW9uICgpIHtcblxuICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdidXJnZXItLWFjdGl2ZScpO1xuICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19uYXYtLWFjdGl2ZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc3RvcC1zY3JvbGwnKTtcbn0pXG5cbiIsImxldCBzZWFyY2hTdHJpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19zZWFyY2gnKTtcbmxldCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19idG4nKTtcbmxldCBzZWFyY2hDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2Nsb3NlJyk7XG5cblxuc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcblxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VhcmNoU3RyaW5nLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fc2VhcmNoLS1hY3RpdmUnKTtcbiAgICB9KVxuXG5zZWFyY2hDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXG5cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlYXJjaFN0cmluZy5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX3NlYXJjaC0tYWN0aXZlJyk7XG4gICAgfSkiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdmFsaWRhdGlvbkNvbnRhY3RzID0gbmV3IEp1c3RWYWxpZGF0ZSgnLmNvbnRhY3RzX19mb3JtJywge1xuICAgICAgICBlcnJvckxhYmVsU3R5bGU6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2ZmMzAzMCdcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3JGaWVsZENzc0NsYXNzOiBbJ2ludmFsaWQtY29udGFjdHMnXSxcbiAgICAgICAgZXJyb3JMYWJlbENzc0NsYXNzOiBbJ2NvbnRhY3RzLWVycm9yLWxhYmVsJ10sXG4gICAgfSk7XG4gICAgY29uc3QgdmFsaWRhdGlvbiA9IG5ldyBKdXN0VmFsaWRhdGUoJy5hYm91dC11c19fZm9ybScsIHsgXG4gICAgICAgIGVycm9yTGFiZWxTdHlsZToge1xuICAgICAgICAgICAgY29sb3I6ICcjZjA2NjY2J1xuICAgICAgICB9LFxuICAgICAgICBlcnJvckZpZWxkQ3NzQ2xhc3M6IFsnaW52YWxpZCddLFxuICAgICAgICBlcnJvckxhYmVsQ3NzQ2xhc3M6IFsnYWJvdXQtdXMtZXJyb3ItbGFiZWwnXSxcbiAgICB9KTtcbiAgXG4gICAgdmFsaWRhdGlvbkNvbnRhY3RzXG4gICAgICAuYWRkRmllbGQoJyNuYW1lJywgW3tcbiAgICAgICAgICAgIHJ1bGU6ICdtaW5MZW5ndGgnLFxuICAgICAgICAgICAgdmFsdWU6IDIsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwi0J3QtdC00L7RgdGC0LDRgtC+0YfQvdC+0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0YHQuNC80LLQvtC70L7QslwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBydWxlOiAnbWF4TGVuZ3RoJyxcbiAgICAgICAgICAgIHZhbHVlOiAyMCxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCLQktGLINCy0LLQtdC70Lgg0LHQvtC70YzRiNC1INGB0LjQvNCy0L7Qu9C+0LIg0YfQtdC8INC/0L7Qu9C+0LbQtdC90L5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcnVsZTogJ3JlcXVpcmVkJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCLQktCy0LXQtNC40YLQtSDQuNC80Y9cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcnVsZTogJ2N1c3RvbVJlZ2V4cCcsXG4gICAgICAgICAgICB2YWx1ZTogL1vQsC3Rj10vZ2ksXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwi0J3QtdC00L7Qv9GD0YHRgtC40LzRi9C5INGE0L7RgNC80LDRglwiLFxuICAgICAgICB9LFxuICAgICAgXSlcbiAgICAgIC5hZGRGaWVsZCgnI2VtYWlsLWlucHV0JywgW3tcbiAgICAgICAgICAgIHJ1bGU6ICdyZXF1aXJlZCcsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICfQktCy0LXQtNC40YLQtSBlbWFpbCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBydWxlOiAnZW1haWwnLFxuICAgICAgICAgIGVycm9yTWVzc2FnZTogJ9Cd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YInLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBydWxlOiAnY3VzdG9tUmVnZXhwJyxcbiAgICAgICAgICAgIHZhbHVlOiAvKFthLXpBLVowLTkuXy1dK0BbYS16QS1aMC05Ll8tXStcXC5bYS16QS1aMC05Xy1dKykvZ2ksXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwi0J3QtdC00L7Qv9GD0YHRgtC40LzRi9C5INGE0L7RgNC80LDRglwiLFxuICAgICAgICB9LFxuICAgICAgXSk7XG4gICAgICB2YWxpZGF0aW9uXG4gICAgICAuYWRkRmllbGQoJyNlbWFpbCcsIFt7XG4gICAgICAgIHJ1bGU6ICdyZXF1aXJlZCcsXG4gICAgICAgIGVycm9yTWVzc2FnZTogJ9CS0LLQtdC00LjRgtC1IGVtYWlsJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHJ1bGU6ICdlbWFpbCcsXG4gICAgICAgIGVycm9yTWVzc2FnZTogJ9Cd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YInLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcnVsZTogJ2N1c3RvbVJlZ2V4cCcsXG4gICAgICAgIHZhbHVlOiAvKFthLXpBLVowLTkuXy1dK0BbYS16QS1aMC05Ll8tXStcXC5bYS16QS1aMC05Xy1dKykvZ2ksXG4gICAgICAgIGVycm9yTWVzc2FnZTogXCLQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCXCIsXG4gICAgfSxcbiAgICBdKTtcbiAgfSkiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdmFsaWRhdGlvbkNvbnRhY3RzID0gbmV3IEp1c3RWYWxpZGF0ZSgnLmNvbnRhY3RzX19mb3JtJywge1xuICAgICAgICBlcnJvckxhYmVsU3R5bGU6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2ZmMzAzMCdcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3JGaWVsZENzc0NsYXNzOiBbJ2ludmFsaWQtY29udGFjdHMnXSxcbiAgICAgICAgZXJyb3JMYWJlbENzc0NsYXNzOiBbJ2NvbnRhY3RzLWVycm9yLWxhYmVsJ10sXG4gICAgfSk7XG4gICAgY29uc3QgdmFsaWRhdGlvbiA9IG5ldyBKdXN0VmFsaWRhdGUoJy5hYm91dC11c19fZm9ybScsIHsgXG4gICAgICAgIGVycm9yTGFiZWxTdHlsZToge1xuICAgICAgICAgICAgY29sb3I6ICcjZjA2NjY2J1xuICAgICAgICB9LFxuICAgICAgICBlcnJvckZpZWxkQ3NzQ2xhc3M6IFsnaW52YWxpZCddLFxuICAgICAgICBlcnJvckxhYmVsQ3NzQ2xhc3M6IFsnYWJvdXQtdXMtZXJyb3ItbGFiZWwnXSxcbiAgICB9KTtcbiAgXG4gICAgdmFsaWRhdGlvbkNvbnRhY3RzXG4gICAgICAuYWRkRmllbGQoJyNuYW1lJywgW3tcbiAgICAgICAgICAgIHJ1bGU6ICdtaW5MZW5ndGgnLFxuICAgICAgICAgICAgdmFsdWU6IDIsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwi0J3QtdC00L7RgdGC0LDRgtC+0YfQvdC+0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0YHQuNC80LLQvtC70L7QslwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBydWxlOiAnbWF4TGVuZ3RoJyxcbiAgICAgICAgICAgIHZhbHVlOiAyMCxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCLQktGLINCy0LLQtdC70Lgg0LHQvtC70YzRiNC1INGB0LjQvNCy0L7Qu9C+0LIg0YfQtdC8INC/0L7Qu9C+0LbQtdC90L5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcnVsZTogJ3JlcXVpcmVkJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCLQktCy0LXQtNC40YLQtSDQuNC80Y9cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcnVsZTogJ2N1c3RvbVJlZ2V4cCcsXG4gICAgICAgICAgICB2YWx1ZTogL1vQsC3Rj10vZ2ksXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwi0J3QtdC00L7Qv9GD0YHRgtC40LzRi9C5INGE0L7RgNC80LDRglwiLFxuICAgICAgICB9LFxuICAgICAgXSlcbiAgICAgIC5hZGRGaWVsZCgnI2VtYWlsLWlucHV0JywgW3tcbiAgICAgICAgICAgIHJ1bGU6ICdyZXF1aXJlZCcsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICfQktCy0LXQtNC40YLQtSBlbWFpbCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBydWxlOiAnZW1haWwnLFxuICAgICAgICAgIGVycm9yTWVzc2FnZTogJ9Cd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YInLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBydWxlOiAnY3VzdG9tUmVnZXhwJyxcbiAgICAgICAgICAgIHZhbHVlOiAvKFthLXpBLVowLTkuXy1dK0BbYS16QS1aMC05Ll8tXStcXC5bYS16QS1aMC05Xy1dKykvZ2ksXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwi0J3QtdC00L7Qv9GD0YHRgtC40LzRi9C5INGE0L7RgNC80LDRglwiLFxuICAgICAgICB9LFxuICAgICAgXSk7XG4gICAgICB2YWxpZGF0aW9uXG4gICAgICAuYWRkRmllbGQoJyNlbWFpbCcsIFt7XG4gICAgICAgIHJ1bGU6ICdyZXF1aXJlZCcsXG4gICAgICAgIGVycm9yTWVzc2FnZTogJ9CS0LLQtdC00LjRgtC1IGVtYWlsJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHJ1bGU6ICdlbWFpbCcsXG4gICAgICAgIGVycm9yTWVzc2FnZTogJ9Cd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YInLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcnVsZTogJ2N1c3RvbVJlZ2V4cCcsXG4gICAgICAgIHZhbHVlOiAvKFthLXpBLVowLTkuXy1dK0BbYS16QS1aMC05Ll8tXStcXC5bYS16QS1aMC05Xy1dKykvZ2ksXG4gICAgICAgIGVycm9yTWVzc2FnZTogXCLQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCXCIsXG4gICAgfSxcbiAgICBdKTtcbiAgfSkiXX0=
