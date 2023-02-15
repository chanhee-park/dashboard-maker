import { Dataset } from '../types/dataset';
import AxiosRequest from './axios-request';

export const getAllDatasets = async (): Promise<Dataset[] | null> => {
  const data = await AxiosRequest('get', 'datasets');
  return data;
};

export const getDatasetById = async (id: string): Promise<Dataset | null> => {
  const data = await AxiosRequest('get', `datasets/${id}`);
  return data;
};
