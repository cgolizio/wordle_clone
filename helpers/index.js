export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

// export const getCorrectWord = (...args) => {

// };

export const fetcher = (...args) => fetch(...args).then((res) => res.json());
