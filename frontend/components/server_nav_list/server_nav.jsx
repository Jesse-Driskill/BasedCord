import React from "react"
import {Link} from "react-router-dom"

export default class ServerNav extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllServers;
        console.log(this.props, 'this is props')
        console.log('all servers fetched');
        console.log(store.getState())
    }

    render() {
        return (
            <div>Hello!

                <div>
                    {this.props.servers}
                </div>

                <button >
                    Logout
                </button>
            </div>
        )
    }
}