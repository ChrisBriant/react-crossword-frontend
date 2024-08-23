import { useEffect,useRef } from "react";

const Crossword = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if(props.usedSquares) {
      console.log('USED SQUARES', props.usedSquares);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
  
      const gridSize = 32;
      const canvasWidth = gridSize * 32;
      const canvasHeight = gridSize * 32;
  
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
  
      // Function to draw a square
      const drawSquare = (x, y, color) => {
        ctx.fillStyle = color;
        ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize);
      };

      // Function to draw a letter on top of a square
      const drawLetter = (x, y, letter, fontSize, fontColor) => {
        ctx.font = fontSize + "px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = fontColor;
        ctx.fillText(letter, x * gridSize + gridSize / 2, y * gridSize + gridSize / 2);
      };
        
      // Clear the canvas
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  
      // Draw the grid
      for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
          let color = 'black';
          let letter = null;
          if(props.usedSquares[`${x},${y}`]) {
            color = 'white';
            letter = props.usedSquares[`${x},${y}`][0].letter;
            //console.log('LETTER', props.usedSquares[`${x},${y}`]);
            //const color = props.usedSquares[`${x},${y}`] ? 'white' : 'black';
          }
          
          drawSquare(x, y, color);
          if(letter) {
            drawLetter(x, y,letter,20,'black');
            console.log('THERE IS A LETTER', letter);
          }
        }
      }
  
      //Get the click position
      canvas.addEventListener('click', (event) => {
        const rect = canvas.getBoundingClientRect();
        const x = Math.floor((event.clientX - rect.left) / gridSize);
        const y = Math.floor((event.clientY - rect.top) / gridSize);   
        //console.log("Clicked",x,y );
        //const selectedWord = props.usedSquares[`${x},${y}`] || null;
        if(props.usedSquares[`${x},${y}`]) {
          console.log('You have clicked on', props.usedSquares[`${x},${y}`]);
          props.setSelectedClue(props.usedSquares[`${x},${y}`].map( itm => itm.wordId));
        }
      });
    }

  }, [props.usedSquares]);

  return(
    props.usedSquares
      ? <div>
          <p>Crossword goes here</p>
          <canvas ref={canvasRef} />
      </div>
      : <div><p>Loading...</p></div> 
  );
}

export default Crossword;