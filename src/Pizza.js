import React, { useState } from 'react';
import MultiSelect from "react-multi-select-component";

const Pizza = () => {


        const options = [
          { label: "Small", value: "Small" },
          { label: "Medium", value: "Medium" },
          { label: "Large", value: "Large" },
        ];
      
        const [selected, setSelected] = useState([]);

        const [Name, setName] = useState("");


        console.log(selected)

  return (

    
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input"  onChange={e => setName(e.target.value)} type="name" name="Name" required />
                  <MultiSelect options={options} value={selected} onChange={setSelected} labelledBy={"Choose your size of Pizza"}/>
                </div>
              </div>
              <button type="submit" className="button is-block is-info is-fullwidth">Submit</button>
            </form>
               
     
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;