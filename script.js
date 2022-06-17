setInterval(startClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function startClock () {
    
    const currentDate = new Date();
    const secondrate = currentDate.getSeconds() / 60;
    const minuterate = (secondrate + currentDate.getMinutes()) / 60;
    const hourrate = (minuterate + currentDate.getHours()) / 12;

    rotateHands(hourHand, hourrate);
    rotateHands(minuteHand, minuterate);
    rotateHands(secondHand, secondrate);
}

function rotateHands (elem, rotateratio) {
    elem.style.setProperty('--rotation', rotateratio * 360);
}
startClock();