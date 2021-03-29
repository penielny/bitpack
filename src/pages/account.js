import React from 'react'
import { IoBookmarkOutline, IoCloudUploadOutline, IoCog, IoLockClosed, IoStar } from 'react-icons/io5'
import { useRouteMatch,NavLink, Switch, Route } from 'react-router-dom';
import ChangePasswod from '../components/changepasswod';
import Payments from '../components/payments';
import UserInfo from '../components/userinfo';

export default function Account() {
    const { path,url } = useRouteMatch();
    return (
        <>
            <div className="my-10 mt-10 ">
                <h3 className="font-bold text-2xl">Account Tweaks</h3>
            </div>
            <div className="flex-1 overflow-y-auto">
                <div className="flex-1 flex-col md:flex-row items-start">
                    <div className="p-3 space-y-2 border-r">
                        <NavLink strict exact activeClassName="border-l-4 font-bold border-purple-400 p-2" to={`${url}`} className="flex items-center space-x-3 ">
                            <IoCog />
                            <h3>Genral information</h3>
                        </NavLink>
                        <div className="flex items-center space-x-3 cursor-pointer text-gray-300">
                            <IoCloudUploadOutline />
                            <h3>Change Information </h3>
                        </div>
                        <NavLink strict exact activeClassName="border-l-4 font-bold border-purple-400 p-2" to={`${url}/payments`} className="flex items-center space-x-3 ">
                            <IoBookmarkOutline />
                            <h3>Payments</h3>
                        </NavLink>
                        <NavLink strict exact activeClassName="border-l-4 font-bold border-purple-400 p-2" to={`${url}/change-pwd`} className="flex items-center space-x-3">
                            <IoLockClosed />
                            <h3>Change Password</h3>
                        </NavLink>
                        <NavLink strict exact activeClassName="border-l-4 font-bold border-purple-400 p-2" to={`${url}/get-verified`} className="flex items-center space-x-3">
                            <IoStar />
                            <h3>Get Verified</h3>
                        </NavLink>
                    </div>
                  <Switch>
                      <Route exact path={`${path}`} component={UserInfo} />
                      <Route exact path={`${path}/change-pwd`} component={ChangePasswod} />
                      <Route exact path={`${path}/payments`} component={Payments} />
                  </Switch>
                </div>
            </div>

        </>
    )
}
