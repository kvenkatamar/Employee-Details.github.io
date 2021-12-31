/*var validation1 = (event, clas1) => {
    if(event.charCode >= 48 && event.charCode <= 57) {
        document.querySelector(clas1).style.display = 'none';
        return true;
    }
    document.querySelector(clas1).style.display = 'block';
    return false;
}
var validation2 = (event) => {
    console.log(document.querySelector("#age").value);
    if(document.querySelector("#age").value <= 18) {
        document.querySelector(".minAge").style.display = 'block';
        return false;
    }
    else {
        document.querySelector(".minAge").style.display = 'none';
        return true;
    }
}*/
var validation1 = (event) => {
    document.querySelector(".error-1").style.display = 'none';
    return true;
}
var validation2 = (event) => {
    document.querySelector(".error-2").style.display = 'none';
    if(document.querySelector("#name").value == ''){
        document.querySelector(".error-1").style.display = 'block';
        return false;
    }
    return true;
}
var validation3 = (event) => {
    document.querySelector(".error-3_1").style.display = 'none';
    document.querySelector(".error-3_2").style.display = 'none';
    document.querySelector(".error-3_3").style.display = 'none';
    if(document.querySelector("#gender").value == ''){
        document.querySelector(".error-2").style.display = 'block';
        return false;
    }
    else if(event.charCode >= 48 && event.charCode <= 57){
        document.querySelector(".error-3_2").style.display = 'none';
        return true;
    }
    else{
        document.querySelector(".error-3_2").style.display = 'block';
        return false;
    }
}
var validation4 = (event) => {
    document.querySelector(".error-4").style.display = 'none';
    if(document.querySelector("#age").value == ''){
        document.querySelector(".error-3_1").style.display = 'block';
        return false;
    }
    else if(document.querySelector("#age").value <= 18){
        document.querySelector(".error-3_3").style.display = 'block';
        return false;
    }
    else{
        return true;
    }
    /*else if(document.querySelector("#age").value == ''){
        document.querySelector(".error-3_3").style.display = 'block';
        return false;
    }*/
}
var validation5 = (event) => {
    document.querySelector(".error-5_1").style.display = 'none';
    document.querySelector(".error-5_2").style.display = 'none';
    if(document.querySelector("#dep").value == ''){
        document.querySelector(".error-4").style.display = 'block';
        return false;
    }
    return true;
}