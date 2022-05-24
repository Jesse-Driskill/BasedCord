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

const App = () => (
    <div>
        
        <Switch>
            <AuthRoute exact path="/" component={GreetingContainer}/> 
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;
