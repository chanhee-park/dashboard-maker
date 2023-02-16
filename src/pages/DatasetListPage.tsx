import Stack from '@mui/material/Stack';

import DatasetCard from '../components/DatasetCard';
import PageHeader from '../components/PageHeader';
import { useAllDatasets } from '../hooks/api/use-all-datasets';

const DatasetListPage = () => {
  const { data: datasetList } = useAllDatasets();
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
      <Stack spacing={4} direction="row">
        {datasetList &&
          datasetList.map((dataset) => (
            <DatasetCard key={`${dataset.title}}`} dataset={dataset} />
          ))}
      </Stack>
    </div>
  );
};

export default DatasetListPage;
