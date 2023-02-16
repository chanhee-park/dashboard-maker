import { useQuery } from '@tanstack/react-query';

import { getAllDatasets } from '../../api/dataset';
import { Dataset, DatasetAPIResponse } from '../../types/dataset';
import { getJsonFromCSV } from '../../utils/get-json-from-csv';

const useAllDatasets = () => {
  const queryKey = ['datasets'];
  const queryFn = async () => {
    const response = await getAllDatasets();
    if (!response) {
      throw new Error('서버에서 데이터셋 목록을 조회해 오는데 실패했습니다.');
    }
    return response as DatasetAPIResponse[];
  };
  const options = {
    staleTime: Infinity,
    cacheTime: Infinity,
    select: (datasets: DatasetAPIResponse[]) => {
      console.log(datasets);
      return datasets.map((dataset) => {
        return {
          ...dataset,
          data: getJsonFromCSV(dataset.csvString),
        } as Dataset;
      });
    },
  };

  return useQuery(queryKey, queryFn, options);
};

export { useAllDatasets };
