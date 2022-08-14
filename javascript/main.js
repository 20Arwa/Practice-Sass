// Call elements
let lists = document.querySelectorAll(".slider ul li");
let imgSlider = document.querySelector(".slider .img-box img");
let arrowRight = document.querySelector(".slider .img-box .arrow-right");
let arrowLeft = document.querySelector(".slider .img-box .arrow-left");
let imgsLorem = document.querySelectorAll(".lorem .imgs-box img");
// To change direction of next and previous list when change language to Arbic 
if (document.querySelector("html").getAttribute("dir") == "rtl"){
    arrowRight = document.querySelector(".slider .img-box .arrow-left");
    arrowLeft = document.querySelector(".slider .img-box .arrow-right");
}
// Header List
document.querySelector("nav .bars").addEventListener("click", function(){
    document.querySelector("nav .list").classList.toggle("display")
})
let imgs = ["slider-1.jpg", "slider-2.png", "slider-3.jpg", "slider-4.jpg", "slider-5.png"];
// Remove arrow left or right from first or last imgs
function removeOrAddArrows() {
    // Remove arrow left if img first one
    imgSlider.getAttribute("src") == `images/${imgs[0]}` ? arrowLeft.style.visibility = "hidden" : arrowLeft.style.visibility = "unset";
    // Remove arrow right if img last one
    imgSlider.getAttribute("src") == `images/${imgs[imgs.length-1]}` ? arrowRight.style.visibility = "hidden" : arrowRight.style.visibility = "unset";
}
// Slider: When click on list
lists.forEach(function(list) {
    list.addEventListener("click", function(){
        // Remove class active from all
        lists.forEach(list => list.classList.remove("active"))
        // Add class active to clicked one
        this.classList.add("active");
        // Change imgs when click on list
        imgSlider.setAttribute("src",`images/${imgs[parseInt(this.dataset.num)]}`);
        // arrows function
        removeOrAddArrows()
    })
})
// Statr Sliders Arrows
// Arrows function
removeOrAddArrows();

let nextList = "";
let previousList = "";
// When click on arrow Right
arrowRight.addEventListener("click", function(){
    lists.forEach(function(list){
        // Move class active to next list
        if (list.classList.contains("active")){
            nextList = list.nextElementSibling
        }
        list.classList.remove("active");
    })
    nextList.classList.add("active");
    // Move imgs
    imgSlider.setAttribute("src",`images/${imgs[parseInt(nextList.dataset.num)]}`);
    // arrows function
    removeOrAddArrows()
})
// When click on arrow Left
arrowLeft.addEventListener("click", function(){
    // Move class active to previous list
    lists.forEach(function(list){
        if (list.classList.contains("active")){
            previousList = list.previousElementSibling
        }
        list.classList.remove("active")
    })
    previousList.classList.add("active");
    // Move imgs
    imgSlider.setAttribute("src",`images/${imgs[parseInt(previousList.dataset.num)]}`);
    // Arrows function
    removeOrAddArrows()
})
// End Sliders Arrows
// Start lorem imgs
let loremImgs = ["lorem-1.webp", "lorem-2.jpg", "lorem-3.jpeg"];
let imgLoremZoomed = document.querySelector(".lorem .zoomed-box img");
// Click on lorem imgs
imgsLorem.forEach(function(img){
    img.addEventListener("click", function(){
        // Show zoomed lorem
        document.querySelector(".lorem .zoomed-box").style.display = "block";
        // Show clicked img
        imgLoremZoomed.setAttribute("src", `${img.getAttribute("src")}`);
    })
})
// close lorem img
document.querySelector(".lorem-zoomed .close").addEventListener("click", () => document.querySelector(".lorem .zoomed-box").style.display = "none")
// End lorem imgs


