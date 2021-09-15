{
    var Altura = document.getElementById("altura").value;
      var Peso = document.getElementById("peso").value;
  
      var imc = Peso/(Altura*Altura);
  }
  
  function verificarIMC(imc) {
    if (imc < 17) {
      createMessage("Muito abaixo do peso", "alert")
    } else if (imc > 17 && imc <= 18.49){
      createMessage("Abaixo do peso", "warning")
    } else if (imc >= 18.5 && imc <= 24.99){
      createMessage("Peso normal", "sucess")
    } else if (imc >= 25 && imc <= 29.99){
      createMessage("Acima do peso", "warning")
    } else if (imc >= 30 && imc <= 34.99){
      createMessage("Obesidade I", "alert")
    } else {
      createMessage("Obesidade II", "danger")
    }
  }
  
  function createMessage(msg, type) {
    document
      .querySelector("body")
      .insertAdjacentHTML("beforebegin", `<div class='message ${type}'>${msg}</div>`);
  
    setTimeout(function () {
      deleteMessage();
    }, 6600);
  }
  
  function deleteMessage() {
    const list = document.querySelectorAll(".message");
    for (const item of list) {
      item.remove();
    }
  }