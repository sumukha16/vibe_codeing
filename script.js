window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.body.style.overflow = 'auto'; // Allow scrolling after loading
    }, 2500); // Match the fade out duration
});