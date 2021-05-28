import MainDataEntry from "./dataEntry/MainDataEntry";
import MainGeneral from "./general/MainGeneral";
import MainLayout from './layout/MainLayout';
import {MainNavigation} from './navigation/MainNavigation';

export const Main = ({setHeader, header}) => {
    return (
        <div>
            <div>
                <MainGeneral/>
                <MainLayout/>
                <MainNavigation setHeader={setHeader} header={header}/>
                <MainDataEntry/>
            </div>
        </div>
    )
}
