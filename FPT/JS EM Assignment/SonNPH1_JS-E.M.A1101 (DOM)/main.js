const images = ['img1.jpg', 'img2.png', 'img3.png'];
let index = 0;
 
// Add your code here
var imageContainer=document.querySelector('.img-container')
var backBtn=document.querySelector('.back')
var nextBtn=document.querySelector('.next')

// Task 1

backBtn.addEventListener('click', function() {
  // Add your code here
  index=index==0?0:--index
  renderImage(index)
  // Task 3.1
});

nextBtn.addEventListener('click', function() {
  // Add your code here
  index=index==images.length-1?images.length-1:++index
  renderImage(index)
  // Task 3.2
});

// Add your code here
renderImage=(index)=>{
  imageContainer.innerHTML=`<img src="./images/${images[index]}"/>`

}
renderImage(0)



// Task 2