const distributeur = (entree) => {
  let change = {
    10: 0,
    5: 0,
    2: 0,
  };

  if (entree % 2 !== 0) {
    change["5"] = 1;
    entree -= 5;
  }

  change["10"] = Math.floor(entree / 10);
  change["2"] = Math.floor((entree % 10) / 2);

  return change;
};

export default distributeur;

// 5 5
// 6 2 2 2
// 7 5 2
// 8 2 2 2 2
// 9 5 2 2
// 10 10
// 11 5 2 2 2
// 12 10 2
// 13 5 2 2 2 2

// 15 10 5

// 17 10 5 2

// 19 10 5 2 2

// 23 10 5 2 2 2 2

// 25 10 10 5

// 27 10 10 5 2

// 53 10 10 10 10 5 2 2 2 2
