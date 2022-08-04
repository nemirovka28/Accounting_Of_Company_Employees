import { Component } from 'react';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import './app.css';

 class App extends Component {
    constructor (props) {
        super (props);
            this.state = {
                data: [
                    {name: 'John C.', salary: 800, increase: false, like:true, id:1},
                    {name: 'Mango R.', salary: 3000, increase: true, like:false, id:2},
                    {name: 'Marta F.', salary: 4500, increase: false,like:false, id:3},
                ],
                term : '',
                filter: '',
            } 
            this.maxId = 4;
    } 

    deleteItem = (id) => {
        this.setState (({data}) => {
            return {
                data:data.filter (el => el.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase:false,
            rise: false,
            id:this.maxId++
        }
        this.setState(({data})=> {
            const newArr = [...data, newItem];
            return {
                data:newArr
            }
        });
    }

    handleSalary = (e,id) => {
        this.setState(({data}) => ({
            data: data.map ( item => {
                if (item.id === id) {
                    return {...item, salary: e}
                }
                return item
            })
        }))

    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map ( item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item
            })
        }))
    }

    onToggleRise = (id) =>{
        this.setState(({data}) => ({
            data: data.map ( item => {
                 if (item.id === id) {
                    return {...item, like: !item.like}
                 }
                 return item
            })
        }))
    }

    onLike = (data) => {
        if (data.like) {
            return data.name
        }
    }

    serachEmp = (items, term) => {
        if (term.length === 0) return items;

        return items.filter ( item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState ({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'like':
                return items.filter( item => item.like );
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render () {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.serachEmp(data, term), filter)

        return (
            <div className="app">
                    <AppInfo employees = { employees } increased = { increased }
                     onLike = {this.onLike} />
                <div className='search-panel'>
                    <SearchPanel
                    onUpdateSearch = {this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect = {this.onFilterSelect} />
                </div>
                    <EmployeesList data = {visibleData} 
                     onDelete = {this.deleteItem}
                     onToggleIncrease = {this.onToggleIncrease}
                     onToggleRise = {this.onToggleRise} 
                     newHandleSalary = {this.handleSalary}/>
                    <EmployeesAddForm onAdd = {this.addItem}/>
            </div>
        );
    }
}
export default App;
