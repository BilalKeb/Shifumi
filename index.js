var image = document.getElementById("image");
//image.setAttribute("src", "https://www.cortex-mag.net/wp-content/uploads/bill-gates-jeune-1000x437.jpg");
image.src="https://www.cortex-mag.net/wp-content/uploads/bill-gates-jeune-1000x437.jpg";

var imagePierre = document.getElementById("image-Pierre");
imagePierre.setAttribute("src", "https://resize-parismatch.lanmedia.fr/f/webp/r/392/img/var/news/storage/images/paris-match/actu/sciences/les-tresors-d-un-chasseur-de-meteorites-aux-encheres-1605299/c11/25998027-1-fre-FR/C11.jpg");

var imageFeuille = document.getElementById("image-feuille");
imageFeuille.setAttribute("src", "https://www.ecole-occidentale-meditation.com/wp-content/uploads/2016/04/page+blanche-300x400.jpg");

var imageCis = document.getElementById("image-cis");
imageCis.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRHnPufKRrNBF2rJ7L5E60ARY4SoyoWDDyoBAhEB4-PaVlYOWnRMFEeTN1ZA5XsnmNZUg&usqp=CAU");


function pierre (){
  var aleatoire= Math.floor(Math.random() * 3);
  if(aleatoire==0){
    image.src="https://resize-parismatch.lanmedia.fr/f/webp/r/392/img/var/news/storage/images/paris-match/actu/sciences/les-tresors-d-un-chasseur-de-meteorites-aux-encheres-1605299/c11/25998027-1-fre-FR/C11.jpg"
  }else if(aleatoire==1){
    image.src="https://www.ecole-occidentale-meditation.com/wp-content/uploads/2016/04/page+blanche-300x400.jpg";
  }else{
    image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRHnPufKRrNBF2rJ7L5E60ARY4SoyoWDDyoBAhEB4-PaVlYOWnRMFEeTN1ZA5XsnmNZUg&usqp=CAU"
  }

  if(image.src=="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRHnPufKRrNBF2rJ7L5E60ARY4SoyoWDDyoBAhEB4-PaVlYOWnRMFEeTN1ZA5XsnmNZUg&usqp=CAU"){
    alert("on a gagné")
  }

  if(image.src=="https://www.ecole-occidentale-meditation.com/wp-content/uploads/2016/04/page+blanche-300x400.jpg"){
    alert("on a perdu")
  }
  
}
// short url
//alert(Math.floor(Math.random() * 3));



function feuille(){
  var aleatoire= Math.floor(Math.random() * 3);
  if(aleatoire==0){
    image.src="https://resize-parismatch.lanmedia.fr/f/webp/r/392/img/var/news/storage/images/paris-match/actu/sciences/les-tresors-d-un-chasseur-de-meteorites-aux-encheres-1605299/c11/25998027-1-fre-FR/C11.jpg"
  }else if(aleatoire==1){
    image.src="https://www.ecole-occidentale-meditation.com/wp-content/uploads/2016/04/page+blanche-300x400.jpg";
  }else{
    image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRHnPufKRrNBF2rJ7L5E60ARY4SoyoWDDyoBAhEB4-PaVlYOWnRMFEeTN1ZA5XsnmNZUg&usqp=CAU"
  }

  if(image.src=="https://resize-parismatch.lanmedia.fr/f/webp/r/392/img/var/news/storage/images/paris-match/actu/sciences/les-tresors-d-un-chasseur-de-meteorites-aux-encheres-1605299/c11/25998027-1-fre-FR/C11.jpg"){
    alert("on a gagné")
  }
  if(image.src=="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRHnPufKRrNBF2rJ7L5E60ARY4SoyoWDDyoBAhEB4-PaVlYOWnRMFEeTN1ZA5XsnmNZUg&usqp=CAU"){
    alert("on a perdu")
  }
}


function Cis(){
  var aleatoire= Math.floor(Math.random() * 3);
  if(aleatoire==0){
    image.src="https://resize-parismatch.lanmedia.fr/f/webp/r/392/img/var/news/storage/images/paris-match/actu/sciences/les-tresors-d-un-chasseur-de-meteorites-aux-encheres-1605299/c11/25998027-1-fre-FR/C11.jpg"
  }else if(aleatoire==1){
    image.src="https://www.ecole-occidentale-meditation.com/wp-content/uploads/2016/04/page+blanche-300x400.jpg";
  }else{
    image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRHnPufKRrNBF2rJ7L5E60ARY4SoyoWDDyoBAhEB4-PaVlYOWnRMFEeTN1ZA5XsnmNZUg&usqp=CAU"
  }
  if(image.src=="https://www.ecole-occidentale-meditation.com/wp-content/uploads/2016/04/page+blanche-300x400.jpg"){
    alert("on a gagné")
  }
  if(image.src=="https://resize-parismatch.lanmedia.fr/f/webp/r/392/img/var/news/storage/images/paris-match/actu/sciences/les-tresors-d-un-chasseur-de-meteorites-aux-encheres-1605299/c11/25998027-1-fre-FR/C11.jpg"){
    alert("on a perdu")
  }

}
    
