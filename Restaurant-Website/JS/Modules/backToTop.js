// JavaScript Document

export default function initBackToTop(){
    const btn = document.getElementById('back-to-top');

    if(!btn){
        console.error("Back to top button not found!");
    }

    window.addEventListener('scroll', () =>{
        if(window.scrollY > 300){
            btn.classList.add('show');
        }else{
            btn.classList.remove('show');
        }
    });

    btn.addEventListener('click', () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
}