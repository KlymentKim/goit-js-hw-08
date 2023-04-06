import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.getElementsByTagName('input');
const messageInput = document.getElementsByTagName('textarea');
const keyStorageInfo = 'feedback-form-state';

// функція, яка зберігає стан форми в локальне сховище
const saveFormState = throttle(() => {
    const stateForm = {
    email: emailInput.email.value,
    message: messageInput.message.value,
  };
   localStorage.setItem(keyStorageInfo, JSON.stringify(stateForm));
}, 500);

// функція, яка заповнює поля форми зі стану в локальному сховищі
const loadFormState = () => {
  const stateForm = JSON.parse(localStorage.getItem(keyStorageInfo));
  if (stateForm) {
    emailInput.value = stateForm.email.value;
    messageInput.value = stateForm.message.value;
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
  
   // Перевірити, чи заповнені всі поля
    if (emailInput.value === '' || messageInput.value === '') {
    alert(`Поля Email та Message повинні бути заповнені`);
    return;
  }

  const formState = {
    email: emailInput.email.value,
    message: messageInput.message.value,
  };
   localStorage.removeItem(keyStorageInfo);
  // emailInput.value = '';
  // messageInput.value = '';
  console.log(`Form data: `,formState);
  form.reset();
});

