import React from 'react';
class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        email: '',
        username: '',
        password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }
    update(field) {
        return e => this.setState({
        [field]: e.currentTarget.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
    renderErrors() {
        return(
        <ul>
            {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
                {error}
            </li>
            ))}
        </ul>
        );
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }

    demoLogin(e) {
        e.preventDefault();
        this.props.processForm({
            username: 'JohnDoe', email: 'JohnDoe@gmail.com', password: 'password'
        })
    }

    render() {

        if (this.props.formType === 'signup') {
            this.displayNav = <div id='register-to-login'> {this.props.navLink} </div>
            this.formHeader = <div id='session-form-head-text'>
                                    <h2 className='session-form-header'>Create an Account!</h2>
                                </div>
        }
        else {
            this.displayNav =   <div>
                                    <div id='login-to-register'>Need an account? {this.props.navLink} </div>
                                </div>
            this.formHeader = <div id='session-form-head-text'>
                                    <h2 className='session-form-header'>Welcome Back!</h2>
                                    <div id='session-form-header-subtext'>We're so excited to see you again!</div>
                                </div>
        }

        

        return (
        <div className="login-form-container" id='loginformroot'>
            <form onSubmit={this.handleSubmit} className="login-form-box">
            <br/>
            
            
            {this.renderErrors()}
                <div className="login-form" id='loginform'>
                    {this.formHeader}
                    

                    <div className='forminputdiv'>Email:</div>
                    <label className='forminputheader'>
                    <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="login-input"
                    />
                    <br/>
                    <div className='forminputdiv'>Username:</div>
                    </label >
                    <label className='forminputheader'>
                    <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                        className="login-input"
                    />
                    </label >
                    <br/>
                    <div className='forminputdiv'>Password:</div>
                    <label className='forminputheader'>
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="login-input"
                    />
                    </label>
                    <br/>
                    <input className="discordbutton" id='sessionbutton' type="submit" value={this.props.formType} />

                    <button className="discordbutton" onClick={this.demoLogin} id='demologinbutton'>DEMO LOGIN</button>
                    {this.displayNav}
                </div>
            </form>
        </div>
        );
    }
}
export default SessionForm;