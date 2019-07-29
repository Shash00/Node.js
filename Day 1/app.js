let time = 0;

timer = setInterval(function() {
    time += 2;
    if (time>10){
        clearInterval(timer);
    }
    
    console.log(time + ' seconds passed');
}, 2000);