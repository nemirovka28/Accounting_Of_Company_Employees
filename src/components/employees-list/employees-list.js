import EmployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css'

const EmployeesList = ({data}) => {
    
    const elements = data.map( el => {
        const { id, ...itemProps} = el;
        return (
            // или так : <EmployeesListItem name = {el.name} salary = {el.salary} increase = {el.increase}/>
             <EmployeesListItem key = {id} {...itemProps} />
        )
    });
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}
export default EmployeesList;