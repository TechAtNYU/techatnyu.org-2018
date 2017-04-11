import React, {Component} from 'react'
import SimpleSlider from './Carousel'
import Constants from './Constants'


class EmailForm extends Component {
  	constructor(props) {
		super(props);
		this.state = {
            value: "Type your email"
		};
	}
  	handleChange (evt) {
	    this.setState({
	      value: evt.target.value
	    });
	}
	submitChange (email) {
		console.log(email); // TODO: Connect to backend
	}
	render () {
		return(
			<div id="signup-form">
			        <p> Be the first to know about upcoming events and opportunities. </p><br/>
			        <form>
			        	<input type="email" value={this.state.value} onChange={this.handleChange}/>
				        <button onClick={()=>this.submitChange(this.state.value)} type="submit" className="btn btn-success">
		                	<i className="material-icons">arrow_forward</i>
	            		</button>
			        </form>
	    	</div>
		);
	}
}

class Home extends Component {
    render () {
    	return (
	        <div>
	            <div id="tnyu-title">
	            	<h1>tech@nyu</h1>
			    </div>
                <EmailForm/>
			    <div id="slider-wrapper">
			        <nav id="tnyu-teams">
			            <ul>
			                <li><a>All</a></li>
			                <li><a>After Hours</a></li>
			                <li><a>Demo Days</a></li>
			                <li><a>Design Days</a></li>
			                <li><a>Game Days</a></li>
			                <li><a>Hack Days</a></li>
			            </ul>
			        </nav>
			    <div id="main-slider"><SimpleSlider/></div>
			    </div>
			    <h2 id="tnyu-description"> We are NYC's largest student-run organization of coders, designers, and builders. </h2>
			    <footer id= "footer">
			    	<Constants.footer/>
			    </footer>
	        </div>
	  );
    }
}

export default Home;