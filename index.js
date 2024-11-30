const random = document.getElementById("random")
const memorable = document.getElementById("memorable")
const pin = document.getElementById("pin")

window.addEventListener('load', function(e){
    e.preventDefault()

    main.style.display = "block"
    memo.style.display = "none"
    pinpass.style.display = "none"
    // random.style.background = "white"
})

const main = document.getElementById("main-password")
const memo = document.getElementById("memorable-password")
const pinpass = document.getElementById("pin-password")
const slide = document.getElementById("slide")

random.addEventListener('click',function(e){
    e.preventDefault()
    main.style.display ="block"
    memo.style.display ="none"
    pinpass.style.display ="none"
    
    slide.classList.add("randomSlide")
    slide.classList.remove("memorableSlide")
    slide.classList.remove("pinSlide")

})

memorable.addEventListener('click', function(e){
    e.preventDefault()
    memo.style.display ="block"
    main.style.display = "none"
    pinpass.style.display = "none"

    
    slide.classList.add("memorableSlide")
    slide.classList.remove("randomSlide")
    slide.classList.remove("pinSlide")

})

pin.addEventListener('click',function(e){
    e.preventDefault()
    // alert("new")
    main.style.display = "none"
    memo.style.display = "none"
    pinpass.style.display = "block"
    
    slide.classList.add("pinSlide")
    slide.classList.remove("memorableSlide")
    slide.classList.remove("randomSlide")
})


//random
const range = document.getElementById("range")
const rangeinput = document.getElementById("range-input")
const screen = document.getElementById("screen")
const eventAction = document.querySelectorAll(".event")

range.min=1;
range.max=100,
range.step=1;
range.value=1;
range.addEventListener('click', function(){

    rangeinput.value = range.value;
    screen.textContent = generator(parseInt(range.value))
})

rangeinput.addEventListener('input', function(){
    if(parseInt(rangeinput.value) > 100){
        rangeinput.value = 20;
    }

    screen.textContent = generator(parseInt(rangeinput.value))
    
    
    

    
});

const sliding = document.getElementById("sliding")
let isNum = false;
sliding.addEventListener('click', function(e){
    e.preventDefault()
    // alert('new')
    sliding.classList.toggle("sliding")
    isNum = !isNum;
    console.log(isNum);

    if(isNum===true){
        sliding.style.background = "blue"
    }else if (isNum===false){
        sliding.style.background = "gray"
    }

})

const symbol = document.getElementById("symbol")
let isSymbol = false;
symbol.addEventListener('click', function(e){
    e.preventDefault()
    // alert('new')
    symbol.classList.toggle("symbol")
    isSymbol = !isSymbol;
    console.log(isSymbol);

    if(isSymbol===true){
        symbol.style.background = "blue"
    }else if (isSymbol===false){
        symbol.style.background = "gray"
    }


    
})


eventAction.forEach(event => {
    event.addEventListener("click", function(e){
        e.preventDefault();
        screen.textContent = generator(parseInt(range.value),isNum,isSymbol)
    
        
    })
});

function generator(len, isNum, isSymbol){
    let pass = "";
    let passcode;
    if(isNum === true){
        passcode = "abcdABCD12efghij34EFGHIJklmno567KLMNO890pqrstuPQRSTUwxyzWXYZ".split("");
    }else if(isSymbol === true){
        passcode = "abcdemMNOPQRSTUVnopuvw)_+{[xyzABCDEqrstFLWXYZ!~@#$fghijkl%^&*(}]GHIJK/|<>=".split("");
    }else{
        passcode = "abcdUVWXYelmnopqrsyzABCDtuvwxEFGPQRSHfghijkIJKLMNOTZ".split("");
    }
    

    for(let i = 0; i < len; i++){
        let rand = Math.floor(Math.random() * passcode.length);
        pass = pass + passcode[rand];
    }
    return pass;
}


//memorable
const range1 = document.getElementById("range1")
const input1 = document.getElementById("input1")
const screen1 = document.getElementById("screen1")

range1.min = 1;
range1.max = 15;
range1.step = 1;
range1.value = 1;

range1.addEventListener('click', function(e){
    e.preventDefault()
    input1.value = range1.value
    screen1.textContent = generate(parseInt(range1.value))

    // if(parseInt(range1.value) > 15  &&  parseInt(range1.value) >= 6){
    //     range1.value = 6;
    // }

})

