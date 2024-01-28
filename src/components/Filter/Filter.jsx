import { Component } from "react";

export class Filter extends Component {

    render() {
        const { filter,handleFilterChange } = this.props;
        return (
        

          <div style={{ marginTop: 20 }}>
            <p style={{paddingBottom:'5px'}}>
                Find contacts by name
            </p>
            {/* <br/> */}
            <input
                name='filter'
                value={filter}
                onChange={handleFilterChange} />  
      </div>
    )
  }
}

export default Filter
