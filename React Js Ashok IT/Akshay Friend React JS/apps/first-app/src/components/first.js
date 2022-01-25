function first() {

    let names = ["Mukesh", "Mayur", "Rudra", "Shambhu"];
    let age = 29;

    let emps = [
        { id: 101, name: "Mukesh", add: "Pune" },
        { id: 102, name: "Mayur", add: "Mumbai" },
        { id: 103, name: "Rudra", add: "Delhi" },
        { id: 104, name: "Shambhu", add: "Punjab" },
        { id: 105, name: "Ravi", add: "Gohathi" },
    ]
    let status = true;
    let name1 = "Mukesh";
    let name2 = "Mayur";
    let a = 10;
    let b = 20;

    function test(a) {
        console.log("test is called .... and value of a is " + a);
    }

    //inline - css
    let headingStyle = {
        color: "Green",
        textAlign: 'center',
        backgroundColor: "red"
    }

    return (
        <div>
            <h3 style={headingStyle}>Inline Css</h3>
            <h3 className="ext_heading"> External Css</h3>
            <h3 className="text-center text-info bg-dark mt-5">Boostrap </h3>
            {
                names.map((element, index) => {
                    return <h4 key={index}>{element} {index} </h4>
                })
            }
            <br></br><br></br><br></br>
            <h3>* Employee Details : </h3>
            <table border="2px">
                <thead>
                    <tr>
                        <th>Emp Id</th>
                        <th>Name</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        emps.map((element, index, data) => {
                            return <tr key={index}>
                                <td> {element.id} </td>
                                <td> {element.name} </td>
                                <td> {element.add} </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

            {
                status == true ? <h3>{name1}</h3> :
                    <h3>{name2}</h3>
            }
            {a < b && <h3>a is less than b</h3>}
            <button onClick={() => test(10)}>Click</button>

        </div>

    )



}