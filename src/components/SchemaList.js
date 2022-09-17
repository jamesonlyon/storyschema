import { Component } from "react";
import { genRandomSchema } from '../functions/generateSchemas.js';
import { storySchemas } from '../data/storySchemas.js';
import SchemaListItem from './SchemaListItem.js'

class SchemaList extends Component {
    constructor(props) {
        super(props);

        this.generateSchemas = this.generateSchemas.bind(this);
    }

    state = {
        schemaData: {
            item1: '',
            item2: '',
            item3: '',
            item4: ''
        }
    }

    generateSchemas(e) {
        let data = genRandomSchema(storySchemas);
        this.setState({
            schemaData: {
                item1: data.type,
                item2: data.media,
                item3: data.length,
                item4: data.struct
            }
        })
    }

    render() { 
        const data = this.state.schemaData;
        let random = genRandomSchema(storySchemas);

        return (
            <section className="schemaList">
                
                <SchemaListItem tag='type'   content={data.item1} />
                <SchemaListItem tag='media'  content={data.item2} />
                <SchemaListItem tag='length' content={data.item3} />
                <SchemaListItem tag='struct' content={data.item4} />
                <button
                    onClick={this.generateSchemas}
                    className="getSchemaBtn">
                    Generate
                </button>

            </section>
        );
    }
}
 
export default SchemaList;