import React from 'react';
import Button from './components/Button/Button';
import Logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="componentWrapper">
      <p>Primary Button Example</p>
      <Button
        type="primary"
        value="submit"
        onClick={() => {
          alert('Primary Button Clicked!');
        }}
        icon={Logo}
      >
        Submit
      </Button>
      <p>Secondary Button Example</p>
      <Button
        type="secondary"
        value="submit"
        onClick={() => {
          alert('Secondary Button Clicked!');
        }}
      >
        Submit
      </Button>
      <p>Secondary Button Example with Custom Styles</p>
      <Button
        classname="buttonStyles"
        type="secondary"
        value="submit"
        onClick={() => {
          alert('Secondary Button with custom styles Clicked!');
        }}
      >
        Submit
      </Button>
    </div>
  );
}

export default App;
