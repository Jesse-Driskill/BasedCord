import {connect} from "react-redux";
import { fetchServers, fetchServer } from "../../actions/server_actions";
import ServerNav from "./server_nav";


const mapStateToProps = (state, ownProps) => {
    return{
        currentUser: state.entities.users[state.session.id],
        servers: Object.values(state.entities.servers),
        errors: state.errors.server,
        serverId: ownProps.match.params.serverId
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchAllServers : () => {dispatch(fetchServers())},
        fetchServer: (serverId) => dispatch(fetchServer(serverId)),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerNav);