'use strict';
{
  let random;
  let flag = 1;
  function resultAction(){
    if(random == 0){
      img.src = 'image/img02.png';
    }else if(random == 1){
      img.src = 'image/img03.png';
    }else{
      img.src = 'image/img04.png';
    }
  }
  
  function removeAction(){
    img.className = '';
    img.src = 'image/img01.png'
    flag = 1;
  }
  
  let img = document.getElementById('img');
  img.addEventListener('click',() => {
    if(flag == 0){
      console.log('reject');
      return;
    }
    flag = 0;
    random = Math.floor(Math.random() * 3);
    img.className = 'active';
    setTimeout(resultAction,5000);
    setTimeout(removeAction,6000);
  });

  
}