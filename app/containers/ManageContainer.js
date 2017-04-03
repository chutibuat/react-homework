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
      avatarUrl:"https://dummyimage.com/100x100",
      pageType:"create"
    }
  },
  componentDidMount(){
    var users
    if(this.props.route.header !== "Create User"){
      var userId = this.props.location.query.id
      // request.get('http://demo4925167.mockable.io/users')
      request.get('http://localhost:3000/v1/user/' + userId)
      .then((response) => {
        // const result = response.data[userId -1]
        const result = response.data[0]
        var avatarUrl = result.avatarUrl

        if(!result.avatarUrl){
          avatarUrl = "https://dummyimage.com/100x100"
        }
        this.setState({
          firstName: result.firstname,
          lastName : result.lastname,
          mobilePhone:result.mobile,
          inputEmail:result.email,
          avatarUrl:avatarUrl,
          pageType:"update"
        })
      })
      .catch((err) => {
        console.log(err)
      });
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
        onChange={this.onChange} 
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        mobilePhone={this.state.mobilePhone}
        inputEmail={this.state.inputEmail}
        avatarUrl={this.state.avatarUrl}
        userId ={this.props.location.query.id}
        pageType ={this.state.pageType}
      />
    )
  }
});

module.exports = ManageContainer;




