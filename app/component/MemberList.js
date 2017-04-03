var React = require('react');
var ReactRouter = require('react-router');
var styles = require('../styles');
var ReactBsTable  = require('react-bootstrap-table')
var _  = require('lodash')
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;;
var Link = ReactRouter.Link

function onClickRow (e,id) {
  return window.location = 'update?id='+id;
}
function onDelete(){
  var r = confirm("Confirm to Delete");
  if (r == true) {
    console.log('s')
  } else {
    console.log('g')
  }
}
function chkImg(avatarUrl){
  var avatarUrl
  if(!avatarUrl) avatarUrl = "https://dummyimage.com/50x50"
  return avatarUrl;
} 

var MemberList = React.createClass({
	renderRows:function(){
		return _.map(this.props.membersList, function(user,key){
			return(
				<tr key={key} >
      		<td><img src={chkImg(user.avatarUrl)} className="img-profile-MemberList"/></td>
      		<td className="td-link" onClick={(e) => onClickRow(e, user.id)}>{user.firstName} {user.lastName}</td>
      		<td className="text-center">
            <button className="btn btn-danger" onClick={onDelete}>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
          </td>
      	</tr>
			)
		})
	},
  render: function () {
    return (
    	<div>
    	<h1>{this.props.route.header}</h1>
    		<div className="form-group col-sm-12">
    		<Link to="create">
          <button type="submit" className="btn btn-success pull-right" style={ styles.marginbutton }>
            <i className="fa fa-plus" aria-hidden="true"></i> Create
          </button>
        </Link>
        </div>
        <table className="table table-striped">
        	<thead>
        		<tr>
	        		<th>#</th>
	        		<th>Firstname Lastnames</th>
	        		<th>#</th>
	        	</tr>
        	</thead>
        	<tbody>
        		{this.renderRows()}
        	</tbody>
        </table>
			</div>
    )
  }
});

module.exports = MemberList;