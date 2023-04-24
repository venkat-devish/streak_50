const imageContainer = document.querySelector('.img_container')
let imagesBox = ['./images/1.jpg', './images/1.jpg', './images/1.jpg', './images/1.jpg', './images/1.jpg', './images/1.jpg']
let html = "";
for (let i = 0; i < imagesBox.length; i++) {
    imageContainer.innerHTML += '<img src=\"' + imagesBox[i] + '\"/>'
}
console.log(imageContainer)