  const content  = document.getElementById('content');
 const ratingContainer  = document.getElementById('emoji');
  const ratings = document.querySelectorAll('.rating')
   const button  = document.getElementById('send');
  

   let selectedExpression = 'satisfied';

   ratingContainer.addEventListener('click', (e)=>{
    if(e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling){
        removeActive();
        //adding active to the parentnode//
        e.target.parentNode.classList.add('active');
        selectedExpression = e.target.nextElementSibling.innerHTML;
   }});

   button.addEventListener('click', function(e){
    content.innerHTML = `<i class= "fas fa-heart"></i><br>
    <strong>Thank You !</strong><br>
    <strong> Feedback: ${selectedExpression} </strong>
    <p> we'll use your feeback to improve our services.`
   });

   function removeActive(){
    for (let i = 0; i<ratings.length; i++) {
      ratings[i].classList.remove('active');
    }
   }


