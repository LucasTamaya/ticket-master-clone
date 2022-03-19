const getLocationType = (location) => {
  let parameter;

  // si la location est un nombre
  if (!isNaN(location)) {
    parameter = `postalCode=${location}`;
  }

  // si la location est une string
  if (isNaN(location)) {
    // si la location à une longueur de 2, on utilise la parameter countryCode
    if (location.length === 2) {
      parameter = `countryCode=${location.toUpperCase()}`; //met tout en majuscule
      //   sinon on utilise le parameter city
    } else {
      parameter = `city=${
        location.charAt(0).toUpperCase() + location.slice(1).toLowerCase()
      }`; //met la première lettre en majuscule et les autres en minuscules
    }
  }

  return parameter;
};

export default getLocationType;
