import { useState, useEffect } from 'react';

import fetchData from './data';
import Tree from './components/Tree';
import './App.css';

function App() {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    fetchData().then(result => setData(result));
  });

  return (
    <Tree data={data} />
  );
}

export default App;
