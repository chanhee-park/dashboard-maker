import AxiosRequest from './axios-request'
import { Dataset }  from '../types/dataset';

export const getAllDatasets = async ():Promise<Dataset[] | null> => {
    const data = await AxiosRequest('get', 'datasets.json')
    return data
}
