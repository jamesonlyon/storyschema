const storySchemas = {
    type: ['chaotic romp', 'poetic', 'reeves', 'dramatic'],
    media: ['film', 'article', 'song'],
    length: ['60 seconds', '300 words', '5 seconds'],
    struct: ['heroes journey', 'now-then-now']
};

function generateSchemas() {

    // create a schema object to return
    const randSchema = {
        type  : '',
        media : '',
        length: '',
        struct: ''
    }

    // for each key in story schemas object
    for (let k in storySchemas) {
        // generate a math random for each item
        const randIndex = Math.floor(storySchemas[k].length * Math.random());
        // store the chosen random value in the returned object
        randSchema[k] = storySchemas[k][randIndex];
    }

    // return an object containing the 4 fields
    return randSchema;
};

generateSchemas();