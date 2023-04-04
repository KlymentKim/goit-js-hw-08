import throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player';  

const iframe = document.querySelector('iframe') ;
const player = new Vimeo.Player(iframe);
 
//timeupdate відстеження події timeupdate, що спрацьовує при оновленні часу відтворення. 
// Функція throttle з бібліотеки lodash.throttle застосовується, 
// щоб зменшити кількість записів часу в локальному сховищі:

const saveCurrentTime = throttle(function () {
    const time = player.getCurrentTime();
    localStorage.setItem('videoplayer-current-time', time);
  }, 1000);
  
  player.on('timeupdate', saveCurrentTime);

  //Щоб відновити час відтворення відео при перезавантаженні сторінки
const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime);
}