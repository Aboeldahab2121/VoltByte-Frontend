// Form submission with spinner
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const spinner = this.querySelector('.spinner-border');
    const button = this.querySelector('button[type="submit"]');

    spinner.classList.remove('d-none');
    button.disabled = true;

    setTimeout(() => {
        spinner.classList.add('d-none');
        button.disabled = false;
        alert('Thank you for subscribing!');
    }, 2000);
});