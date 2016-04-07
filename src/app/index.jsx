import React from 'react';
import {render} from 'react-dom';
import Parallax from '../../index.js';

class App extends React.Component {
  render () {

	var section = {
		textAlign: 'center'
	}

  var background = {
      height: "1000px",
      backgroundImage: 'url(http://tinyurl.com/zaz7bp4)'
  }

	var box = {
		top: "300px",
		background: 'rgba(0,0,0,0.8)',
		margin: 'auto',
		color: '#fff',
		fontSize: '40px',
		boxShadow: '10px 7px 5px 1px rgba(0,0,0,0.45)',
		height: '300px',
		maxWidth: '80%'
	}

	return (
		<section style={section}>
				<Parallax style={box} className="parallax" speedDivider="5" backgroundStyle={background}>
		  		<p>Hello World!</p>
		  	</Parallax>
		</section>
	);
  }
}

render(<App/>, document.getElementById('app'));