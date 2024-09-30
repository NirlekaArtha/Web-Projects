let wheel = document.getElementById("wheel-container")
let wheelChild = wheel.getElementsByClassName("wheel-item")

let rotation = 360/wheelChild.length

for (let i = 0; i < wheelChild.length; i++)
{
    wheelChild[i].style.transform = `rotate(${i * (360 / wheelChild.length)}deg)`
    wheelChild[i].firstChild.style.transform = `rotate(${-15}deg)`
}

function putar ()
{
    wheel.style.transform = `rotate(${rotation + 15}deg)`
    rotation += (360/wheelChild.length)
    // for (let i = 0; i < wheelChild.length; i++)
    // {
    //     wheelChild[i].style.transform = `rotate(${i * (360 / wheelChild.length) - 45}deg)`
    // }
}