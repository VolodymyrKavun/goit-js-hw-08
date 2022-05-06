// Підключення Ліби
import throttle from 'lodash.throttle';

// Отримуємо доступ до усіх елементів
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name="email"]'),
  message: document.querySelector('[name="message"]'),
};

// Об'єкт сховища
const dataForm = {};

// Ключ для локального сховища
const FEEDBACK_FORM_KEY = 'feedback-form-state';

// Вішання слухачів
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

// Функція:
// - заборони відправки форми
// - очищення форми
// - очищення локального сховища
// - виводить в консоль поточні значення
function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM_KEY);

  console.log(dataForm);
}

// Функція запису у локальне сховище + Перевірка
function onTextareaInput(e) {
  dataForm[e.target.name] = e.target.value;

  const saveData = () => {
    try {
      localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(dataForm));
    } catch (error) {
      console.log('error:', error.message);
    }
  };

  saveData();
}

// Функція отримання запису з локального сховища + Перевірка
function loadData() {
  try {
    const getForm = JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY));
    if (getForm) {
      refs.email.value = getForm.email;
      refs.message.value = getForm.message;
    }
  } catch (error) {
    console.log(error.message);
  }

  return;
}

loadData();
