import React from "react";

function Item(props){

    
    return(

        <>
        <li class="list-group-item"><i className="fas fa-trash"
         onClick={
             ()=>{props.del(props.id)}
            }
          ></i>  {props.text}</li>
        </>

    );
}
export default Item;