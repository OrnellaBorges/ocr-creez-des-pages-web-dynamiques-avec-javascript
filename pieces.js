// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

for(let i = 0; i < pieces.length; i++) {
    // Creation des balises :
    const articleElement = document.createElement("article");
    const article = pieces[i];
    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;
    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description ?? "Pas de description pour le moment?";
    const disponibiliteElement = document.createElement("p");
    disponibiliteElement.innerText = article.disponibilite === true ? "En stock" : "En rupture";

    // Selection de la balise .fiches
    const sectionFiches = document.querySelector(".fiches");

    // Rattachements :
    sectionFiches.appendChild(articleElement);
    articleElement.appendChild(imageElement);
    articleElement.appendChild(nomElement);
    articleElement.appendChild(prixElement);
    articleElement.appendChild(categorieElement);
    articleElement.appendChild(descriptionElement);
    articleElement.appendChild(disponibiliteElement);
}
