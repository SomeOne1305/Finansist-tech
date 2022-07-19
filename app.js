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
})document.querySelector(".entWriting").addEventListener('click', ()=>{
    document.querySelector(".ikki").style.transform = "translateY(0px)";
    document.querySelector(".writeEnt").style.transform = "translateY(0px)";
    document.querySelector(".write").style.transform = "translateY(0px)";
    document.querySelector(".titleHead").style.transform = "translateY(0px)";
})

window.addEventListener('scroll', (e)=>{
    console.log(scrollY);
    if (scrollY > 0) {
        document.querySelector('.entrance').style.background = 'linear-gradient(white 30%, #EEF2F7 100%)'
    }

    // section 2

    if (scrollY > 590) {
        document.querySelector('.who').style.transform = 'translateX(0%)';
        document.querySelector('.sides').style.transform = 'scale(1)';
        document.querySelector('.finansist').style.background = 'linear-gradient(white 30%, #EEF2F7 100%)'
    }else{
        document.querySelector('.who').style.transform = 'translateX(-100%)';
        document.querySelector('.sides').style.transform = 'scale(0)';
    }

    //section 3

    if (scrollY > 1360) {
        document.querySelector('.solving').style.background = 'linear-gradient(white 30%, #EEF2F7 100%)';
        document.querySelector('.solve-title').style.transform = 'translate(0%)';
        document.querySelector('.issues').style.transform = 'translate(0%)';
    } else {
        document.querySelector('.solve-title').style.transform = 'translateY(-100%)';
        document.querySelector('.issues').style.transform = 'translateX(100%)';
    }

    //section 4

    if (scrollY > 2450) {
        document.querySelector('.consultant').style.opacity = 1;
    } else {
        document.querySelector('.consultant').style.opacity = 0;
    }
    if (scrollY > 2805) {
        document.querySelector('.report').style.background = 'linear-gradient(white 30%, #EEF2F7 100%)';
        document.querySelector('.reporting').style.transform = 'translate(0%)'
        document.querySelector('.income-damage img').style.transform = 'translate(0%)'
    } else {
        document.querySelector('.reporting').style.transform = 'translateX(-100%)'
        document.querySelector('.income-damage img').style.transform = 'translateX(100%) skew(360deg)' 
    }

    //section 5

    if (scrollY > 3600) {
        document.querySelector('.lets-spend').style.opacity = 1;
    } else {
        document.querySelector('.lets-spend').style.opacity = 0;
    }

    if (scrollY > 3800) {
        document.querySelector('.Cashflow').style.background = 'linear-gradient(white 30%, #EEF2F7 100%)';
        document.querySelector('.cash').style.opacity = 1;
        document.querySelector('.cash').style.transform = 'translate(0%) rotate(0deg)'
    } else {
        document.querySelector('.cash').style.opacity = 0;
        document.querySelector('.cash').style.transform = 'translateY(100%) rotate(360deg)'
    }


    //sectionn 6


    if (scrollY > 4636) {
        document.querySelector('.integration').style.background = 'linear-gradient(white 30%, #EEF2F7 100%)';
        document.querySelector('.integration-window h2').style.transform = 'translateX(0%)'
        document.querySelector('.integration-window p').style.transform = 'translateX(0%)'
        document.querySelector('.banks').style.transform = 'translateX(0%)';
        document.querySelector('.register .title').style.transform = 'rotate(0deg)';
        document.querySelector('.register .title').style.opacity = 1;
        document.querySelector('.register form').style.transform = 'translateX(0%)';
    } else {
        document.querySelector('.integration-window h2').style.transform = 'translateX(1100%)';
        document.querySelector('.integration-window p').style.transform = 'translateX(-1100%)';
        document.querySelector('.banks').style.transform = 'translateX(100%)';
        document.querySelector('.register .title').style.transform = 'rotate(360deg)';
        document.querySelector('.register .title').style.opacity = 0;
        document.querySelector('.register form').style.transform = 'translateX(120%)';
    }
})
