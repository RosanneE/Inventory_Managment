//imports
import InventoryList from "../pages/InventoryList"
import Add from "../pages/Add"
import Notifications from "../pages/Notifications"


function Header() {
    return (
        <nav className='nav'>
            <p>Header</p>
            <ul>
                <li> <InventoryList/> </li>
                <li> <Add/> </li>
                <li> <Notifications/> </li>
            </ul>
        </nav>
    )
}

export default Header