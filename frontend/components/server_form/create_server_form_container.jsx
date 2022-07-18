import { connect } from "react-redux";
import ServerForm from "./server_form";
import { createServer, removeServerErrors } from "../../actions/server_actions";
import { withRouter } from "react-router";

const mapStateToProps = (state) => {
    return{
        currentUser: state.entities.users[state.session.id],
        server: {
        owner_id: state.session.id,
        name: "",
        },
        errors: state.errors.server,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        action: function(server){return dispatch(createServer(server))},
        removeErrors: () => dispatch(removeServerErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerForm);