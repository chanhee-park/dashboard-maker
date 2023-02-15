import { Dataset } from '../types/dataset';
import AxiosRequest from './axios-request';

export const getAllDatasets = async (): Promise<Dataset[] | null> => {
  const data = await AxiosRequest('get', 'datasets.json');
  return data;
};
