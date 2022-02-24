import AdminMenu from "./AdminMenu";
import AdminClientList from "./AdminClientList";
import AdminMastersList from "./AdminMastersList";
import AdminCity from "./AdminCity";
import AdminOrderList from "./AdminOrderList";

function AdminControlPanel(){
    return(
        <div className="control-panel">
            <AdminMenu />
            <div className="menu-container-size">
                <AdminOrderList />
            </div>
        </div>
    );
}

export default AdminControlPanel;