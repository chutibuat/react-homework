var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Manage = require('../component/manage');
var Link = ReactRouter.Link

const products = {
  id: 1,
  firstName: "Peter",
  lastName : "C",
  inputEmail : "test@gmail.com",
  mobilePhone : "0811111111",
};

var ManageContainer = React.createClass({
  propTypes:{
    route: React.PropTypes.shape({
      header:React.PropTypes.string
    }),
    onChange: React.PropTypes.func
  },
  getInitialState(){
    if(this.props.route.header === "Create User"){
      return{
        firstName:"",
        lastName:"",
        mobilePhone:"",
        inputEmail:"",
        avatarUrl:""
      }
    }else{
      return products
    }
  },
  onChange(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({[name]:value})
  },
  render: function () {
    return (
      <Manage 
        route={this.props.route} 
        products={products} 
        onChange={this.onChange} 
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        mobilePhone={this.state.mobilePhone}
        inputEmail={this.state.inputEmail}
        avatarUrl={this.state.avatarUrl}
      />
    )
  }
});

module.exports = ManageContainer;




