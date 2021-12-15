const showClock = () => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    document.getElementById('time').innerHTML = `${hour}:${min}:${sec}`;
}

setInterval(showClock, 1000);