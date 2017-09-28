import React, {Component} from 'react'
import {SimpleSlider, MobileEvents} from './Events'
import Constants from './Constants'


class EmailForm extends Component {
  	constructor(props) {
		super(props);
		this.state = {
            value: "Enter your email"
		};

		this.handleChange = this.handleChange.bind(this);
	}

  	handleChange(evt) {
  		console.log(this);
	    this.setState({
	      value: evt.target.value // not defined
	    });
	}

	submitChange (email) {

		let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (re.test(email)){
			let url = "https://mailtrain.tnyu.org/subscription/ryeVfPjte?email="+ email + "&subscribe=Sign+Up";
			window.open(url);
		}
	}
	render () {
		return(
			<div id="signup-form">
			        <p> Be the first to know about upcoming events and opportunities. </p><br/>
			        <form>
			        	<input type="email" placeholder={this.state.value} onChange={this.handleChange}/>
				        <button onClick={()=>this.submitChange(this.state.value)} type="submit" className="btn btn-success">
		                	<i className="material-icons arrow-submit">arrow_forward</i>
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
                <div id="main-slider"><SimpleSlider team={this.state}/></div>
                <div id="mobile-events"><MobileEvents/></div>

			    <h2 id="tnyu-description"> We are NYCs largest student-run community <br/> of coders, designers, and builders. </h2>
			    <footer id= "footer">
			    	<Constants.footer/>
			    </footer>
	        </div>
	  );
    }
}

export default Home;
