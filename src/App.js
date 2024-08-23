import './App.css';
import { useEffect, useState } from 'react';
import { getCrossword } from './network/apiactions';
import Crossword from './components/Crossword';
import ClueDisplay from './components/ClueDisplay';

function App() {
  const [usedSquares,setUsedSquares] = useState(null);
  const [words,setWords] = useState(null);
  const [selectedClues, setSelectedClues] = useState(null);

  useEffect(() => {
    getCrossword().then((data) => {
      //Build object with coordinates lookup
      const coordinates = {};
      //Build object with word lookup
      const words = {};
      //Construct the coordinates object, first down and then accross
      const wordCoordinates = [];
      for(let item of data['down']) {
        //console.log(item);
        //Word object

        for(let coordinate of item['coordinates']) {
          let coordinateObj = {
            wordId : item['id'],
            coordinates : [coordinate[1], coordinate[0]],
            letter : null,
          }
          if(coordinates[`${coordinate[1]},${coordinate[0]}`]) {
            coordinates[`${coordinate[1]},${coordinate[0]}`] = [...coordinates[`${coordinate[1]},${coordinate[0]}`],  coordinateObj];
          } else {
            coordinates[`${coordinate[1]},${coordinate[0]}`] = [coordinateObj];
          }
          wordCoordinates[`${coordinate[1]},${coordinate[0]}`] = null;
        }
        //coordinates = [...coordinates,item['coordinates']]
        const wordObj = {
          "id" : item['id'],
          "clue" : item['clue'],
          "direction" : "down",
          "length" : item['coordinates'].length,
          "number" : item['number'],
          "coordinates" : wordCoordinates,
        }
        words[item['id']] = wordObj;
      }
      for(let item of data['across']) {
        //console.log(item);
        const wordCoordinates = [];
        for(let coordinate of item['coordinates']) {
          let coordinateObj = {
            wordId : item['id'],
            coordinates : coordinate,
            letter : null,
          }
          if(coordinates[`${coordinate[1]},${coordinate[0]}`]) {
            coordinates[`${coordinate[1]},${coordinate[0]}`] = [...coordinates[`${coordinate[1]},${coordinate[0]}`],  coordinateObj];
          } else {
            coordinates[`${coordinate[1]},${coordinate[0]}`] = [coordinateObj];
          }
          wordCoordinates[`${coordinate[1]},${coordinate[0]}`] = null;
        }
        //Word object
        const wordObj = {
          "id" : item['id'],
          "clue" : item['clue'],
          "direction" : "across",
          "length" : item['coordinates'].length,
          "number" : item['number'],
          "coordinates" : wordCoordinates,
        }
        words[item['id']] = wordObj;
        //coordinates = [...coordinates,item['coordinates']]
      }
      setUsedSquares(coordinates);
      setWords(words);
    });
  },[]);

  const setClueFromWord = (wordIds) => {
    let clues = [];
    for(let id of wordIds) {
      clues = [...clues,words[id]];
    }
    setSelectedClues(clues);
    console.log('SELECTED CLUE', selectedClues,clues, wordIds);
  }

  const setLetterOnWord = (letter,coords,wordId) => {
    console.log('SETTING LETTER AT', letter,coords, usedSquares[coords]);

    //const wordToSet = usedSquares[coords].filter(el => el.wordId == wordId);
    usedSquares[coords].map(itm => (itm.letter=letter));
    const newUsedSquares = {...usedSquares};
    //wordToSet.letter=letter;
    console.log('THE WORD IS NOW', newUsedSquares);
    setUsedSquares(newUsedSquares);
  }

  return (
    <div className="App">
      <Crossword  usedSquares={usedSquares} setSelectedClue={setClueFromWord} />
      <ClueDisplay setLetterOnWord={setLetterOnWord} selectedClues={selectedClues} />
    </div>
  );
}

export default App;
