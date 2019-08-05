import React from 'react';
import './App.css';

interface Props {
  title: string
}

const App: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello {props.title}
        </p>
      </header>
    </div>
  );
}

export default App;
