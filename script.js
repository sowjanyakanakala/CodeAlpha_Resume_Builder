
function addNewExField(){

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('experienceField');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute("placeholder", "Enter here");
    newNode.classList.add('mt-3');


    let weOb = document.getElementById("we");
    let exButtonOb = document.getElementById("exButton");

    weOb.insertBefore(newNode, exButtonOb);

}

function addNewQaField(){

    let qaNode = document.createElement('textarea');
    qaNode.classList.add('form-control');
    qaNode.classList.add('experienceField');
    qaNode.setAttribute('rows', 3);
    qaNode.classList.add('mt-3');
    qaNode.setAttribute('placeholder', "Enter here");

    let qaOb = document.getElementById("qa");
    let qaButtonOb = document.getElementById("qaButton");

    qaOb.insertBefore(qaNode, qaButtonOb);

}

function generateCV(){

    let nameField = document.getElementById("nameField").value;
    let nameT = document.getElementById("nameT");

    nameT.innerHTML=nameField

    document.getElementById("nameT2").innerHTML=nameField

    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value

    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value

    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value

    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value

    document.getElementById("linkT").innerHTML=document.getElementById("linkedinField").value

    
    document.getElementById("linkT").innerHTML=document.getElementById("linkedinField").value

    document.getElementById("ObjectiveT").innerHTML=document.getElementById("objectiveField").value;


    let wes = document.getElementsByClassName("experienceField");

    let str = "";
    
    for (let e of  wes){
        str = str + `<li>${e.value}</li>`

    }

    document.getElementById("wxT").innerHTML = str;


    let qas = document.getElementsByClassName("qualiField");

    let str1 = "";
    
    for (let t of  qas){
        str1 = str1 + `<li>${t.value}</li>`

    }

    document.getElementById("qaT").innerHTML = str1;

    document.getElementById('cv-form').style.display="none";
    document.getElementById('cv-template').style.display="block"



}