import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <form>
      <label id={"buttonLabel"}>Click the button</label>
      <button aria-labelledby={"buttonLabel"}>Submit</button>
    </form>
  );
};

export default App;
