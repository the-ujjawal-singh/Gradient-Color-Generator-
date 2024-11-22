let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
let copyDiv = document.querySelector(".copycode");
let rgb1 = "#000";
let rgb2 = "#fff";

const hexValues = ()=> {
    let myHexValues = "0123456789abcdef";
    let colors = "#"
    // console.log(myHexValues[6]);
    for(let i = 0; i<6; i++){
        
        colors = colors + myHexValues[Math.floor(Math.random() * 16)];
        // console.log(colors);
    }
    return colors;
};

const handleButton1 = () => {
    let rgb1 = hexValues();
    console.log(rgb1);
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2}`;
};

const handleButton2 = () => {
    let rgb2 = hexValues();
    console.log(rgb2);
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1},  ${rgb2})`;
}


btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);