function runCode() {
    const code = document.getElementById('code').value;
    const iframe = document.getElementById('result');
    iframe.srcdoc = code;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Message sent! We will get back to you soon.');
        form.reset();
    });
});
