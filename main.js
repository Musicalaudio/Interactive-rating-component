rating = document.querySelector(".rating")
console.log(document.querySelector(".rating-modal__thanks"))

// Form submit button event listener
document.querySelector(".rating-modal__rating").addEventListener("click", (e)=>{
  if(e.target.tagName === "INPUT"){
    rating.innerText = e.target.value;
  }else if(e.target.tagName === "BUTTON"){
    e.preventDefault();
    if(rating.innerText){
      document.querySelector(".rating-modal__default").style.display = "none";
      document.querySelector(".rating-modal__thanks").style.display = "grid";
    }
  }
})