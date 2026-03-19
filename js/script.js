let likeCount = 0;
let curtido = false;//flag booleanna

function curtir() {
  if(curtido == False){
    likeCount++;
    curtido = true;
document.getElementById("likecount").innerText = likeCount
}else{

likeCount--;
curtido = false;
document.getElementById("likecount").innerText = likeCount

}

}


document.getElementById("likeBtn").addEventListener("click", curtir);
