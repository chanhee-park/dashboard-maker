import { useQuery } from '@tanstack/react-query';

import { getDatasetById } from '../../api/dataset';
import { Dataset, DatasetAPIResponse } from '../../types/dataset';
import { getJsonFromCSV } from '../../utils/get-json-from-csv';

const useDatasetById = (id: string) => {
  const queryKey = ['dataset', id];
  const queryFn = async () => {
    const response = await getDatasetById(id);
    if (!response) {
      throw new Error('서버에서 데이터셋을 조회해 오는데 실패했습니다.');
    }
    return response as DatasetAPIResponse;
  };
  const options = {
    staleTime: Infinity,
    cacheTime: Infinity,
    select: (dataset: DatasetAPIResponse) => {
      return {
        ...dataset,
        data: getJsonFromCSV(dataset.csvString),
      } as Dataset;
    },
  };
  return useQuery(queryKey, queryFn, options);
};

export { useDatasetById };
