import { Component } from "react";

class SchemaListItem extends Component {
    render() { 
        return (
            <div className="schemaListItem">
                {this.props.content ? this.props.content : 'generate to fill'}
            </div>
        );
    }
}
 
export default SchemaListItem;