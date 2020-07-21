import React, { useState } from 'react';
import MultiSelect from "react-multi-select-component";


const Pizza = (props) => {


        const options = [
          { label: "Small", value: "Small" },
          { label: "Medium", value: "Medium" },
          { label: "Large", value: "Large" },
        ];
        const toppingoptions = [
          { label: "Pineapple", value: "Pineapple" },
          { label: "Bacon Strips", value: "Bacon Strips" },
          { label: "Mushrooms", value: "Mushrooms" },
          { label: "Pepperoni", value: "Pepperoni" },

        ];
      
        const [selected, setSelected] = useState([]);

        const [Name, setName] = useState("");

        const [instructions, setIntructions] = useState("");

        const [Toppings, setToppings] = useState([]);



        const handleSubmit = event => {
            event.preventDefault();
            if (selected && Name) {
             alert(`Youre ${selected} is on its way!`);
             props.newOrder([...props.orders, { Name, selected, Toppings, instructions }]);
              resetState();
            }
        }

        const resetState = () => {
            setSelected("");
            setName("");
          };
        
         let handleName = e => {
              setName(e.target.value)
            }
        let handleinstructions = e => {
              setIntructions(e.target.value)
            }

  return (

    
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <div className="control">
                  <h3>Order Youre Pizza here!</h3>
                  <label className="label">Name</label>
                  <input className="input"  onChange={handleName} type="name" name="Name" required />
                  <MultiSelect className="input" options={options} value={selected} onChange={setSelected} labelledBy={"Choose your size of Pizza"}/>
                  <label className="label">special instructions</label>
                  <input className="input"  onChange={handleinstructions} type="name" name="instructions" required />
                  <MultiSelect className="input" options={toppingoptions} value={Toppings} onChange={setToppings} labelledBy={"Choose your toppings"}/>


                 <button type="submit" className="button is-block is-info is-fullwidth">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;