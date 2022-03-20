// fonction afin de récupérer l'index max dans l'url de l'api

const getMaxIndex = (links) => {
  if (!links) {
    return;
  }

  // récupère le dernier lien
  const lastLinks = links.last.href;

  //   récupère l'index où commence 'page='
  const pageIndex = links.last.href.indexOf("page=");

  //   tranche la string, afin d'utiliser uniquement la partie qui nous intéresse (la fin de la string ici)
  const slice = lastLinks.slice(pageIndex + 5, lastLinks.length);

  //   variable qui va contenir le resultat final
  let maxIndex = "";

  for (let i = 0; i < slice.length; i++) {
    //   si c'est un nombre, on l'ajoute au maxIndex
    if (!isNaN(slice[i])) {
      maxIndex += slice[i];
    }
    // si ce n'est pas un nombre on arrête tout et on retourne maxIndex
    if (isNaN(slice[i])) {
      break;
    }
  }

  return maxIndex;
};

export default getMaxIndex;
