export function genRandomSchema(schemaObject) {

    // create a schema object to return
    const randSchema = {
        type  : '',
        media : '',
        length: '',
        struct: ''
    }

    // for each key in story schemas object
    for (let k in schemaObject) {
        // generate a math random for each item
        const randIndex = Math.floor(schemaObject[k].length * Math.random());
        // store the chosen random value in the returned object
        randSchema[k] = schemaObject[k][randIndex];
    }

    // return an object containing the 4 fields
    return randSchema;
};
