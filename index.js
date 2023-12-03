const yesBtn = document.querySelector('#yesBtn'); 
yesBtn.addEventListener('click',function () { 
    alert('Sabia que ibas a decir que si :)')
    alert('no tenias de otra jjsjs')
    alert('eres mi total inspiracion')
    alert('te quiero mucho mi negrita <3')
    alert('ay no te creas mi morenita toda preciosa')
    alert('escuchalo mi amor')
    location.href = 'https://www.youtube.com/watch?v=eTydGxhoUKQ';
});
     const noBtn = document.querySelector('#noBtn');
      noBtn.addEventListener('mouseover', function () {
         const randomX = parseInt(Math.random()*100); 
         const randomY = parseInt(Math.random()*100); 
         noBtn.style.setProperty('top',randomY+'%'); 
         noBtn.style.setProperty('left',randomX+'%'); 
         noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
        })