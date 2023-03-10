



function ChangeName(){

    let myName = prompt("What is your name?");
    return document.getElementById("inputName").innerHTML = `Hello  ${myName}`;
}
