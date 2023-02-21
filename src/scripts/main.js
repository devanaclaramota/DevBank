 let btn = document.querySelector('.btn-mobile')
 let nav = document.querySelector('.nav')

 btn.addEventListener('click', function(e){
        e.preventDefault()
        toggle();
 })
 function toggle(){
    nav.classList.toggle('-active')
 }