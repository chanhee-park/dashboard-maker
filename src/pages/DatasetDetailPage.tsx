import { useParams } from 'react-router-dom';

import { useDatasetById } from '../hooks/api/use-dataset-by-id';

const DatasetDetailPage = () => {
  const { id: datasetId } = useParams();
  if (!datasetId) {
    return <div>유효하지 않은 id 입니다.</div>;
  }

  const { data: dataset } = useDatasetById(datasetId);

  console.log(dataset);

  return (
    <div>
      <h2>Dataset</h2>
      {!dataset && <p>조회된 데이터셋이 없습니다.</p>}
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
