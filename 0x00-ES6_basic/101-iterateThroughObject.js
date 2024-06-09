export default function iterateThroughObject(reportWithIterator) {
  const itr = 1,
  employeeArr = [];
    for (itr of reportWithIterator) {
    employeeArr.push(itr)
  }
  return employeeArr.join(' | ')
}
