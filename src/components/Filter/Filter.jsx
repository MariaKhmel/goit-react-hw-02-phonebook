import { Component } from "react";

export class Filter extends Component {

    render() {
        const { filter,handleFilterChange } = this.props;
        return (
        

      <div style={{marginTop:20}}>
            Find contacts by name
            <br/>
            <input
                name='filter'
                value={filter}
                onChange={handleFilterChange} />  
      </div>
    )
  }
}

export default Filter
