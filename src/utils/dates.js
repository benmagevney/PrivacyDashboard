
const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
};

const convertExcelDateToJSDate = (excelDate) => {
    // Excel dates start from January 1, 1900
    const excelEpoch = new Date(1900, 0, 1);
    // Add the number of days (subtracting 1 because Excel date system includes a non-existent leap year)
    const jsDate = new Date(excelEpoch.getTime() + (excelDate - 1) * 24 * 60 * 60 * 1000);
    return jsDate;
};

export const convertExcelDateToDateString = (excelDate) => {
    const jsDate = convertExcelDateToJSDate(excelDate);
    return formatDate(jsDate);
}

export const getDifferenceInDays = (excelDate1, excelDate2) => {
    const date1 = convertExcelDateToJSDate(excelDate1);
    const date2 = convertExcelDateToJSDate(excelDate2);

    // Get the difference in time (milliseconds)
    const diffTime = Math.abs(date2 - date1);

    // Convert milliseconds to days
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
};
