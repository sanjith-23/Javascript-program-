
let ampm=document.getElementById("ampm")
function displayTime(){
    let datetime=new Date()
    let hr=datetime.getHours()
    let min=datetime.getMinutes()
    let sec=datetime.getSeconds()
    let day=datetime.getDate()
    let month=datetime.getMonth()
    let year=datetime.getFullYear()
    if(hr>12){
        hr=hr-12
        ampm.innerHTML="PM"
    }
    else{
        ampm.innerHTML="AM"
    }
    document.getElementById("hours").innerHTML=padZero(hr)
    document.getElementById("minutes").innerHTML=padZero(min)
    document.getElementById("seconds").innerHTML=padZero(sec)
    document.getElementById("day").innerHTML=padZero(day)
    document.getElementById("month").innerHTML=padZero(month)
    document.getElementById("year").innerHTML=padZero(year)


}
function padZero(num){
    return num<10 ? "0"+num:num
}
setInterval(displayTime,500)