export default function iterateThroughObject(reportWithIterator) {
  let itr = 1;
  const employeeArr = [];
  for (itr of reportWithIterator) {
    employeeArr.push(itr);
  }
  return employeeArr.join(' | ');
}
