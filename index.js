'use strict'

var React = require('react');
var ReactDOM = require('react-dom');

// Limiting position
var clamp = function clamp(x, low, high) {
  return Math.min(Math.max(x, low), high);
};

module.exports = React.createClass({
  // Define initial values
  getInitialState: function(){
    return {
      speed: this.props.speed ? this.props.speed : 100, // Check if property speed is present if not set default value
      style: {}
    }    
  },
  componentDidMount: function() {
    // Add event listener to the window
    window.addEventListener('scroll', this._calcTranslation)

    // Set inline style attributes
    if(this.props.style != 'undefined') {
      this.refs.parallax.setAttribute('style', this.props.style);
    }
  },
  componentWillUnmount: function() {
    // Remove event listener to the window
    window.removeEventListener('scroll', this._calcTranslation)
  },
  _calcTranslation: function() {
    // Calculate the translation CSS property
    var _window = window;
    var scrollY = _window.scrollY;
    var el = ReactDOM.findDOMNode(this);
    var offsetTop = el.offsetTop;
    var offsetHeight = el.offsetHeight;
    var d = (scrollY - offsetTop) * .75 / offsetHeight;
    var t = "translateY(-" + clamp((d * this.state.speed).toFixed(2), (-.25 * offsetHeight).toFixed(2), (.75 * offsetHeight).toFixed(2)) + "px) translateZ(0)";

    // Set CSS property
    this.setState({
     style: {
          transform: t
      }
    })

  },
  render: function() {
    return React.createElement('div', Object.assign({}, this.props, { style : this.state.style }, { ref: 'parallax' }));
  }
});