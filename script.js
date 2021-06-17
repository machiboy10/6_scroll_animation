const boxes = document. querySelectorAll('.box')





window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
   // console.log(window.innerHeight);
  //  console.log(window.innerHeight*.8); //or window.innerHeight / 5 * 4;
  const triggerBottom = window.innerHeight * .8
  boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top

      if(boxTop < triggerBottom) {
          box.classList.add('show');
      }else {
          box.classList.remove('show'); 
      }
  })
}

