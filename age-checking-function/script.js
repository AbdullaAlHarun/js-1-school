const ageInput = document.querySelector("#age");
const enterBTN = document.querySelector(".enter-BTN");

enterBTN.addEventListener("click",function (){
    const age = ageInput.value;
    const isAgeOk = isOldEnough(age);

    if(isAgeOk){
        document.location.href = "welcome.html";
    } else {
        alert ("You are Baby!!")
    }
})


function isOldEnough(ageCheck){
    if (ageCheck >= 18) {
        return true;
    }
    return false;
}