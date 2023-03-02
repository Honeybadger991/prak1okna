const timer = (date) => {
    const days = document.querySelector('#days'),
          hours = document.querySelector('#hours'),
          minutes = document.querySelector('#minutes'),
          seconds = document.querySelector('#seconds');

    const deadline = Date.parse(date);
    let sec;
    let daysLeft;
    let hoursLeft;
    let minutesLeft;
    let secondsLeft;

    function timeLeft (){
        const now = Date.parse(new Date);
        sec = (deadline - now) / 1000;
        daysLeft = Math.floor((sec / (60*60*24)) % 100);
        hoursLeft = Math.floor((sec / (60*60)) % 24);
        minutesLeft = Math.floor((sec / 60) % 60);
        secondsLeft = sec % 60;
    }

    function setTimer(){
        if (daysLeft < 10) {days.textContent = `0${daysLeft}`} else {days.textContent = daysLeft};
        if (hoursLeft < 10) {hours.textContent = `0${hoursLeft}`} else {hours.textContent = hoursLeft};
        if (minutesLeft < 10) {minutes.textContent = `0${minutesLeft}`} else {minutes.textContent = minutesLeft};
        if (secondsLeft < 10) {seconds.textContent = `0${secondsLeft}`} else {seconds.textContent = secondsLeft};
    }

    function refreshTimer(){
        const intTimeLeft = setInterval(timeLeft, 1000);
        const intSetTimer = setInterval(setTimer, 1000);
        if(sec <= 0){
            days.textContent = '00';
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
            clearInterval(intTimeLeft);
            clearInterval(intSetTimer);
        }
    }

    setTimer();
    timeLeft();
    refreshTimer();
};
export default timer;