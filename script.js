document.getElementById('heartButton').addEventListener('click', function() {
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('surpriseMessage').classList.remove('hidden');
    for (let i = 0; i < 50; i++) {
        createHeart();
    }
});

function createHeart() {
    const heartContainer = document.getElementById('heartContainer');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

const style = document.createElement('style');
style.innerHTML = `
    .heart {
        width: 10px;
        height: 10px;
        background-color: #ff6f61;
        position: absolute;
        bottom: 0;
        animation: floatUp 5s linear infinite;
        clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    }

    @keyframes floatUp {
        to {
            transform: translateY(-100vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);