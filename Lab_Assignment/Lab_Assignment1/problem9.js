//

const sandwichCalculator = (bread, cheese) => {
    if (bread / 2 > cheese) return cheese; 
    return bread / 2;
  }
  console.log(sandwichCalculator(4,7));