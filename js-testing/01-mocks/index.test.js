const { rejects, deepStrictEqual } = require('assert');
const { error } = require('./src/constants');
const File = require('./src/file');

(async () => {
  {  
    const filePath = './mocks/emptyFile-invalid.csv';
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }
  {
    const filePath = './mocks/fourItens-invalid.csv'
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }
  {
    const filePath = './mocks/threeItens-valid.csv'    

    const expected = [
      {
        "id": 123,
        "name": "Victor",
        "profession": "javascript",
        "birthYear": 1998
      },
      {
        "id": 222,
        "name": "Marcos",
        "profession": "java",
        "birthYear": 2002
      },
      {
        "id": 221,
        "name": "Marcos",
        "profession": "java",
        "birthYear": 2002
      }
    ]
    const result = await File.csvToJson(filePath).then((file) => file);
    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
  }
})();

