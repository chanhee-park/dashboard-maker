import { isNumeric } from './is-numeric';

export function getJsonFromCSV(csvString: string) {
  const rows = csvString.split('\r\n');
  const jsonArray = [];
  const header = rows[0].split(',');

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i].split(',');
    const obj = row.reduce((acc, curr, index) => {
      return { ...acc, [header[index]]: isNumeric(curr) ? +curr : curr };
    }, {});

    jsonArray.push(obj);
  }

  return jsonArray;
}
