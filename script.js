let container = document.querySelector(".container")
let btn = document.querySelector("button")
let side = 3

btn.addEventListener("click", () => {
    let inputButton = document.querySelector("input")

    parseInt(inputButton.value) > 100 ? side = 100 : side = parseInt(inputButton.value)
    parseInt(inputButton.value) < 0 ? side = 3 : side = parseInt(inputButton.value)
    console.log(`side: ${side}`);
    drawBoard(side)
})

function drawBoard(side){
    while(container.firstChild){
            container.removeChild(container.firstChild)
    }

    for(let i = 0; i < parseInt(side * side); i++){
        
        
        
        let brightness = 100
        let square = document.createElement("div")
    
        let size = parseInt(1500/side)
        let red = Math.random() * 254
        let green = Math.random() * 254
        let blue = Math.random() * 254

        console.log(`size: ${size}`);
    
        square.style["height"] = `${size}px`
        square.style["width"] = `${size}px`
        square.style["background-color"] = `rgb(${red}, ${green}, ${blue})`

        //square.style["border"] = "green 2px solid"
        square.classList="grid"

        square.addEventListener("mouseover", () => {
            brightness-= 10
            square.style.filter = `brightness(${brightness}%)`
        })

        container.appendChild(square)
    }
}

drawBoard(side)