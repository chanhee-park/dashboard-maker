import { useEffect, useState } from 'react';

import { getAllDatasets } from '../api/dataset';
import PageHeader from '../components/PageHeader';
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

  const actions = [
    {
      label: 'Create',
      onClick: () => {
        console.log('create dataset');
      },
    },
  ];
  return (
    <div>
      <PageHeader
        title="Dataset List"
        description="this is description"
        actions={actions}
      />
      {datasetList.map((dataset) => (
        <div key={`${dataset.title}}`}>
          <h3>{dataset.title}</h3>
          <p>{dataset.description ?? 'no description'}</p>
          <p>{dataset.author ?? 'no author'}</p>
          <p>{dataset.csvString}</p>
        </div>
      ))}
    </div>
  );
};

export default DatasetListPage;
