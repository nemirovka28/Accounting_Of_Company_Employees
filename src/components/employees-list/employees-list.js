import EmployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css'

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {
    
    const elements = data.map( el => {
        const { id, ...itemProps} = el;
        return (
            // или так : <EmployeesListItem name = {el.name} salary = {el.salary} increase = {el.increase}/>
             <EmployeesListItem 
             key = {id}
             {...itemProps} 
             onDelete = { () => onDelete(id) }
             onToggleIncrease = { () => onToggleIncrease(id)} 
             onToggleRise = { () => onToggleRise(id)}/>
        )
    });
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}
export default EmployeesList;