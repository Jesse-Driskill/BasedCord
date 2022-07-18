import React from 'react';

export default class ServerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            owner_id: this.props.currentUser.id,
            name: `${this.props.currentUser.username}'s Server`
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateName = this.updateName.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.action(this.state)

    }

    updateName(name){
        return (e) => {this.setState({[name]: e.currentTarget.value})}
    }

    render() {
        let submitButton = 
        <button type='submit' id='create-server' value={this.props.formType}>
            Make Server
        </button>

        return <div>
            <form  id='create-server-form' onSubmit={this.handleSubmit}>
                
                <input 
                autoFocus
                type="text"
                value={this.state.name}
                onChange={this.updateName("name")}
                id="server-form-name"
                />
                {submitButton}
            </form>

            <br/>
            
            
        </div>
    }
}