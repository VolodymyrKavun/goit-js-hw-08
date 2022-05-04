import vimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_CURRENT = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function (data) {
  const dataSecond = data.seconds;
  const secondLocalStorage = localStorage.setItem(TIME_CURRENT, dataSecond);
};

player.on('play', throttle(onPlay, 1000));

const getLocalTime = localStorage.getItem(TIME_CURRENT);
if (getLocalTime) {
  player.setCurrentTime(Number(getLocalTime));
}
