
setInterval(() => {
    var fecha = new Date();
    var fechaConFormato = fecha.getDay() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear() + " " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
    txtHora = document.getElementById("fecha_hora");
    txtHora.innerText = fechaConFormato;
}, 1000);