import {useState} from 'react';
function useCouter(){
    let [couter,setChangeCouter] = useState(0); 
    function changeCouter(param){
        if(param == '+'){
            setChangeCouter(couter +1);
        }else {
            setChangeCouter(couter-1);
        }
    }
    return(
         <div> 
            <h1 className = "text-primary">{couter}</h1> <br/>
            <button className = "btn btn-success me-3" onClick = {() => changeCouter('+')} >+</button>
            <button className = "btn btn-danger"  onClick = {() => changeCouter('-')} >-</button>
         </div>
    );
}
export default useCouter;