import { useState } from "react";

const App = () => {

  const [maVariable, newMaVar] = useState(12)
  const onClick = (test) => {
    newMaVar (maVariable + 12);
  }

  let tabNum = [10, 20, 5, 55, 120]
  const findLargestNumber = () => {
    alert(Math.max(...tabNum));
  }

  let tabWord = ['Bonjour', 'Salut', 'Hello', 'Bonsoir', 'Holla']
  const sortWord = () => {
    alert(tabWord.sort());
  }
  
  let setlist = ["bsjgufovjeoihqfjobqkvjqouvqjvhvqpnvodqjkfbhjqjvsbjqcoj"]
  let caracter = 'o',
      count = 0;
  const countOccurrences = () => {
    for (let caracter of setlist) {
      if (setlist.includes.caracter) {
        count ++;
      }
      alert(count);
    }
  }

  let tabp = [1,2,3,[4,5,15,16,],20,21]
  const flattenArray = () => {
    console.log(tabp);
    console.log(tabp.flat());
  }

  let numberList = [1,1,1,1,2,3,3,5,6,6,7,8,9,9,10,11,10]
  let uniqueList = []
  const removeDupes = () => {
    let newnumberList = [...new Set(numberList)];
    alert(newnumberList);
  }

  let y = 1,
      x = 2;
  const swapVariables = () => {
    let y = x,
        x = y;
    alert("y = ".y, "x = ".x)
  }

  return (
    <>
    <p>{tabNum}</p>
    <button onClick={findLargestNumber}>Le plus grand</button>
    <p>{tabWord}</p>
    <button onClick={sortWord}>Trier les mots</button>
    <p>{setlist}</p>
    <button onClick={countOccurrences}>Afficher le nombres de "o"</button>
    <p>{tabp}</p>
    <button onClick={flattenArray}>Applatir le tableau</button>
    <p>{numberList}</p>
    <button onClick={removeDupes}>Nombre unique</button>
    <p>y = {y}, x = {x}</p>
    <button onClick={swapVariables}>Nombre unique</button>
    </>
  )
}

export default App;