//timeupdate відстеження події timeupdate, що спрацьовує при оновленні часу відтворення.
// Функція throttle з бібліотеки lodash.throttle застосовується,
// щоб зменшити кількість записів часу в локальному сховищі:

import Player from '@vimeo/player'; 
import throttle from 'lodash.throttle'; 

const player = new Player(document.querySelector('#vimeo-player'));

player.on('timeupdate', throttle((data) => {
  const currentTime = data.seconds;
  // зберегти поточний час відтворення у локальне сховище
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000));

 //Щоб відновити час відтворення відео при перезавантаженні сторінки
const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime);
}



