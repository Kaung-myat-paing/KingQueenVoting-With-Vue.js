import axios from '../axios/index'
import MockAdapter from 'axios-mock-adapter'

var mock = new MockAdapter(axios);

export const sampleApi = {
    getStudentList,
    getStudentByRollno
};
var studentList = [
    { rollno: "1CS-1", name: "Kaung Myat " },
    { rollno: "1CS-2", name: "Kaung Myat " },
    { rollno: "1CS-3", name: "Kaung Myat " },
    { rollno: "1CS-4", name: "Kaung Myat " },
    { rollno: "1CS-5", name: "Kaung Myat " },
    { rollno: "1CS-6", name: "Kaung Myat " },
    { rollno: "1CS-7", name: "Kaung Myat " },
    { rollno: "1CS-8", name: "Kaung Myat " },
    { rollno: "1CS-9", name: "Kaung Myat " },
    { rollno: "1CS-10", name: "Kaung Myat " },
    { rollno: "1CS-11", name: "Kaung Myat " },
    { rollno: "1CS-12", name: "Kaung Myat " },
    { rollno: "1CS-13", name: "Kaung Myat " },
    { rollno: "1CS-14", name: "Kaung Myat " },
    { rollno: "1CS-15", name: "Kaung Myat " },
    { rollno: "1CS-16", name: "Kaung Myat " },
    { rollno: "1CS-17", name: "Kaung Myat " },
    { rollno: "1CS-18", name: "Kaung Myat " },
    { rollno: "1CS-19", name: "Kaung Myat " },
    { rollno: "1CS-20", name: "Kaung Myat " },
    { rollno: "1CS-21", name: "Kaung Myat " },
    { rollno: "1CS-22", name: "Kaung Myat " },
    { rollno: "1CS-23", name: "Kaung Myat " },
    { rollno: "1CS-24", name: "Kaung Myat " },
    { rollno: "1CS-25", name: "Kaung Myat " },
    { rollno: "1CS-26", name: "Kaung Myat " },
    { rollno: "1CS-27", name: "Kaung Myat " },
    { rollno: "1CS-28", name: "Kaung Myat " },
    { rollno: "1CS-29", name: "Kaung Myat " },
    { rollno: "1CS-30", name: "Kaung Myat " },
    { rollno: "1CS-31", name: "Kaung Myat " },
    { rollno: "1CS-32", name: "Kaung Myat " },
    { rollno: "1CS-33", name: "Kaung Myat " },
    { rollno: "1CS-34", name: "Kaung Myat " },
    { rollno: "1CS-35", name: "Kaung Myat " },
    { rollno: "1CS-36", name: "Kaung Myat " },
]
mock.onGet('/students').reply(200,
    studentList
);


mock.onGet('/student', { params: { rollno: '1CS-1'} }).reply(200, { rollno: "1CS-1" , name: "Hein Htet" });









function getStudentList() {
    return axios.get('/students');
}

function getStudentByRollno(rollno) {
    return axios.get('/student', { params: { rollno: rollno } })
}