

const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hrHand  = document.querySelector('.hr-hand');

function setDate() {
    const now = new Date();
    
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr  = now.getHours();

    // +90 to cover the 90deg that we added to the handles
    // in css file to make them stand vertically & start at 12 o'clock
    const secDegree = ((sec / 60) * 360) + 90; 
    secHand.style.transform = `rotate(${secDegree}deg)`;

    const minDegree = ((min / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegree}deg)`;

    const hrDegree  = ((hr / 12) * 360) + 90;
    hrHand.style.transform = `rotate(${hrDegree}deg)`;
}

setInterval(setDate, 1000);

// End... Atena