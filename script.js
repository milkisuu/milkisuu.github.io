    function hearts() {
        const container = document.querySelector('.container');
    
        const creat = document.createElement('div');
        creat.classList.add('hearts');
        creat.innerHTML = '♡';
        creat.style.left = Math.random() * 100 + 'vw';
        creat.style.animationDuration = Math.random() * 5 + 4 + 's';
    
        container.appendChild(creat);
    
        setTimeout(() => {
            creat.remove();
        }, 3000);
    }
    
    setInterval(hearts, 100);
