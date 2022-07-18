import * as serverUtil from '../util/server_util';

export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const REMOVE_SERVER = 'REMOVE_SERVER';
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS';
export const REMOVE_SERVER_ERRORS = 'REMOVE_SERVER_ERRORS';

const receiveServer = (server) => {
    return {
        type: RECEIVE_SERVER,
        server
    }
}

export const receiveServers = (servers) => {
    return {
        type: RECEIVE_SERVERS,
        servers
    }
}

const removeServer = (serverId) => {
    return {
        type: REMOVE_SERVER,
        serverId
    }
}

export const receiveServerErrors = (errors) => {
    return {
        type: RECEIVE_SERVER_ERRORS,
        errors
    }
}

export const removeServerErrors = () => {
    return {
        type: REMOVE_SERVER_ERRORS
    }
}

export const fetchServers = (user) => (dispatch) => {
    return serverUtil.fetchServers(user)
        .then((servers) => dispatch(receiveServers(servers)));
}

export const fetchServer = (serverId) => (dispatch) => {
    return serverUtil.fetchServer(serverId)
        .then((server) => dispatch(receiveServer(server)))
}

export const createServer = (server) => (dispatch) => {
    return serverUtil.createServer(server)
        .then((server) => dispatch(receiveServer(server)))
}

export const updateServer = (server) => (dispatch) => {
    return serverUtil.updateServer(server)
        .then((server) => dispatch(receiveServer(server)))
}

export const deleteServer = (serverId) => (dispatch) => {
    return serverUtil.deleteServer(serverId)
        .then(() => dispatch(removeServer(serverId)))
}