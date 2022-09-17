import { Component } from "react";
import { genRandomSchema } from '../functions/generateSchemas.js';
import { storySchemas } from '../data/storySchemas.js';
import SchemaListItem from './SchemaListItem.js'

class SchemaList extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        item1: '',
        item2: 'generate to fill',
        item3: 'generate to fill',
        item4: 'generate to fill'
    }

    render() { 
        return (
            <section className="schemaList">
                SchemaList component mounted here...
                <SchemaListItem content={this.state.item1} />
            </section>
        );
    }
}
 
export default SchemaList;