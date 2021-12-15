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
    
    document.getElementById('container').classList.toggle('animate');
    /* 
    classList: se trae todos los estilos que se ha aplicado a ese elemento
    toggle: Si está aplicado el estilo, lo quita, y viceversa. Esto
    lo hace una vez sí, una vez no */
    
}

const formatTime = (time) => {
    if( time < 10){
        time = '0' + time;
    }
    return time;
}

setInterval(showClock, 1000);

