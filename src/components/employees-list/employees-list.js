import { Component } from "react";
import EmployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css'

class EmployeesList extends Component   {
    constructor (props) {
        super (props);
        this.state = {
            salary: '',
        }
    }
    render () {
        const {data, onDelete, onToggleIncrease, onToggleRise} = this.props
        const elements = data.map( el => {
            const { id, ...itemProps} = el;
            return (
                 <EmployeesListItem 
                 key = {id}
                 {...itemProps} 
                 newHandleSalary = {(e)=>this.props.newHandleSalary(parseInt(e),id)}
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
}
export default EmployeesList;