const timer = document.getElementById('timer');


setInterval(() => {
    const value = timer.textContent;

    if(value > 0){
     timer.textContent =  value - 1;
    }
    
    else if (value == 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(value);
    }

}, 100);
