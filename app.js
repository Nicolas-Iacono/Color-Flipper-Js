const colors = ['yellow','red','blue'];
const colorsSecundary = ['green','orange','pink'];
const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
const color = document.querySelector('.span__color');

const colorsHex =['#0000FF','#FFF200','#ff0000'];
const colorsHexSecundary =['#00ff00','#F9C6F1','#FF6D03'];


btn.addEventListener('click', function(){
 const randomNumber = getRandomNumber();
 console.log(randomNumber);
 document.body.style.backgroundColor = colors[randomNumber];
 color.textContent=colors[randomNumber];
})

btn2.addEventListener('click', function(){
    const randomNumber = getRandomNumber2();
    console.log(randomNumber);
    document.body.style.backgroundColor = colorsSecundary[randomNumber];
    color.textContent = colorsSecundary[randomNumber]

    
})


function getRandomNumber2(){
    return Math.floor(Math.random()*colorsSecundary.length);

    
}

console.log(getRandomNumber2);

function getRandomNumber(){
    return  Math.floor(Math.random()*colors.length);
}



// btn.addEventListener('click', function(){
//     const randomNumber = getRandomNumber();
//     console.log(randomNumber);
//     document.body.style.backgroundColor = colorsHex[randomNumber];
//     color.textContent=colorsHex[randomNumber];
//    })
   
//    btn2.addEventListener('click', function(){
//        const randomNumber = getRandomNumber2();
//        console.log(randomNumber);
//        document.body.style.backgroundColor = colorsHexSecundary[randomNumber];
//        color.textContent = colorsHexSecundary[randomNumber]
   
       
//    })
   
   
//    function getRandomNumber2(){
//        return Math.floor(Math.random()*colorsHexSecundary.length);
   
       
//    }
   
//    console.log(getRandomNumber2);
   
//    function getRandomNumber(){
//        return  Math.floor(Math.random()*colorsHex.length);
//    }