/* PORCENTAJE CUANDO LLEGUE A 100 PASE A OTRA PAGINA*/ 

function simulateLoading() {
    let percentageText = document.getElementById("percentage");

    let interval = setInterval(function () {
      let percentage = parseInt(percentageText.innerText);

      if (percentage < 100) {
        percentage++;
        percentageText.innerText = percentage + "%";
      } else {
        clearInterval(interval);
        // Redirige a otra página cuando el porcentaje llega al 100%
        window.location.href = 'pag1.html';
      }
    }, 20);
}

window.onload = function () {
    simulateLoading();
};
