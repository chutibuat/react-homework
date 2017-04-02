var React = require('react');
var ReactRouter = require('react-router');
var styles = require('../styles');
var ReactBsTable  = require('react-bootstrap-table')
var MemberList = require('../component/MemberList');
var _  = require('lodash')
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;;
var Link = ReactRouter.Link
const request = require('axios')

var MemberListContainer = React.createClass({
	propTypes:{
    route: React.PropTypes.shape({
      header:React.PropTypes.string
    })
  },
  getInitialState(){
    return{
      membersList:null
    }
  },
  componentDidMount(){
    var users
    request.get('http://demo4925167.mockable.io/users')
    .then((response) => {
      const result = response.data
      this.setState({
        membersList: result
      })
    })
    .catch((err) => {
      console.log(err)
    });
  },
  render: function () {
    return (
    	<MemberList 
        route={this.props.route} 
        membersList={this.state.membersList}
      />
    )
  }
});

module.exports = MemberListContainer;