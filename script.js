function addImages(){
  var pictures = document.getElementsByClassName("pic")

  for (let i = 0; i < pictures.length; i++) {
    pictures[i].src = `https://cdn.glitch.com/837ef81b-a708-49ac-aee8-096caa2ef486%2FBasicFish_${i}.png?v=1592589711297`
  }
}

function selection(elmnt, check) {
  var checkboxes = document.getElementsByTagName("img");
  
  if (elmnt.style.filter == "grayscale(0)") {
    elmnt.style.filter = "grayscale(1)" 
  } else {
    elmnt.style.filter = "grayscale(0)"
  }
  if (check == false) {
    for (let i = 0; i < checkboxes.length; i++) {    
      
      checkboxes[i].style.filter = "grayscale(1)"
    }
  }
  
}