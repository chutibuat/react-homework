// app/containers/PromptContainer.js
var React = require('react');
var styles = require('../styles');

var Main = React.createClass({
  render: function () {
    return(
    	<div className="jumbotron col-sm-12 text-center" style={ styles.transparentBg }>
        
        <div className="col-sm-12">
          
          {this.props.children}
        </div>
      </div>
    )
  }
});
 
module.exports = Main;