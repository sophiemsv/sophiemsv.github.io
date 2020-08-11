//add to cart
let productsCount = document.getElementById("products-count")

let addToCartButtons = document.querySelectorAll(".addtocart")

for(let i=0; i < addToCartButtons.length;i++) {
    addToCartButtons[i].addEventListener("click", function() {
        productsCount.textContent = +productsCount.textContent + 1
    })
}

//toggle like button state
let likeButtons = document.querySelectorAll(".like");

for(i = 0; i < likeButtons.length; i++){
    likeButtons[i].addEventListener("click", function(){
        if (likeButtons[i].classList.contains("liked")){
            likeButtons[i].classList.remove("liked")
        } else {
            likeButtons[i].classList.add("liked")
        }
    })
}

//slider
$('.slideshow').slick({
    dots: true,
})

// modal

let moreDetailsButtons = document.querySelectorAll(".moredetails");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn");

moreDetailsButtons.forEach(function(btn){
    btn.addEventListener("click", openModal)
})
 
function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide")
}

closeBtn.addEventListener("click", closeModal)


function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show")
}

modal.addEventListener("click", function(e) {
    if(e.target === modal) {
        closeModal()
    }
})
  