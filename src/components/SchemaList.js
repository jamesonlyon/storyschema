import { Component } from "react";
import { genRandomSchema } from '../functions/generateSchemas.js';
import { storySchemas } from '../data/storySchemas.js';

class SchemaList extends Component {
    constructor(props) {
        super(props);
    }

    state = {  }

    render() { 
        return (
            <section className="schemaList">
                SchemaList component mounted here...
            </section>
        );
    }
}
 
export default SchemaList;