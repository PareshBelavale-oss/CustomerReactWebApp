import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import MPandFacilityRegister from './components/MPandFacilityRegister/MPandFacilityRegister';
import NotFound from './components/NotFound/NotFound';
import AuctionDetail from './components/AuctionDetail/AuctionDetail';


function Routes() {

    const appRoutes = [
        {
          path: "facilityRegister",
          component: MPandFacilityRegister
        },
        {
          path: "auctionDetail",
          component: AuctionDetail
        },
        {
            path: "signup",
            component: Signup
          },
        {
          path: "/",
          component: Login
        }
      ];

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route path="/signup" component={Signup}></Route>
                <Route path="/facilityRegister" component={MPandFacilityRegister}></Route>
                <Route path="/auctionDetail" component={AuctionDetail}></Route>
                <Route path="*" component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes







// const Routes = ()=>{
//     <BrowserRouter>
//         <switch>
//             <Route exact path="/" component={Login}></Route>
//             <Route exact path="/signup" component={Signup}></Route>
//             <Route exact path="/facilityRegister" component={MPandFacilityRegister}></Route>
//         </switch>
//     </BrowserRouter>
// };

// export default Routes;