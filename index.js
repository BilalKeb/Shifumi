var image = document.getElementById("image");
//image.setAttribute("src", "https://www.cortex-mag.net/wp-content/uploads/bill-gates-jeune-1000x437.jpg");
image.src="https://www.cortex-mag.net/wp-content/uploads/bill-gates-jeune-1000x437.jpg";

var imagePierre = document.getElementById("image-Pierre");
imagePierre.setAttribute("src", "https://resize-parismatch.lanmedia.fr/f/webp/r/392/img/var/news/storage/images/paris-match/actu/sciences/les-tresors-d-un-chasseur-de-meteorites-aux-encheres-1605299/c11/25998027-1-fre-FR/C11.jpg");

var imageFeuille = document.getElementById("image-feuille");
imageFeuille.setAttribute("src", "https://www.ecole-occidentale-meditation.com/wp-content/uploads/2016/04/page+blanche-300x400.jpg");

var imageCis = document.getElementById("image-cis");
imageCis.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRHnPufKRrNBF2rJ7L5E60ARY4SoyoWDDyoBAhEB4-PaVlYOWnRMFEeTN1ZA5XsnmNZUg&usqp=CAU");

  var bouton_pierre=document.getElementById('bouton_pierre')
  var bouton_feuille=document.getElementById('bouton_feuille')
  var bouton_cis=document.getElementById('bouton_cis')

  var PointIa=0
  var PointJoueur=0
  var CounterRound= 0



 

function pierre (){
  if(CounterRound>4){
    if(PointJoueur < PointIa ){
      alert("l'IA a gagné !!!!")
    }else {
      alert("Vous avez gagné !!!!")
    }
    alert('la partie est terminée')
    bouton_pierre.setAttribute("disabled", "disabled")
    return
  }
  var aleatoire= Math.floor(Math.random() * 3);
  // aleatoire contient soit 0, soit 1, soit 2
  if(aleatoire==0){
    image.src="https://resize-parismatch.lanmedia.fr/f/webp/r/392/img/var/news/storage/images/paris-match/actu/sciences/les-tresors-d-un-chasseur-de-meteorites-aux-encheres-1605299/c11/25998027-1-fre-FR/C11.jpg"
  }else if(aleatoire==1){
    image.src="https://www.ecole-occidentale-meditation.com/wp-content/uploads/2016/04/page+blanche-300x400.jpg";
  }else{
    image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRHnPufKRrNBF2rJ7L5E60ARY4SoyoWDDyoBAhEB4-PaVlYOWnRMFEeTN1ZA5XsnmNZUg&usqp=CAU"
  }

  if(image.src=="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRHnPufKRrNBF2rJ7L5E60ARY4SoyoWDDyoBAhEB4-PaVlYOWnRMFEeTN1ZA5XsnmNZUg&usqp=CAU"){
    alert("on a gagné ce round")
    PointJoueur++;
    CounterRound++;
  }

  if(image.src=="https://www.ecole-occidentale-meditation.com/wp-content/uploads/2016/04/page+blanche-300x400.jpg"){
    alert("on a perdu ce round")
    PointIa++;
    CounterRound++;
  }
  
}
// short url
//alert(Math.floor(Math.random() * 3));



function feuille(){
  if(CounterRound>4){
    if(PointJoueur < PointIa ){
      alert("l'IA a gagné !!!!")
    }else {
      alert("Vous avez gagné !!!!")
    }
    alert('la partie est terminée')
    bouton_feuille.setAttribute("disabled", "disabled")
    return
  }
  var aleatoire= Math.floor(Math.random() * 3);
  if(aleatoire==0){
    image.src="https://resize-parismatch.lanmedia.fr/f/webp/r/392/img/var/news/storage/images/paris-match/actu/sciences/les-tresors-d-un-chasseur-de-meteorites-aux-encheres-1605299/c11/25998027-1-fre-FR/C11.jpg"
  }else if(aleatoire==1){
    image.src="https://www.ecole-occidentale-meditation.com/wp-content/uploads/2016/04/page+blanche-300x400.jpg";
  }else{
    image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRHnPufKRrNBF2rJ7L5E60ARY4SoyoWDDyoBAhEB4-PaVlYOWnRMFEeTN1ZA5XsnmNZUg&usqp=CAU"
  }

  if(image.src=="https://resize-parismatch.lanmedia.fr/f/webp/r/392/img/var/news/storage/images/paris-match/actu/sciences/les-tresors-d-un-chasseur-de-meteorites-aux-encheres-1605299/c11/25998027-1-fre-FR/C11.jpg"){
    alert("on a gagné ce round")
    PointJoueur++;
    CounterRound++;
  }
  if(image.src=="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRHnPufKRrNBF2rJ7L5E60ARY4SoyoWDDyoBAhEB4-PaVlYOWnRMFEeTN1ZA5XsnmNZUg&usqp=CAU"){
    alert("on a perdu ce round")
    PointIa++;
    CounterRound++;
  }
  alert("le score du joueur est : "+PointJoueur+"    et le score de l'IA est : "+PointIa+"\n on est dans le round : "+CounterRound)
}


function Cis(){
  if(CounterRound>4){
    if(PointJoueur < PointIa ){
      alert("l'IA a gagné !!!!")
    }else {
      alert("Vous avez gagné !!!!")
    }
    alert('la partie est terminée')
    bouton_cis.setAttribute("disabled", "disabled")
    return
  }
  var aleatoire= Math.floor(Math.random() * 9);
  if(aleatoire==0){
    image.src="https://resize-parismatch.lanmedia.fr/f/webp/r/392/img/var/news/storage/images/paris-match/actu/sciences/les-tresors-d-un-chasseur-de-meteorites-aux-encheres-1605299/c11/25998027-1-fre-FR/C11.jpg"
  }else if(aleatoire==1){
    image.src="https://www.ecole-occidentale-meditation.com/wp-content/uploads/2016/04/page+blanche-300x400.jpg";
  }else{
    image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRHnPufKRrNBF2rJ7L5E60ARY4SoyoWDDyoBAhEB4-PaVlYOWnRMFEeTN1ZA5XsnmNZUg&usqp=CAU"
  }
  if(image.src=="https://www.ecole-occidentale-meditation.com/wp-content/uploads/2016/04/page+blanche-300x400.jpg"){
    alert("on a gagné ce round")
    PointJoueur++;
    CounterRound++;
  }
  if(image.src=="https://resize-parismatch.lanmedia.fr/f/webp/r/392/img/var/news/storage/images/paris-match/actu/sciences/les-tresors-d-un-chasseur-de-meteorites-aux-encheres-1605299/c11/25998027-1-fre-FR/C11.jpg"){
    alert("on a perdu ce round")
    PointIa++;
    CounterRound++;
  }
  
} 



// counterRound=counterRound +1 

// if (counter===5 && PointJoeur> PointIa){
//   console.log(you win)

// {else if (counterRound===5 && PointIa> pointsJoueur){
  // console.log (you loose)




// }else if (counterRound ===5 && PointIa){
//     console.log(you win)
// }



