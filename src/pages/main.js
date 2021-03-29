import { IoEllipsisHorizontalOutline, IoNotificationsOutline } from "react-icons/io5";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MiniSupport from "../components/minisupport";
import SideNav from "../components/sidenav";
import Account from "./account";
import Exchange from "./exchange";
import Home from "./home";
import Transaction from "./transaction";




function Main() {
    const { path } = useRouteMatch();
    return (
        <div className="w-screen bg-gray-100  h-screen flex-1 flex-col lg:flex-row flex lg:overflow-y-hidden overflow-x-hidden ">
            <SideNav />
            <div className="flex lg:flex-1 flex-col h-full w-full lg:px-20 lg:pt-16">
                <div className="flex items-center px-3 md:px-0">
                    <div className="flex-1 flex items-center space-x-3">
                        <div className="bg-white p-1 px-2 rounded shadow rounded-2xl text-sm text-gray-600">Balance : <span className="font-bold text-black">12.002BTC</span></div>
                        <div className="bg-white p-1 px-2 rounded shadow rounded-2xl text-sm text-gray-600"> <IoEllipsisHorizontalOutline className="h-5 w-6" /> </div>
                    </div>
                    <div className="flex items-center space-x-5 text-gray-500">
                        <IoNotificationsOutline className=" h-7 w-7 cursor-pointer" />
                        <div className=" h-10 w-10 bg-gray-400 rounded-full cursor-pointer" />
                    </div>
                </div>
                <Switch>
                    <Route exact path={path} component={Home} />
                    <Route exact path={`${path}/transactions`} component={Transaction} />
                    <Route exact path={`${path}/exchange`} component={Exchange} />
                    <Route path={`${path}/account`} component={Account} />
                    <Route exact path={`${path}/support`} component={Home} />
                </Switch>
                <MiniSupport />
            </div>
        </div>
    );
}

export default Main;
