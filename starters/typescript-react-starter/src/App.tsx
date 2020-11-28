import React from 'react';
import ComponentExample from "./ComponentExample";

interface IProps {
  className?: string;
  id?: string;
}

function App({className, id}: IProps) {
  return (
    <React.StrictMode>
      <div className={className} id={id}>
        <ComponentExample/>
      </div>
    </React.StrictMode>
  );
}

export default App;
