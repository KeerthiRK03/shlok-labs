document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-tutoring');

    startButton.addEventListener('click', () => {
        alert('Starting your AI tutoring session...');
        // Add AI integration logic here
    });
});
document.getElementById('start-tutoring').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/start-tutoring');
        const data = await response.json();
        alert('AI Tutor: ' + data.message);
    } catch (error) {
        console.error('Error:', error);
    }
});

