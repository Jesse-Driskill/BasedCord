import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, fetchServers } from './actions/server_actions';
import { logout } from './actions/session_actions';

import Root from './components/root';
import configureStore from './store/store'


document.addEventListener("DOMContentLoaded", () => {

    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
            };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.store = store;
    window.createServer = createServer;
    window.logout = logout;
    window.fetchServers = fetchServers;


    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
})