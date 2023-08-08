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

  let today = new Date(),
    dd = String(today.getDate()).padStart(2, '0'),
    mm = String(today.getMonth() + 1).padStart(2, '0'),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = '09/30/',
    birthday = dayMonth + yyyy;

  today = mm + '/' + dd + '/' + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }

  const countDown = new Date(birthday).getTime(),
    x = setInterval(
      (e = () => {
        const now = new Date().getTime(),
          distance = countDown - now;

        (days.innerText = Math.floor(distance / day)),
          (hours.innerText = Math.floor((distance % day) / hour)),
          (minutes.innerText = Math.floor((distance % hour) / minute)),
          (seconds.innerText = Math.floor((distance % minute) / second));

        if (distance < 0) {
          headline.innerText = "It's my birthday!";
          countdown.style.display = 'none';
          content.style.display = 'block';
          clearInterval(x);
        }
      }),
      0,
    );
};

countdown();
