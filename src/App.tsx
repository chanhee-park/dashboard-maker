import { useEffect, useState } from 'react';
import { getAllDatasets } from './api/dataset';
import { Dataset }  from './types/dataset';

function App() {
  const [datasets, setDatasets] = useState<Dataset[]>([]);

  useEffect(() => { 
    fetchAllDatasets()
  }, []);


  const fetchAllDatasets = async () => {
    const nextDatasets = await getAllDatasets();
    if(nextDatasets) {
      setDatasets(nextDatasets);
    }
  }

  return (
    <div className="App">
      <h1>Dashboard Maker</h1>
      <div>
        {datasets.map((dataset, index) => (   
          <div key={`${dataset.title}-${index}`}>
            <h2>{dataset.title}</h2>
            <p>{dataset.description || 'no description'}</p>
            <p>{dataset.csvString}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default App;