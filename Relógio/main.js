const secondsHand = document.querySelector('.hand.seconds');
const minuteHand = document.querySelector('.hand.minutes');
const hoursHand = document.querySelector('.hand.hours');

const setRotation = (element,rotationPercentage) =>{
    element.style.setProperty("--rotation", rotationPercentage * 360);

};

const setClock = () =>{
    const currentDate = new Date();

    const secondsPercentage = currentDate.getSeconds() / 60;
    const minutesPercentage = currentDate.getMinutes() / 60;
    const hoursPercentage = currentDate.getHours() / 12;

    setRotation(secondsHand,secondsPercentage);
    setRotation(minuteHand,minutesPercentage);
    setRotation(hoursHand,hoursPercentage);
};

setClock();

setInterval(setClock,1000);

