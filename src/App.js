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
    y = [x, x = y][0];
    alert("y : "+y+" , x : "+x);
  }

  let objet = {a: 1, b: 2, c: 3}
  const parseObject = () => {
    alert([...Object.values(objet)]);
  }

  let objet1 = {a: 1, b: 2, c: 3}
  let objet2 = {d: 4, e: 5, f: 6}
  const mergeObjects = () => {
    console.log({...objet1, ...objet2})
  }

  let sumTab = [1, 2, 3, 4]
  let sum = 0;
  const sumArray = () => {
    for (let i = 0; i < sumTab.length; i++) {
      sum += sumTab[i];
    }
    alert(sum)
  }

  let object = {b: 2, a: 1, c: 3}
  const sortObjet = () => {
    console.log(...Object.values(object));
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
    <button onClick={swapVariables}>Interchangé les valeurs</button><br></br><br></br>
    <button onClick={parseObject}>Propriété de l'objet</button><br></br><br></br>
    <button onClick={mergeObjects}>Créer un nouvel objet</button>
    <p>{sumTab}</p>
    <button onClick={sumArray}>Additioner les nombres</button><br></br><br></br>
    <button onClick={sortObjet}>Propriété par ordre alphabétique</button>
    </>
  )
}

export default App;