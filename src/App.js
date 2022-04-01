import { useState } from 'react';


function App() {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener('mousemove', (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  })

  return (
    <div className="App">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">News</a></li>
        <li><a href="">Team</a></li>
        <li><a href="">Contact</a></li>

        <div className="cursor"
          style={{
            left: cursorX + 'px',
            top: cursorY + 'px',
          }}
        > 

        </div>
      </ul>
    </div>
  );
}

export default App;
