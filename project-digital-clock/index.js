const hourel = document.getElementById("Hour");
const minuteel = document.getElementById("Minutes");
const secondel = document.getElementById("Seconds");
const ampmel =  document.getElementById("ampm")

console.log("hi")

function updateclock(){

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    
    if (h > 12){
        h = h-12;
        ampm = "PM";
    }
    
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    
    hourel.innerText = h;
    minuteel.innerText = m;
    secondel.innerText = s;


    setTimeout(() => {
        updateclock()
    }, 1000);

}

updateclock();