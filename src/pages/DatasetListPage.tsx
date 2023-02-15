import { useEffect, useState } from 'react';

import { getAllDatasets } from '../api/dataset';
import { Dataset } from '../types/dataset';

const DatasetListPage = () => {
  const [datasetList, setDatasetList] = useState<Dataset[]>([]);

  useEffect(() => {
    void fetchAllDatasets();
  }, []);

  const fetchAllDatasets = async () => {
    const nextDatasetList = await getAllDatasets();
    if (nextDatasetList) {
      setDatasetList(nextDatasetList);
    }
  };

  return (
    <div>
      <h2>Dataset List</h2>
      {datasetList.map((dataset) => (
        <div key={`${dataset.title}}`}>
          <h3>{dataset.title}</h3>
          <p>{dataset.description ?? 'no description'}</p>
          <p>{dataset.csvString}</p>
        </div>
      ))}
    </div>
  );
};

export default DatasetListPage;
