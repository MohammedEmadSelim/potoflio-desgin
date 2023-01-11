const btn = document.getElementById('close');
console.log(btn);
const open_modal = document.querySelectorAll('.modal-js');
console.log(open_modal);
const modal_container = document.querySelector('.modal-container');
console.log(modal_container);

for(let i=0;i<open_modal.length;i++){
    open_modal[i].addEventListener('click', function(){
        modal_container.classList.add('show');
        
    })
}
btn.addEventListener('click',function(){
    modal_container.classList.remove('show');  
})

