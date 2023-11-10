let count=0;

const buttonUp=document.getElementById('btn1');
const buttonDown=document.getElementById('btn2');

const counter=document.querySelector('.counter');

buttonUp.addEventListener('click',()=>{
    
    count++;
    counter.innerHTML=count;
    if(count>0){
        counter.style.color='green';
    }
    else if(count<0)
    {
        counter.style.color='red';
    }
    else if(count==0)
    {
        counter.style.color='rgb(75, 71, 71)';
    }
    
})
buttonDown.addEventListener('click',()=>{

    count--;
    counter.innerHTML=count;
    
    if(count>0){
        counter.style.color='green';
    }
    else if(count<0)
    {
        counter.style.color='red';
    }
    else if(count==0)
    {
        counter.style.color='rgb(75, 71, 71)';
    }
})
