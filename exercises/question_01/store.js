const storeData = (data) => {
    let array = [];
    let string, result;

    data.map((i, index) => {
        string = JSON.stringify(data[index]);
        string = string.replace(',', ';').replace(/:/g, '=').replace(/([\,\"\{\}])/g, '');
        array.push(string);
    });

    array.push('');
    result = array.join('\n');
    return result;
}

export default storeData