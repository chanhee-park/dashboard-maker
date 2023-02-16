import { DatasetAPIResponse } from '../types/dataset';
import AxiosRequest from './axios-request';

export const getAllDatasets = async (): Promise<
  DatasetAPIResponse[] | null
> => {
  const data = await AxiosRequest('get', 'datasets');
  return data;
};

export const getDatasetById = async (
  id: string
): Promise<DatasetAPIResponse | null> => {
  const data = await AxiosRequest('get', `datasets/${id}`);
  return data;
};
