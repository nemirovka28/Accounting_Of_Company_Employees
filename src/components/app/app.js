import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import EmployeesAddForm from '../employees-add-form/employees-add-form'
import EmployeesList from '../employees-list/employees-list'
import SearchPanel from '../search-panel/search-panel'
import './app.css'
export default function App () {

    const data = [
        {name: 'John C.', salary: 800, id:1},
        {name: 'Mango R.', salary: 3000, id:2},
        {name: 'Marta F.', salary: 4500, id:3},
    ];
    return (
        <div className="app">
            <AppInfo/>
            <div className='search-panel'>
            <SearchPanel/>
            <AppFilter/>
            </div>
            <EmployeesList data = {data} />
            <EmployeesAddForm/>
        </div>
    );
}
