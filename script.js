document.addEventListener('DOMContentLoaded', () => {
    // Get the image elements
    const linkedinImg = document.getElementById('linkedin');
    const githubImg = document.getElementById('github');

    // Add click event listeners
    linkedinImg.addEventListener('click', () => {
        window.open('https://www.linkedin.com/in/mikael-shawul', '_blank');
    });

    githubImg.addEventListener('click', () => {
        window.open('https://github.com/mikaelshawul', '_blank');
    });

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        const body = document.body;
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        body.setAttribute('data-theme', newTheme);

        // Optionally, update the button icon
        const button = document.getElementById('theme-toggle');
        button.textContent = newTheme === 'light' ? '🌙' : '☀️';
    });
});
