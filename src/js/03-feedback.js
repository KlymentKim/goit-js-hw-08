import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.getElementsByTagName('input');
const messageInput = document.getElementsByTagName('textarea');
const keyStorageInfo = 'feedback-form-state';

// функція, яка зберігає стан форми в локальне сховище
const saveFormState = throttle(() => {
    const stateForm = {
    email: emailInput.email,
    message: messageInput.message,
  };
  localStorage.setItem(keyStorageInfo, JSON.stringify(stateForm));
}, 500);


// функція, яка заповнює поля форми зі стану в локальному сховищі
const loadFormState = () => {
  const stateForm = JSON.parse(localStorage.getItem(keyStorageInfo));
  if (stateForm) {
    emailInput.email.value= stateForm.email;
    messageInput.message.value = stateForm.message;
  } else {
    emailInput.email.value = '';
    messageInput.message.value = '';
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
    if (emailInput.email.value === '' || messageInput.message.value === '') {
    alert(`Поля Email та Message повинні бути заповнені!!!`);
    return;
  }

  const formState = {
    email: emailInput.email.value,
    message: messageInput.message.value,
  };
   localStorage.removeItem(keyStorageInfo);
   console.log(`Form data: `,formState);
   form.reset();
});

