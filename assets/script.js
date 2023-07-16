const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const currentBanner = document.querySelector(".banner-img");
const currentTexte = document.querySelector(".texte");
const dots = document.querySelector(".dots");

const currentPath = './assets/images/slideshow/';//chemin d'accès des images
let cpt = 0;// Initialiser compteur à 0

const init = () => { // Fonction pour afficher la première diapositive
  currentBanner.src = currentPath + slides[cpt].image;
  currentTexte.innerHTML = slides[cpt].tagLine;

for(let i =0; i < slides.length;i++){ //Pour chaque elements
    const span = document.createElement('span'); //Crée balise span
    span.classList = "dot"; //class .dot
    dots.appendChild(span); //envoie parents
    }
    activeDot()

};

const activeDot = () => {
    const tabDots = document.querySelectorAll(".dot"); // sélectionne tous les points
    for (let i = 0; i < tabDots.length; i++) { 
        //boucle pour enlever "dot_selected" des points
      tabDots[i].classList = "dot"; // enlève "dot_selected"
    }
    tabDots[cpt].classList = "dot dot_selected"; // ajoute "dot_selected"
}
arrowRight.addEventListener('click', () => {// écouteur d'événements diapositive suivante
  if (cpt == slides.length - 1) { //si on est sur la dernière diapositive
    cpt = 0; // retourner à la première diapositive
  } else {
    cpt++; // passer à la diapositive suivante
  }

  currentBanner.src = currentPath + slides[cpt].image; // Changement image
  currentTexte.innerHTML = slides[cpt].tagLine
  activeDot()
  console.log("flèche de droite");
});
arrowLeft.addEventListener('click', () => {
  if (cpt == 0) {// si on est sur la première diapositive
    cpt = slides.length - 1; // retourner à la dernière diapositive
  } else {
    cpt--; 
  }

  currentBanner.src = currentPath + slides[cpt].image;
  currentTexte.innerHTML = slides[cpt].tagLine
  activeDot()
  console.log("flèche de gauche");
});


init();