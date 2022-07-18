// import React from 'react';




// class App extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <h1>
//                 REACT IS WORKING
//             </h1>
//         )
//     }
// }

// export default App;

import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';


import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import ServerFormContainer from './server_form/create_server_form_container';
import ServerNav from './server_nav_list/server_nav';
import ServerForm from './server_form/server_form';


const App = () => (
    <div>
        
        <Switch>
            <AuthRoute exact path="/" component={GreetingContainer}/>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>

        <Switch>
            <ProtectedRoute exact path="/servers" component={ServerNav} />
        </Switch>

        
        
    </div>
);

export default App;
