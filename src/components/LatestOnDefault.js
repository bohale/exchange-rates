import React, { Component } from 'react'; 

class LatestOnDefault extends Component {
    render() {
        return(
            <div>  
                <form> 
                  <input type="text" id="base"></input>
                  <select id="currencies">
                      <option value="ZAR">ZAR</option>
                      <option value="CHF">CHF</option> 
                  </select>
                  <br/>
                  <input type="text" id="result"></input>
                  <select id="currencies">
                      <option value="GBP">GBP</option>
                      <option value="USD">USD</option> 
                  </select>
                  <br/>
                  <input type="submit" value="Submit"></input>
                </form>
            
            </div>
        )
    }
}

export default LatestOnDefault; 