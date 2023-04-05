import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const messageInput  = document.querySelector('.feedback-form textarea');

// функція, яка зберігає стан форми в локальне сховище
const saveFormState = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
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
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formState);
  localStorage.removeItem('feedback-form-state');
  // emailInput.value = '';
  // messageInput.value = '';
  form.reset();
});

