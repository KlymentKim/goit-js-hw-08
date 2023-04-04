import throttle from 'lodash.throttle';

const form = document.getElementsByClassName('feedback-form');
const emailInput = document.getElementsByTagName('input[name="email]');
const messageInput  = document.getElementsByTagName('textarea[name="message"]');

// Функція, яка записує дані форми в локальне сховище
const saveState = _.throttle(() => {
  const state = {
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
}, 500);

// Функція, яка заповнює форму даними з локального сховища
const restoreState = () => {
  const state = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  emailInput.value = state.email || '';
  messageInput.value = state.message || '';
};

// Відновлюємо стан форми під час завантаження сторінки
restoreState();

// Зберігаємо стан форми при введенні даних користувачем
form.addEventListener('input', saveState);

// Очищуємо сховище та форму після сабміту форми
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const state = {
    email: '',
    message: ''
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
  emailInput.value = '';
  messageInput.value = '';
  console.log('Form submitted:', state);
});

