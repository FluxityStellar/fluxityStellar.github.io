const countdown = () => {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const days = document.getElementById('days');
  const hours = document.getElementById('hours');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');
  const headline = document.getElementById('headline');
  const countdown = document.getElementById('countdown');
  const content = document.getElementById('content');

  const targetDate = new Date('12/20/2023').getTime();

  const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    days.innerText = Math.floor(distance / day);
    hours.innerText = Math.floor((distance % day) / hour);
    minutes.innerText = Math.floor((distance % hour) / minute);
    seconds.innerText = Math.floor((distance % minute) / second);

    if (distance < 0) {
      headline.innerText = 'Fluxity';
      countdown.style.display = 'none';
      content.style.display = 'block';
      clearInterval(x);
    }
  }, 1000);
};

countdown();
