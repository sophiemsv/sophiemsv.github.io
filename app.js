//add to cart
let productsCount = document.getElementById("products-count")

let addToCartButtons = document.querySelectorAll(".addtocart")

for(let i=0; i < addToCartButtons.length;i++) {
    addToCartButtons[i].addEventListener("click", function() {
        productsCount.textContent = +productsCount.textContent + 1
    })
}

//slider
$('.slideshow').slick({
    prevArrow: $('.prev'),
    nextArrow: $('.next')
})


 