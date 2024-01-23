const dropdown = document.querySelector('#circle');
const circleContainer = document.querySelector(".circle-container");

dropdown.onchange = function () {
    circleContainer.innerHTML = "";
    for (let x=1; x <= this.value; x++){
    circleContainer.innerHTML +=`
        <div class="circle">${x}</div>
    `
    }
}
