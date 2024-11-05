let count = 0; 
let timer = 0; 

const counterDisplay = document.querySelector('#counter'); 

document.querySelector('#start').addEventListener('click', () => {
    if (!timer) {
        timer = setInterval(() => {
            count++;
            counterDisplay.textContent = count; 
        }, 1000);
    }
});

document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(timer); 
    
});

document.querySelector('#reset').addEventListener('click', () => {
    clearInterval(timer); 
    count = 0; 
   
   document.querySelector('#counter').innerHTML = count;
});
