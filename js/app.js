// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
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



const articles = document.querySelectorAll('article');

for(let i=0; i<articles.length; i++){
  let button = articles[i].querySelector('button');
  let para = articles[i].querySelector('p');
  
  button.addEventListener('click', function(){
    articles[i].classList.toggle('expanded');
    button.innerHTML = articles[i].classList.contains('expanded') ?
      'Hide Details' : 'Show Details';
 });
}

const button = document.querySelector('button');
const h2 = document.querySelector('h2');
button.addEventListener('click', function(){
  h2.classList.toggle('styled');
});

const h3 = document.querySelector('h3');
h3.addEventListener('mouseover', function (){
  h3.classList.add('hover');
})
h3.addEventListener('mouseout', function (){
  h3.classList.remove('hover');    
});


// ? is a ternary operator (if condition ? was truthy : was falsy) behaves like a
// collapsed if statement

    
