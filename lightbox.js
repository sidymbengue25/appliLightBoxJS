/**
 * Elle permet d'afficher un popup de l'élément passé en paramétre
 * @param  {HTMLElement} link
 */
function displayImg(link){
  let img= new Image();
  let overlay=document.getElementById('overlay');
  img.onload=()=>{
    overlay.innerHTML='';
    overlay.appendChild(img);
  };
  img.src=link.href;
  overlay.style.display='block';
  overlay.innerHTML=`<span>Chargement...</span>`;
}
document.getElementById('overlay').onclick=()=>{
  document.getElementById('overlay').style.display='none';
};
/**
 * Les balises contenant les images
 * @type {htmlCollection}
 */
let links =document.getElementsByTagName('a');
for(let i=0,linkslen=links.length;i<linkslen;i++){
  links[i].onclick=()=>{
    //initialisation sur tous les éléments de links
    displayImg(links[i]);
    return false;//Bloquer la redirection
  };
}
