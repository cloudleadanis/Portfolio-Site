// theme toggle functionality
const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle('dark-theme');
};

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// smooth scrolling
const scrollLinks = document.querySelectorAll('a[src*="#"]');
scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Initialize Highlight.js
hljs.highlightAll();