import React from 'react';
import { Link } from 'react-router-dom';



// const Greeting = ({ currentUser, logout }) => {
//   const sessionLinks = () => (
//     <nav className="login-signup">
//       <Link to="/login">Login</Link>
//       &nbsp;or&nbsp;
//       <Link to="/signup">Sign up!</Link>
//     </nav>
//   );
//   const personalGreeting = () => (
    // <hgroup className="header-group">
    //   <h2 className="header-name">Hi, {currentUser.username}!</h2>
    //   <button className="header-button" onClick={logout}>Log Out</button>
    // </hgroup>
//   );

//   return currentUser ? personalGreeting() : sessionLinks();
// };

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    return (
      <div id='greeting'>


          <section id='gsec1'>
          
          <nav id='navbar'>

            <div className='navlink'>GitHub</div>
            <div className='navlink'>Portfolio</div>

            <Link to="/login" id="welcomelogin">Login</Link>
          </nav>
            <h2 id='gsec1h'>IMAGINE A PLACE...</h2>
            <div id='gsec1p'>
              ...where you can belong to a school club, 
              a gaming group, or a worldwide art community. 
              Where just you and a handful of friends can spend time together. 
              A place that makes it easy to talk every day and hang out more often.
            </div>
          </section>

          <section id='gsec2'>

            <img id="couchguy"></img>
            

            <div id="gsec2text">
              <h2 id="gsec2h">
                Create an invite-only place where you belong
              </h2>

              <div id="gsec2p">
                BasedCord servers are organized into topic-based channels where you can collaborate, 
                share, and just talk about your day without clogging up a group chat.
              </div>


            </div>
          </section>

          <section id='gsec3'>
            
            <div id='gsec3text'>
              <h2 id='gsec3h'>
                Where hanging out is easy
              </h2>

              <div id='gsec3p'>
                Grab a seat in a voice channel when you’re free. 
                Friends in your server can see you’re around and instantly pop in to talk without having to call.
              </div>
            </div>
            <img id='slurpimg'></img>
          </section>

          <section id='gsec4'>

            <img id='pawn'></img>

            <div id='gsec4text'>
              <h2 id='gsec4h'>
                From few to a fandom
              </h2>

              <div id='gsec4p'>
                Get any community running with moderation tools and custom member access. 
                Give members special powers, set up private channels, and more.
              </div>
            </div>
          </section>

          {/* <section id='gsec5'>
            <div id='gsec5text'>

              <h2 id='gsec5h'>
                RELIABLE TECH FOR STAYING CLOSE
              </h2>

              <div id='gsec5p'>
                Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
              </div>

            </div>

            
          </section> */}

          <div id='journeydiv'>
            <h2 id='journeyheader'>
              Ready to start your journey?
            </h2>

            <a href='#/signup' id='signupbuttonbottom'>Open BasedCord in the Browser!</a>
          </div>

          

          <div id='footer'>
            <div id='footersec1'>

            </div>
          </div>
      </div>
    )
  }
}


export default Greeting;