let time = 2000; index = 0;

function slide(){
    let imagem = document.querySelectorAll('#carrousel img');maxIndex = imagem.length;
    imagem[index].classList.remove('show')
    index ++
    if(index >= maxIndex){
        index = 0;
    }
    imagem[index].classList.add('show')

}

function start() {
    setInterval(() => {
        slide();
    }, time);
    
}

window.addEventListener('load',start)