// import React from "react";
// import { Provder } from 'react-redux';
// import { HashRouter } from "react-router-dom";
// import App from './app';

// class Root extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <App> </App>
//         )
//     }

    
// }

// export default Root;

import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);

export default Root;
