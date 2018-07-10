//Getm modal element
var modal = document.getElementById('littleModal')

//Get open modal button
var modalButton =document.getElementsByClassName('modalButton');

//Get close button
var closeButton =document.getElementsByClassName('closeButton')[0];

//Listen for open click
modalButton.addEventListener('click', openModal);

//Listen for close click
closeButton.addEventListener('click', closeModal);

//Listen for outside click
window.addEventListener('click', closeOutside);

//Function to open modal
function.openModal(){
modal.style.display ='block';
}

//Function to close modal
function.closeModal(){
modal.style.display ='none';
}

//Function to close modal if outside click
function.outsideClick(e){
	if(e.target==modal){
modal.style.display ='none';
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}