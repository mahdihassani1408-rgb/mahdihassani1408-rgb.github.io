// JavaScript Document

export default function initFormHandler(){
    const form = document.querySelector('.contact-form');
    const messageDiv = form.querySelector('.form-message');

    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const msg = form.querySelector('textarea').value.trim();

        if(!name || !email || !msg){
            showMessage("Please complete the form");
            return;
        }

        if(!isValidEmail(email)){
             showMessage("Invalid email");
            return;
        }

        showMessage('success', 'Your message sended successfully');
        form.reset();

    });

    function showMessage(text, type){
        messageDiv.textContent = text;
        messageDiv.style.display = 'block';
        messageDiv.style.color = type === 'error' ? 'red' : 'green';
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 4000);
    }

    function isValidEmail(email){
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}