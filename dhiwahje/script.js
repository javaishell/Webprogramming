function add() {
    let number1, number2;
    number1=parseFloat(document.getElementById("number1").value);
    number2=parseFloat(document.getElementById("number2").value);
    document.getElementById("result").value=number1+number2;
}
function minus() {
    let number1, number2;
    number1=parseFloat(document.getElementById("number1").value);
    number2=parseFloat(document.getElementById("number2").value);
    document.getElementById("result").value=number1-number2;
}
function mul() {
    let number1, number2;
    number1=parseFloat(document.getElementById("number1").value);
    number2=parseFloat(document.getElementById("number2").value);
    document.getElementById("result").value=number1*number2;
}
function divide() {
    let number1, number2;
    number1=parseFloat(document.getElementById("number1").value);
    number2=parseFloat(document.getElementById("number2").value);
    document.getElementById("result").value=number1/number2;
}