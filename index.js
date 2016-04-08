'use strict'

var React = require('react');

module.exports = React.createClass({
  // Define initial values
  getInitialState: function(){
    return {
      speedDivider: this.props.speedDivider ? this.props.speedDivider : 4, // Check if property speed is present if not set default value
      backgroundStyle: this.props.backgroundStyle ? this.props.backgroundStyle : '', // Check if thers is a direct style applied to the parallax background
    }    
  },
  componentDidMount: function() {
    // Add event listener to the window
    window.addEventListener('scroll', setInterval(this._calcTranslation), 10);

    // Set basic style rules for a parallax effect
    this.refs.background.setAttribute('style', 'width: 100%; top: 0; bottom: 0; background-size: cover ;background-position: 50% 0; background-repeat: no-repeat;');

    for(var key in this.state.backgroundStyle) {
      this.refs.background.style[key] = this.state.backgroundStyle[key];
    }

    // Set properties directly to avoid possible defined inline style
    this.refs.content.style.position = 'absolute';
    this.refs.content.style.left = 0;
    this.refs.content.style.right = 0;

  },
  componentWillUnmount: function() {
    // Remove event listener to the window
    window.removeEventListener('scroll', this._calcTranslation)
  },
  _calcTranslation: function() {
    // Calculate the translation CSS property
    var _window = window;
    var translateValue = _window.scrollY / this.state.speedDivider;
    if (translateValue < 0) {
      translateValue = 0;
    }

    // Aplly the transform to the background element
    var translate = 'translate3d(0px,' + translateValue + 'px, 0px)';
    this.refs.background.style.transform = translate;
  },
  render: function() {
    // Create and render elements
    var content = React.createElement('div', Object.assign({}, this.props,  { ref: 'content' }));
    var background = React.createElement('div', Object.assign({}, { ref: 'background', className: 'react-simple-parallax-bg' }));
    return(
      React.createElement('div', Object.assign({}, { ref: 'root' }), background, content)
    )
  }
});
