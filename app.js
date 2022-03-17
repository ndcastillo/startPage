// By NDC
// I want this format Thursday, 17/03/2020     01:10:2022 PM


function timer(){
    let currentDate = new Date();
    let dayDate = currentDate.getDay();
    let dayMDate = currentDate.getDate();
    let monthDate = Number(currentDate.getMonth())+1;
    let yearDate = currentDate.getFullYear();
    let hour = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    const days = ["","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
    //const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    
    if (monthDate < 10){monthDate = "0" + String(monthDate)}
    if (dayMDate < 10){dayMDate="0"+dayMDate}
    if (minutes < 10){minutes="0"+minutes}
    if (seconds < 10){seconds="0"+seconds}

    let format = days[dayDate]+", "+dayMDate+"/"+monthDate+"/"+yearDate+"       "+hour+":"+minutes+":"+seconds;
    let htmlTimer;

    htmlTimer = document.getElementById("timer")
    htmlTimer.innerHTML = format;
    // console.log(format);
}

setInterval(timer,500);