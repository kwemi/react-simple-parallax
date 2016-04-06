# react-simple-parallax

> A simple React Component for parallax effect on the front layer.

## Install

```sh
npm install -S react-parallax
```
## Usage

```javascript
import Parallax from 'react-simple-parallax';

class App extends React.Component {
  render () {
	return (
		<section style={section}>
		  	<Parallax speed="400" style="padding-top: 600px">
		  		<div>Hello Wolrd!</div>
		  	</Parallax>
		</section>
	);
  }
}
```
## Build exemple

Initial set up

```sh
npm install
```

Install Webpack

```sh
npm install webpack -g
```

Build the exemple

```sh
webpack
```

Open `/src/index.html`


# License

MIT
