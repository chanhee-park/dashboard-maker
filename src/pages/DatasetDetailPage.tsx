import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getDatasetById } from '../api/dataset';
import { Dataset } from '../types/dataset';

export async function loader({ datasetId }: { datasetId: string }) {
  const dataset = await getDatasetById(datasetId);
  return { dataset };
}

const DatasetDetailPage = () => {
  const [dataset, setDataset] = useState<Dataset>();
  const { id: datasetId } = useParams();

  useEffect(() => {
    void fetchAllDatasets();
  }, []);

  const fetchAllDatasets = async () => {
    if (datasetId) {
      const nextDataset = await getDatasetById(datasetId);
      if (nextDataset) {
        setDataset(nextDataset);
      }
    }
  };

  return (
    <div>
      <h2>Dataset</h2>
      {!dataset && <p>조회된 데이터가 없습니다.</p>}
      {dataset && (
        <div key={`${dataset.title}}`}>
          <h3>{dataset.title}</h3>
          <p>{dataset.description ?? 'no description'}</p>
          <p>{dataset.csvString}</p>
        </div>
      )}
    </div>
  );
};

export default DatasetDetailPage;
