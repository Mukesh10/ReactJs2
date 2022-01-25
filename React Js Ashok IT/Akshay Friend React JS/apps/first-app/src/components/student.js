import {useState} from 'react'
//useState hook function
function useStudent() { //Student

    let [name,setChangename] = useState("Chandra");
    let [age,setChangeAge] = useState(28);
    
     function changename(){
        setChangename("Mukesh Rakh");
        setChangeAge(29);
    }

    return (
        <div>
            <h1 className="text-denger text-center">{name}</h1>
            <h1 className="text-denger text-center">{age}</h1>
            <button onClick = {changename} className = "btn btn-success">Change name</button>

        </div>

    )


}

export default useStudent;