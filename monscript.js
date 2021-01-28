function show() {
  const popup = document.getElementById('popup');
  const p = document.querySelectorAll('p')[1];

  if(popup.style.display === 'none'){
    
    popup.style.display='block';
    p.style.color='red';
  }
    else{
      popup.style.display='none';
    }
  

  /*
  if (popup.classList.contains('cache')){
    popup.classList.remove('cache');
    popup.classList.add('show');
  }
    else{
      popup.classList.remove('show');
      popup.classList.add('cache');
    }
  */
}