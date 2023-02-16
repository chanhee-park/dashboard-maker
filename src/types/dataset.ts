import { RawDateString } from './date-string';

type DatumObject = {
  [x: string]: string | number;
};

export interface DatasetAPIResponse {
  csvString: string;
  title: string;
  id: string;
  description?: string;
  author?: string;
  createdAt?: RawDateString;
}

export interface Dataset extends DatasetAPIResponse {
  data: DatumObject[];
}
