// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

function genererPieces(pieces){
    for (let i = 0; i < pieces.length; i++) {
        const article = pieces[i];
        // Récupération de l'élément du DOM qui accueillera les fiches
        const sectionFiches = document.querySelector(".fiches");
        // Création d’une balise dédiée à une pièce automobile
        const pieceElement = document.createElement("article");
        // Création des balises 
        const imageElement = document.createElement("img");
        imageElement.src = article.image;
        const nomElement = document.createElement("h2");
        nomElement.innerText = article.nom;
        const prixElement = document.createElement("p");
        prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
        const categorieElement = document.createElement("p");
        categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
        const stockElement = document.createElement("p");
        stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";
        
        // On rattache la balise article a la section Fiches
        sectionFiches.appendChild(pieceElement);
        // On rattache l’image à pieceElement (la balise article)
        pieceElement.appendChild(imageElement);
        pieceElement.appendChild(nomElement);
        pieceElement.appendChild(prixElement);
        pieceElement.appendChild(categorieElement);
        //Ajout des éléments au DOM pour l'exercice
        pieceElement.appendChild(descriptionElement);
        pieceElement.appendChild(stockElement);
    
    }
}

// affichage de la page grace à la fonction genererPieces
genererPieces(pieces);



 //gestion des boutons 
const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
    });
    // EFFACE ECRAN ET GENERER NOUVELLE PAGE AVEC LES PIECES filtrée par Prix croissant
    document.querySelector('.fiches').innerHTML = ''
    genererPieces(piecesOrdonnees)
});




const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });
    // EFFACE ECRAN ET GENERER NOUVELLE PAGE AVEC LES PIECES TRIEES < 35€
    document.querySelector('.fiches').innerHTML = ''
    genererPieces(piecesFiltrees)
});


 
const boutonDecroissant = document.querySelector(".btn-decroissant");
boutonDecroissant.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return b.prix - a.prix;
    });
    // EFFACE ECRAN ET GENERER NOUVELLE PAGE AVEC LES PIECES TRIEES < 35€
    document.querySelector('.fiches').innerHTML = ''
    genererPieces(piecesOrdonnees)
});

const boutonNoDescription = document.querySelector(".btn-nodesc");
boutonNoDescription.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.description;
    });
    // EFFACE ECRAN ET GENERER NOUVELLE PAGE AVEC LES PIECES TRIEES < 35€
    document.querySelector('.fiches').innerHTML = ''
    genererPieces(piecesFiltrees)
});



const noms = pieces.map(piece => piece.nom);
for(let i = pieces.length -1 ; i >= 0; i--){
    if(pieces[i].prix > 35){
        noms.splice(i,1);
    }
}
// EFFACE ECRAN ET GENERER NOUVELLE PAGE AVEC LES PIECES TRIEES < 35€
//document.querySelector('.fiches').innerHTML = ''
//genererPieces(pieces)


//Création de la liste
const abordablesElements = document.createElement('ul');
//Ajout de chaque nom à la liste
for(let i=0; i < noms.length; i++){
    const nomElement = document.createElement('li');
    nomElement.innerText = noms[i];
    abordablesElements.appendChild(nomElement)
}

// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector('.abordables').appendChild(abordablesElements)




        // VERSION SANS .filter
    // for(let i = pieces.length - 1; i >= 0; i--) {
    //     if(pieces[i].disponibilite === false) {
    //         descriptions.splice(i,1)
    //     }
    //     else{
    //         const li = document.createElement("li")

            // Version classique :
            //if(descriptions[i]) {
            //     li.innerText = descriptions[i]
            // }
            // else {
            //     li.innerText = "Aucune description pour le moment"
            // }

            // VERSION TERNAIRE
           // li.innerText = descriptions[i] ? descriptions[i] : "Aucune description"

            // VERSION NULLISH

            //li.innerText = descriptions[i] ?? "Aucune description"

            //ul.appendChild(li)
        //}
    //}

    // VERSION AVEC LA METHODE FILTER
    // Filter raccourci
    //const filtrePiecesDisponibles = pieces.filter(piece => piece.disponibilite ? true : false)
    // Filter détaillé
    // const filtrePiecesDisponibles = pieces.filter(function(piece){
    //     return piece.disponibilite === true;
    // })

    // for(let i = 0; i < filtrePiecesDisponibles.length; i++){
    //     const description = filtrePiecesDisponibles[i].description
    //     const prix = pieces[i].prix
    //     const li = document.createElement("li");
    //     li.innerText = description ? `${description} - ${prix} €` : `Aucune description pour le moment - ${prix} €`;
    //     ul.appendChild(li)
    // }


const nomsDisponibles = pieces.map(piece => piece.nom)
const prixDisponibles = pieces.map(piece => piece.prix)

// boucle pour parcourir le tableau des pièces disponibles
// tableau d'origine 

for(let i = pieces.length - 1; i >= 0; i--){
    if(pieces[i].disponibilite === false){
        nomsDisponibles.splice(i,1)
        prixDisponibles.splice(i,1)
    }
}

const disponiblesElement = document.createElement('ul')

// boucle qui créer la liste et ratache a son parent
for(let i = 0; i < nomsDisponibles.length; i++){
    const nomElement = document.createElement('li');
    nomElement.innerText = `${nomsDisponibles[i]} - ${prixDisponibles[i]} €`
    disponiblesElement.appendChild(nomElement)
}

// .querySelector('') selectionne la balise avec la class dans le dom 
document.querySelector('.disponibles').appendChild(disponiblesElement);
// appenChild = insere un élément dans la balise du dom créé précédement



// const dispo = document.querySelector('.disponibles')
// const disponibleElements = document.createElement("ul")
// const dispo.appendChild(disponibleElements)

// for(let i = 0; i < nomsDisponibles.length; i++){
//     const nomElement = document.createElement('li');
//     nomElement.innerText = `${nomsDisponibles[i]} - ${prixDisponibles[i]} €`
//     disponiblesElement.appendChild(nomElement)
// }

// efface le contenu de la balise body grace au innerHTML = '' la chaine de caratère vide permet d'effacer le contenu de la balise .fiches
//const eraseDom = document.querySelector('.fiches').innerHTML ='';
