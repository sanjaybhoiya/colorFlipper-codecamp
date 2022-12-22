const colors = ["green", "red", "rgba(133,112,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

// btn.addEventListener('click', function(){
//    const randomNumber = getRandomNumber();

//     console.log(randomNumber);

//     document.body.style.backgroundColor = colors[randomNumber];
//     color.textContent=colors[randomNumber];
// });

// function getRandomNumber(){
//     return Math.floor(Math.random() * colors.length);


// }

btn.addEventListener('click', function(){

    const colorEL = Math.floor(Math.random() * colors.length)
    

    document.body.style.backgroundColor = colors[colorEL]
    color.textContent = colors[colorEL]

})