# react-simple-parallax

> A simple React Component for parallax effect on the front layer.

![alt tag](https://cloud.githubusercontent.com/assets/76567/14335829/3d14bcec-fc99-11e5-9483-04c8d9e6fb5f.gif)

## Install

```sh
npm install -S react-simple-parallax
```
## Usage

```javascript
import Parallax from 'react-simple-parallax';

class App extends React.Component {
  render () {
	return (
		<section>
		  	<Parallax className="parallax" speedDivider="5">
		  		<div>Hello World!</div>
		  	</Parallax>
		</section>
	);
  }
}
```
## Basic styling

```css
    section {
        text-align: center;
    }
    
    /* .react-simple-parallax-bg is generate by the component */
    section .react-simple-parallax-bg {
        background-image: url('http://tinyurl.com/zaz7bp4');
        height: 750px;
    }
    
    section .parallax {
        top: 200px;
        margin: auto;
    }
```
## Attributes
- **speedDivider**: controle translation speed (default: 5)
- **backgroundStyle**: to set the style of the background element with a javascript object (optional)

#### Example
```javascript
  render () {
	var background = {
		height: "1000px",
		backgroundImage: 'url(http://tinyurl.com/zaz7bp4)'
	}
	return (
		<section>
		  	<Parallax speedDivider="3" backgroundStyle={background}>
```

## Build the exemple

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
