import Tween from './Tween';

module.exports = ({target}) => {

  var duration;
  var doc;
  var from;
  var to;
  var start;
  var timer;
  var delta;

  if (!target) {
    return;
  }
  duration = 256;

  doc = document.documentElement;
  from = window.scrollY || doc.scrollTop || 0;
  to = target.offsetTop - 30;
  start = new Date().getTime();
  delta = to - from;

  document.body.scrollTop = from;

  timer = setInterval(() => {

      var percent = Tween.easeInQuad(
        Math.min(1, (new Date().getTime() - start) / duration));

      document.body.scrollTop = from + percent * delta;

      if (percent === 1) {
        clearInterval(timer);
      }

    }, 25);



};
