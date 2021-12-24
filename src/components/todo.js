import React, { useEffect, useState } from "react";
import Item from "../item";
import "./todo.css";


function Todo() {

   //get data from localstorage / remain data
   const getItems =()=>{
    let list = localStorage.getItem('ListsItem');
     if(list){
       return JSON.parse(localStorage.getItem('ListsItem'))
     } 
     else{
       return [];
     }
  } 

  //State variables stores the value inputonChange and listItems respectively
  const [inputs, setinputs] = useState("");
  const [items, setitems] = useState(getItems());


//items can be saved in the list
  const itemsgo = () => {
    setitems((olditems) => { return [...olditems, inputs] })
    setinputs("");
  }

  //delete items with the help of ids
  const delItems = (id) => {
    setitems(
      (olditems)=>{ return olditems.filter((currdata,index)=>{return index !== id ;}) }
    )
  }

  //add data to localstorage
  useEffect(
    ()=>{
      localStorage.setItem('ListsItem',JSON.stringify(items))},[items]
      );

    

  return (
    <div>
      <div className="maindiv">
        <div className="subdiv" >
          <p class="h1"> TODO  LIST </p>
          <div class="mb-3 mt-5">
            <input type="email"
              className="form-control input"
              id="exampleFormControlInput1"
              placeholder="Add Items here!"
              value={inputs}
              onChange={(e) => { setinputs(e.target.value) }} />
            <button
              className="btn btn-primary button" type="submit"
              onClick={itemsgo}><i className="fas fa-plus" > </i></button>
          </div>

          <div className="list">
            <ul class="list-group list-group-flush ">
              {items.map((itemval , index) => {
                return (
                  <Item 
                  // key={index}
                  id={index}
                  text={itemval} 
                  del={delItems}
                  />

                )
              }
              )}
            </ul>
          </div>



        </div>

      </div>
    </div>
  );
}

export default Todo;