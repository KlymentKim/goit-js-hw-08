import throttle from 'lodash.throttle';

const form = document.getElementsByClassName('feedback-form');
const emailInput = document.getElementsByTagName('input[name="email]');
console.log(emailInput);
const messageInput  = document.getElementsByTagName('textarea[name="message"]');
console.log(messageInput);
