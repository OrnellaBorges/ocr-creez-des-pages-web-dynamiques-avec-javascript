const reponse = await fetch('pieces-autos.json');
console.log(reponse)
const pieces = await reponse.json();
console.log(pieces)

const article = pieces[0]
const imageElement = document.createElement("img");
imageElement.src = article.image
const nomElement = document.createElement('h2');
nomElement.innerText = article.nom
const prixElement = document.createElement('p');
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35? "€" : "€€€"})`;
const categorieElement = document.createElement('p');
categorieElement.innertext = article.categorie ?? 'aucune categorie';

const sectionFiche= document.querySelector('.fiches')
sectionFiche.appendChild(imageElement);
sectionFiche.appendChild(nomElement);
sectionFiche.appendChild(prixElement);
sectionFiche.appendChild(categorieElement);


/* const reponse = await fetch ('pieces-autos.json');
const piece = await reponse.json();

const article = pieces[0];
const imageElement = document.createElement("img")
imageElement.src = article.image;
const nomElement = document.createElement("h2")
nomElement.innerText = article.nom; 
const prixElement = document.createElement("p")
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
// TERNAIRE = if else  (mode raccourcis)
//expression a tester ? valeur si vrai : valeur si faux;
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie; 

const sectionFiches = document.querySelector(".fiches");
sectionFiches = appendChild(imageElement);
sectionFiches = appendChild(nomElement);
sectionFiches = appendChild(prixElement);
sectionFiches = appendChild(categorieElement);
 */






