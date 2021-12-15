const showClock = () => {
    let date = new Date();
    let hour = formatTime(date.getHours());
    let min = formatTime(date.getMinutes());
    let sec = formatTime(date.getSeconds());
    document.getElementById('time').innerHTML = `${hour}:${min}:${sec}`;

    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dic'];
    const days = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];
    let dayWeek = days[date.getDay()];
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let dateText = `${dayWeek}, ${day} ${month} ${year}`;
    document.getElementById('date').innerHTML = dateText;
    

    
}

const formatTime = (time) => {
    if( time < 10){
        time = '0' + time;
    }
    return time;
}

setInterval(showClock, 1000);

