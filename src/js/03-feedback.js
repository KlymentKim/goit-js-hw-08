import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
 const emailInput = document.getElementsByTagName('input');
  const messageInput = document.getElementsByTagName('textarea');

// функція, яка зберігає стан форми в локальне сховище
const saveFormState = throttle(() => {
    const formState = {
    email: emailInput.email.value,
    message: messageInput.message.value,
  };
  console.log(formState);
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500);

// функція, яка заповнює поля форми зі стану в локальному сховищі
const loadFormState = () => {
  const formState = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formState) {
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  } else {
    emailInput.value = '';
    messageInput.value = '';
  }
};

// заповнюємо поля форми зі стану в локальному сховищі при завантаженні сторінки
loadFormState();

// зберігаємо стан форми в локальне сховище при введенні користувачем
form.addEventListener('input', saveFormState);

// оброблюємо сабміт форми
form.addEventListener('submit', (event) => {
  event.preventDefault();
   const emailCheckSring = form.email.value;
   const messageCheckString= form.message.value;
  
   // Перевірити, чи заповнені всі поля
    if (emailCheckSring === '' || messageCheckString === '') {
    alert(`Поля Email та Message повинні бути заповнені`);
    return;
  }

  const formState = {
    email: emailInput.email.value,
    message: messageInput.message.value,
  };
  console.log(formState);
  localStorage.removeItem('feedback-form-state');
  // emailInput.value = '';
  // messageInput.value = '';
  form.reset();
});

