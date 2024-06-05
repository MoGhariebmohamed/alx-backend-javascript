export default function concatArrays(array1, array2, string) {
  const concatArry = [...array1, ...array2, ...string];
  return concatArry;
}
