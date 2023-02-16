type OneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type ZeroToNine = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

// Year
type YYYY = `19${ZeroToNine}${ZeroToNine}` | `20${ZeroToNine}${ZeroToNine}`;

// Month
type MM = `0${OneToNine}` | `1${0 | 1 | 2}`;

// Day
type DD = `${0}${OneToNine}` | `${1 | 2}${ZeroToNine}` | `3${0 | 1}`;

// Date string type (YYYY.MM.DD)
export type RawDateString = `${YYYY}.${MM}.${DD}`;
