const WordInput = (props) => {
  const handleInput = (evt,idx) => {
    console.log('PROPS', props);
    const coordinateKeys = Object.keys(props.coordinates);

    console.log('Value has been input', evt.target.value, coordinateKeys[idx]);
    props.setLetter(props.wordId,coordinateKeys[idx],evt.target.value);
  } 

  return (
    <div className="word-input">
      {
        props.wordInputsWithLetters.map( (itm,idx) => (
          <input maxLength="1" onInput={(evt) => handleInput(evt,idx)} key={idx} type="txt" value={itm}></input>
        ))
      }
    </div>

  );
}

export default WordInput;