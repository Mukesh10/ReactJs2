import HeaderComponent from "./components/Header";
import EmpComponent from "./components/Employee";
import StudentComponent from "./components/student";
import CouterStateExm from "./components/CounterStateExm";
function App() {

  let employees = [{ id: 101, name: "Mukesh Rakh" },
                   { id: 102, name: "Swaranjali" },
                   { id: 103, name: "Rudra Rakh" }
                  ];
  return (
    <div>
      <HeaderComponent />
      <StudentComponent /> <br/>
      <table  className =  "ttable table-striped table table-bordered">
        <thead className="thead-light">
          <tr>
            <th>Id</th>
            <th>Name</th> 
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {
            employees.map((element, index) => {
              return <EmpComponent empObject={element} key={index} sal="10000" />
            })
          }
        </tbody>
      </table>
      <br/>
      <CouterStateExm/>
    </div>
  );
}

export default App;
