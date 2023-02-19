console.log("hello")

const gallerySection = document.getElementsByClassName('imageJsContainer')
const leftArrow = document.getElementsByClassName('leftArrow');
const rightArrow = document.getElementsByClassName('rightArrow')

let count = 0;

console.log(gallerySection)

const imageArray = [
    '<figure><img src="./assets/gallery-image-1.jpg" alt="A green house"></figure>',
    '<figure><img src="./assets/gallery-image-2.jpg" alt="A collection of succulents"></figure>',
    '<figure><img src="./assets/gallery-image-3.jpg" alt="Cactus and Succulents"></figure>'
]

gallerySection[0].innerHTML = imageArray[count];
console.log(gallerySection)

leftArrow[0].addEventListener('click', () => {
    if(count !== 0) {
        let currentImage = document.querySelector('.imageJsContainer')
        currentImage.classList.remove('fadeOut')
        currentImage.classList.remove('fadeIn')
        
        currentImage.classList.add('fadeOut')
        
        setTimeout(() => {
            count -= 1; 
            gallerySection[0].innerHTML = imageArray[count];
            currentImage = document.querySelector('.imageJsContainer')
            currentImage.classList.add('fadeIn')
        }, '1500')
    }

})

rightArrow[0].addEventListener('click', () => {
    if(count !== imageArray.length -1) {
        let currentImage = document.querySelector('.imageJsContainer')
        currentImage.classList.remove('fadeOut')
        currentImage.classList.remove('fadeIn')

        currentImage.classList.add('fadeOut')
        
        setTimeout(() => {
            count += 1; 
            gallerySection[0].innerHTML = imageArray[count];
            currentImage = document.querySelector('.imageJsContainer')
            currentImage.classList.add('fadeIn')
        }, '1500')
    }
})