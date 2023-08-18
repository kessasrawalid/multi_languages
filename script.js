var francais=document.getElementById("francais");
var anglais=document.getElementById("anglais");
var welcome=document.getElementById("welcome-text");
var about = document.getElementById("about");
var aboutText = document.getElementById("about-text");
var contact = document.getElementById("contact");

francais.onclick=()=>{
    setlanguage("francais");
    localStorage.setItem("lang","francais");
};

anglais.onclick=()=>{
    setlanguage("anglais");
    localStorage.setItem("lang","anglais");
};

onload=()=>{
    setlanguage(localStorage.getItem("lang"));
};
 
function setlanguage(language)
{
if(language==="francais"){


    welcome.innerHTML= "codeur walid";
    about.innerHTML= "about nous";
    aboutText.innerHTML= "je suis un prof en inginieurie des logiciels";
    contact.innerHTML= "contacter nous";

}else 

if(language==="anglais"){


    welcome.innerHTML= "coder walid";
    about.innerHTML= "about us";
    aboutText.innerHTML= "iam a teacher and developper";
    contact.innerHTML= "contacte us";
}


}