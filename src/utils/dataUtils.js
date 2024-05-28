import * as XLSX from 'xlsx';
import { INFORMATION_COMPROMISED } from './constants';


function removeDuplicateName(name) {
    const regex = /^(.+?)\1$/;
    const match = name.match(regex);
    return match ? match[1] : name;
}

export const readExcel = async (path) => {
    const response = await fetch(path);
    const arrayBuffer = await response.arrayBuffer();
    const data = new Uint8Array(arrayBuffer);
    const workbook = XLSX.read(data, { type: 'array' });

    // Assuming the first sheet is the one you want
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // Convert the sheet to JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    jsonData.forEach(row => {
        if (row["Organization Name"]) {
            row["Organization Name"] = removeDuplicateName(row["Organization Name"]);
        }
    })

    return jsonData; // Return the JSON data
};

export const getInformationItems = (inputString) => {
    const slicedArray = inputString.split(';');
    const trimmedArray = slicedArray.map(item => item.trim());
    const validValues = Object.values(INFORMATION_COMPROMISED).map(item => item.title);
    return trimmedArray.filter(item => validValues.includes(item));
}