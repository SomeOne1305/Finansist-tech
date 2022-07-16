let left = document.querySelector(".left");

left.addEventListener('click', ()=>{
    document.querySelector(".write").style.transform = "translateY(400px)";
    document.querySelector(".titleHead").style.transform = "translateY(-60px)";
    document.querySelector(".ikki").style.transform = "translateY(-330px)";
    document.querySelector(".writeEnt").style.transform = "translateY(-228px)";
    left.style.visibility = 'hidden'
})

document.querySelector('.fixed_com').addEventListener('click', ()=>{
    document.querySelector(".communicator").style.position = 'fixed';
    document.querySelector(".communicator").style.bottom = '10%';
    document.querySelector(".communicator").style.left = '61%'
})

document.querySelector(".down").addEventListener('click', ()=>{
    document.querySelector(".communicator").style.top = '110%'
    document.querySelector(".communicator").style.right = '110%'
})

// document.querySelectorAll(".down1").addEventListener('click', ()=>{
//     document.querySelector(".communicator").style.top = '110%'
//     document.querySelector(".communicator").style.right = '110%'
// })


document.querySelector(".entWriting").addEventListener('click', ()=>{
    document.querySelector(".ikki").style.transform = "translateY(0px)";
    document.querySelector(".writeEnt").style.transform = "translateY(0px)";
    document.querySelector(".write").style.transform = "translateY(0px)";
    document.querySelector(".titleHead").style.transform = "translateY(0px)";
})

window.addEventListener('scroll', (e)=>{
    if (scrollY) {
        
    } else {
        
    }
})