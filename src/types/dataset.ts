import { RawDateString } from './date-string';

interface Dataset {
  title: string;
  description?: string;
  author?: string;
  csvString: string;
  information: {
    numberOfColumns: number;
    numberOfRows: number;
    createdAt: RawDateString;
  };
}

export type { Dataset };
