const [mario, pipe, restart, jumper] = [".mario", ".pipe", ".restart", ".jumper"].map((item)=>{
    return document.querySelector(item);
  });
  
  const jump = () => {
    if (mario) {
      mario.classList.add("jump");
      setTimeout(()=>{
        mario.classList.remove("jump")
      },500)
    }
  }

  const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;

    // colocando o + na frente da string ele tenta converter para numero

    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "")
    if(pipePosition <= 100 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`

        mario.src = "./assets/game-over.png"
        mario.style.width = "100px"
        mario.style.marginLeft = "23px"

        clearInterval(loop)
    }
  },10)

restart.addEventListener("click", () => {
     location.reload(true)
})

jumper.addEventListener("click", jump)
  
  document.addEventListener("keydown", jump);
  