import EditTaskForm from "../../../features/editTaskForm/ui/editTaskForm";
import SearchLine from "../../../features/searchLine/ui/searchLine";
import "./style.scss";

function Navbar() {
    return (
        <header>
            <h1>To-Do App</h1>
            <SearchLine windowContent={EditTaskForm} />
        </header>
    )
}

export default Navbar;