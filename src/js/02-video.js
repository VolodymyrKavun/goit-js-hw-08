// Підключення Ліб
import vimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

// Ключ локального сховища
const TIME_CURRENT_KEY = 'videoplayer-current-time';

// Доступ до елементів
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// Функція:
// - відстеження події часу
// - запис у локальне сховище
// - перевірка
const onPlay = function (data) {
  const dataSecond = data.seconds;
  try {
    localStorage.setItem(TIME_CURRENT_KEY, dataSecond);
  } catch (error) {
    console.log(error.message);
  }
};

// Відстеження часу відео
player.on('timeupdate', throttle(onPlay, 1000));

// Отримання запису з локального сховища
const getLocalTime = localStorage.getItem(TIME_CURRENT_KEY);
if (getLocalTime) {
  player.setCurrentTime(Number(getLocalTime));
}

player.on('play');
