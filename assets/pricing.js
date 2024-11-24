const toggle = document.querySelector('.toggle');
const yillik = document.querySelectorAll('.price.annually');
const aylik = document.querySelectorAll('.price.monthly');

toggle.addEventListener('input' , () => {

  if(toggle.value == 2) {

    console.log(toggle.value);
   console.log(aylik);
   console.log(yillik);
    for (let i=0; i<aylik.length; i++ ) {

      aylik[i].classList.add('hidden');
      yillik[i].classList.remove('hidden');
    }
  } else {
    
    for (let i=0; i<yillik.length; i++ ) {

      yillik[i].classList.add('hidden');
      aylik[i].classList.remove('hidden');
     
      
    }

  
  }
})