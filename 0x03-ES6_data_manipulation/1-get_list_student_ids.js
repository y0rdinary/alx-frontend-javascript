import getListStudents from "./0-get_list_students";
export default function getListStudentIds(getListStudents) {
    return getListStudents.map(getListStudentIds(id, index, getListStudents), )
}