input1.addEventListener('input',function(e){
    e.preventDefault()
    if(parseInt(input1.value) > 15){
        input1.value = 15;
    }

   screen1.textContent = generate(parseInt(input1.value))
    

})




const capital = document.getElementById("capitalize")
let isCapital = false;
capital.addEventListener('click',function(e){
    e.preventDefault()
    // alert('new')
    capital.classList.toggle("capitalize")
    isCapital = !isCapital
    console.log(isCapital);
    if(isCapital==true){
        capital.style.background = "blue"
    }else{
        capital.style.background = "gray"
    }
})

const usefull = document.getElementById("usefullword")
let isUsefull = false;
usefull.addEventListener('click',function(e){
    e.preventDefault()
    usefull.classList.toggle("usefull-memo")
    isUsefull = !isUsefull
    console.log(isUsefull);

    if(isUsefull==true){
        usefull.style.background = "blue"
    }else{
        usefull.style.background = "gray"
    }
})




function generate(jin, isCapital, isUsefull){
    let mora = "";
    let mepassword;
    if(isCapital === true){
        mepassword = "Hit-.Tott-kiv-.Jush-.Yout-.Meme-.Memo-.Asidey-.Glit-.Joom-.Nche-.Dex-.Mimin-.Tanot-.Low-.Leve-.Mic-.Gig-.Ssd-.Rim-.Tott-.Swa".split(".");
    }else if(isUsefull === true){
        mepassword = "paris-.tokyo-newyork-.Julian-.drum-.mars-.galaxy-.github-.rainbow-.zoom-.ninja-.destiny-.Mimo-.chains-.assembly-.high-.level-.random-.floor-.display-.aling-.center".split(".");
    }else{
        mepassword = "hit-.tott-kiv-.random-.temd-.floor-.display-.aling-.center-.jush-.Yout-.tont-Meme-.Memo-.Asidey-.Glit-.Jush-.rum-.mars-.alaxy-.github-.oom-.Nche-.Dex-.Mimin-.Tanot-.Low-.Leve-.Mic-.Gig-.Ssd-.Rim-.Tott-.Swa-.paris-.tokyo-neork-..rainbow-.zoom-.ninja-.destiny-.Mimo-.chains-.assely-.high-.level-".split(".");
    }
     

    for(let i = 0; i < jin; i++){
        let don = Math.floor(Math.random() * mepassword.length);
        mora =  mora + mepassword[don]; 
    }
    return mora;

}

const connectall = document.querySelectorAll(".connect")
connectall.forEach(connect => {
    connect.addEventListener("click", function(e){
        e.preventDefault()

        screen1.textContent = generate(parseInt(range1.value), isCapital, isUsefull)
    })
})


//pin
const rangepin = document.getElementById("rangepin")
const numberpin = document.getElementById("numberpin")
const screenpin = document.getElementById("screenpin")


rangepin.min =1 ;
rangepin.max=12;
rangepin.step=1;
rangepin.value=1;
rangepin.addEventListener("click",function(e){
    e.preventDefault()
    // alert("new")
    numberpin.value = rangepin.value 
    screenpin.textContent = generatePin (parseInt(rangepin.value))
})

numberpin.addEventListener("input",function(e){
    e.preventDefault()
    rangepin.value=numberpin.value
    if(numberpin.value > 12){
        numberpin.value = 6;
    }
    screenpin.textContent = generatePin (parseInt(numberpin.value))
})



function generatePin(lin){
    numPin = ""
    PinMunber = "12345670";
    for(let i = 0; i < lin; i++){
        let flin =Math.floor(Math.random() * PinMunber.length);
        numPin = numPin + PinMunber[flin]
    }
    return numPin
}


const clear = document.getElementById("reload")
const clearscreen = document.getElementById("screenpin")

function refresh(){
    clearscreen.textContent="";

}


const text = document.getElementById("text")

let textcontainer = "Strong. Secure. Awesome. Try our random password generator" ;
let reader = 0;

function writer(){
    if(reader < textcontainer.length){
        text.textContent+=textcontainer[reader]
        reader++;
    }else if(reader >= textcontainer.length){
        text.textContent = "";
        reader = 0;

    }
    setTimeout(writer, 100)
}
writer();







