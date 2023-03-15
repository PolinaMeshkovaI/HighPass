document.addEventListener("DOMContentLoaded", function () {
  const validationContacts = new JustValidate('.contacts__form', {
    errorLabelStyle: {
        color: '#ff3030'
    },
    errorFieldCssClass: ['invalid-contacts'],
    errorLabelCssClass: ['contacts-error-label'],
});
const validation = new JustValidate('.about-us__form', { 
    errorLabelStyle: {
        color: '#f06666'
    },
    errorFieldCssClass: ['invalid'],
    errorLabelCssClass: ['about-us-error-label'],
});

validationContacts
  .addField('#name', [{
        rule: 'minLength',
        value: 2,
        errorMessage: "Недостаточное количество символов",
    },
    {
        rule: 'maxLength',
        value: 20,
        errorMessage: "Вы ввели больше символов чем положено",
    },
    {
        rule: 'required',
        errorMessage: "Введите имя",
    },
    {
        rule: 'customRegexp',
        value: /[а-я]/gi,
        errorMessage: "Недопустимый формат",
    },
  ])
  .addField('#email-input', [{
        rule: 'required',
        errorMessage: 'Введите email',
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат',
    },
    {
        rule: 'customRegexp',
        value: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi,
        errorMessage: "Недопустимый формат",
    },
  ]);
  validation
  .addField('#email', [{
    rule: 'required',
    errorMessage: 'Введите email',
  },
  {
    rule: 'email',
    errorMessage: 'Недопустимый формат',
  },
  {
    rule: 'customRegexp',
    value: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi,
    errorMessage: "Недопустимый формат",
},
]);
});
  
