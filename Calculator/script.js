
let ans="";
let button=document.querySelectorAll("button");

Array.from(button).forEach((ele)=>{
    ele.addEventListener('click',(e)=>
    {
        if(ans.length>20){
            //value exceeded the capacity
            ans="Value exceeds range";
            document.querySelector('.output-container').innerHTML=ans;
        }
        else if(e.target.innerHTML == '='){
            ans=eval(ans);
            document.querySelector('.output-container').innerHTML=ans;
        }
        else if(e.target.innerHTML=='C'){
            ans="";
            document.querySelector('.output-container').innerHTML=ans;
        }
        
        else if(e.target.className=="back"){
            ans=ans.slice(0,-1);
            document.querySelector('.output-container').innerHTML=ans;
        }
        else if(e.target.className=="euler"){
            ans=ans+"2.71828";
            document.querySelector('.output-container').innerHTML=ans;
        }
        else if(e.target.className=="pi"){
            ans=ans+"3.14159";
            document.querySelector('.output-container').innerHTML=ans;
        }
        else{
            ans=ans + e.target.innerHTML;
            document.querySelector('.output-container').innerHTML=ans;
        }
    })
})