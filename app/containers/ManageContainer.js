var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Manage = require('../component/manage');
// var rp = require('request-promise');
const request = require('axios')
var Link = ReactRouter.Link


var ManageContainer = React.createClass({
  propTypes:{
    route: React.PropTypes.shape({
      header:React.PropTypes.string
    }),
    onChange: React.PropTypes.func
  },
  getInitialState(){
    return{
      firstName:"",
      lastName:"",
      mobilePhone:"",
      inputEmail:"",
      avatarUrl:""
    }
  },
  componentDidMount(){
    var users
    request.get('http://demo4925167.mockable.io/users')
    .then((response) => {
      const result = response.data[0]
      this.setState({
        firstName: result.firstName,
        lastName : result.lastName,
        mobilePhone:result.mobilePhone,
        inputEmail:result.inputEmail
      })
    })
    .catch((err) => {
      console.log(err)
    });
  },
  onChange(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({[name]:value})
  },
  render: function () {
    // console.log(this.state)
    return (
      <Manage 
        route={this.props.route} 
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




