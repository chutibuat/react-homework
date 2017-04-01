// app/containers/PromptContainer.js
var React = require('react');
var styles = require('../styles');

var Main = React.createClass({
  render: function () {
    return(
      <div className="col-sm-12">
        {this.props.children}
      </div>
    )
  }
});
 
module.exports = Main;