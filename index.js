function opener(){
    document.getElementsByClassName("ultag")[0].style.display = "block";
}

function closer(){
    document.getElementsByClassName("ultag")[0].style.display = "none";
}

window.addEventListener("resize",()=>{
    console.log(window.screen.width);
    if(window.screen.width > 1050)
    {
        document.getElementsByClassName("ultag")[0].style.display = "flex";
        console.log("Incoming")
    }
    else{
        document.getElementsByClassName("ultag")[0].style.display = "none";  
    }
})


// on scroll event//