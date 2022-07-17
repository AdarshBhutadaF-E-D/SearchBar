let inputEl=document.getElementById("user-input")
let NamesFromDOM = document.querySelectorAll(".name");

 inputEl.addEventListener("keyup" , function(){
   let username = inputEl.value.toLowerCase();

   for(let i=0; i<NamesFromDOM.length; i++){
    const  currentName = NamesFromDOM[i].textContent.toLowerCase();
    if(currentName.includes(username)){
        NamesFromDOM[i].style.display = "block";
    }
    else{
        NamesFromDOM[i].style.display = "none";
    }
   }
 });


























