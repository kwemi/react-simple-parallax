import React from 'react';
import {render} from 'react-dom';
import Parallax from '../../index.js';

class App extends React.Component {
  render () {

	var section = {
		textAlign: 'center',
		height: "1500px",
		background: 'url(http://i-cdn.phonearena.com/images/articles/215289-image/Stock-LG-V10-wallpapers.jpg)'
	}

	var box = {
		background: 'rgba(0,0,0,0.5)',
		margin: 'auto',
		color: '#fff',
		fontSize: '40px',
		boxShadow: '10px 7px 5px 1px rgba(0,0,0,0.45)',
		height: '300px',
		maxWidth: '80%'
	}

	return (
		<section style={section}>
		  	<Parallax speed="400" style="padding-top: 600px">
		  		<div style={box}></div>
		  	</Parallax>
		</section>
	);
  }
}

render(<App/>, document.getElementById('app'));