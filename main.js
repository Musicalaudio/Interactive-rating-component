rating = document.querySelector(".rating")
console.log(document.querySelector(".rating-modal__thanks"))

// Form submit button event listener
document.querySelector(".rating-modal__rating").addEventListener("click", (e)=>{
  console.log(e.target)
  if(e.target.tagName === "INPUT"){
    rating.innerText = e.target.value;
  }else if(e.target.tagName === "BUTTON"){
    console.log(rating.innerText)
    e.preventDefault();
    if(rating.innerText){
      document.querySelector(".rating-modal__default").hidden = "true";
      document.querySelector(".rating-modal__thanks").hidden = "false";
    }
  }
})