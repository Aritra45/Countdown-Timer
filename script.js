
function startCountdown(countdownId, targetDate) {
    const timer = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById(`days${countdownId}`).textContent = days;
        document.getElementById(`hours${countdownId}`).textContent = hours;
        document.getElementById(`minutes${countdownId}`).textContent = minutes;
        document.getElementById(`seconds${countdownId}`).textContent = seconds;

        const timerContainer = document.getElementById(`timer${countdownId}`);

        
        timerContainer.querySelectorAll('.colon').forEach(colon => {
            colon.style.display = 'inline-block';
        });

        
        if (timeLeft < 0) {
            clearInterval(timer);
            timerContainer.textContent = "Time's up!";
            
          
            const sound = new Audio('sounds/end.mp3'); 
            sound.volume = 0.5; 
            sound.play();
        }
    }, 1000);
}

document.querySelectorAll('.start').forEach(button => {
    button.addEventListener('click', function() {
        const countdownId = this.getAttribute('data-id');
        const targetDate = new Date(document.getElementById(`datetime${countdownId}`).value);
        startCountdown(countdownId, targetDate);
    });
});
