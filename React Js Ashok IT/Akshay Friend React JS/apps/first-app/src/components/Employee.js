function emp(data) {
    let emp = data.empObject;
    console.log("emp object is " + JSON.stringify(emp));
    return (
        <tr>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td>{data.sal}</td>
        </tr>
    )
}

export default emp;