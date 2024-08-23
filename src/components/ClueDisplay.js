import WordInput from './WordInput';

const ClueDisplay = (props) => {
  const setLetter = (wordId,letterCords,letter) => {
    console.log('Need to set letter at', wordId, letterCords);
    props.setLetterOnWord(letter,letterCords,wordId);

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
            <p>{itm.length} letters {itm.coordinates}</p>
            <WordInput setLetter={setLetter} coordinates={itm.coordinates} wordId={itm.id} wordInputs={Array.from({length:itm.length})} />
          </div>
        ))
      }
    </div>
    :<div><p>Click on a white space above to get the clue..</p></div>
  );
}

export default ClueDisplay;