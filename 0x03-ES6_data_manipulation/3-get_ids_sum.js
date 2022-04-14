export default function getStudentIdsSum(list) {
  return list.reduce((count, currentObject) => count + currentObject.id, 0);
}
