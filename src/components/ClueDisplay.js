import WordInput from './WordInput';

const ClueDisplay = (props) => {
  const setLetter = (wordId,letterCords,letter) => {
    console.log('THESE ARE TEH CLUES',props.selectedClues);
    console.log('Need to set letter at', wordId, letterCords);
    const selectedClue = props.selectedClues.filter(clue => clue.id ==wordId );
    console.log('PROPS SELECTED CLUES', selectedClue[0].coordinates[letterCords]);
    selectedClue[0].coordinates[letterCords] = letter;
    props.setLetterOnWord(letter,letterCords,wordId);

  }

  const getArrayWithLetters = (itm) => {
    //HERE IT NEEDS TO MAP THE COORDINATES ARRAY
    //const inputMap = itm.coordinates.map(itm => (itm));
    
    const inputMap = Object.keys(itm.coordinates).map(key => {
      const [x, y] = key.split(',').map(Number);
      return itm.coordinates[key] || null;
    });
    console.log('THIS IS THE ITEM', itm, inputMap);
    return inputMap;
  }

  return(
    props.selectedClues
    ?<div>
      <h2>Clue</h2>
      {
        props.selectedClues.map((itm) => (
          <div key={itm.id} className="clue">
            <p>{itm.number}</p>
            <p>{itm.direction}</p>
            <p>{itm.clue}</p>
            <p>{itm.length} letters</p>
            <WordInput setLetter={setLetter} coordinates={itm.coordinates} wordId={itm.id} wordInputsWithLetters={getArrayWithLetters(itm)} />
          </div>
        ))
      }
    </div>
    :<div><p>Click on a white space above to get the clue..</p></div>
  );
}

export default ClueDisplay;