const WordInput = (props) => {
  const handleInput = (evt,idx) => {
    console.log('PROPS', props);
    const coordinateKeys = Object.keys(props.coordinates);

    console.log('Value has been input', evt.target.value, coordinateKeys[idx]);
    props.setLetter(props.wordId,coordinateKeys[idx],evt.target.value);
  } 

  return (
    props.wordInputs.map( (itm,idx) => (
      <input maxLength="1" onInput={(evt) => handleInput(evt,idx)} key={idx} type="txt"></input>
    ))
  );
}

export default WordInput;