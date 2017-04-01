var React = require('react');
var ReactRouter = require('react-router');
var styles = require('../styles');
var ReactBsTable  = require('react-bootstrap-table')
var _  = require('lodash')
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;;
var Link = ReactRouter.Link

const products = [
	{
    id: 1,
    firstName: "Peter",
    lastName : "C",
  }, {
    id: 2,
    firstName: "James",
    lastName : "C"
  }, {
    id: 3,
    firstName: "Gram",
    lastName : "C"
  }, {
    id: 4,
    firstName: "Sand",
    lastName : "C"
  }, {
    id: 5,
    firstName: "John",
    lastName : "C"
  }
 ];


function onAfterDeleteRow(rowKeys) {
  alert('The rowkey you drop: ' + rowKeys);
}

const options = {
  afterDeleteRow: onAfterDeleteRow  // A hook for after droping rows.
};

// If you want to enable deleteRow, you must enable row selection also.
const selectRowProp = {
  mode: 'checkbox'
};


var Home = React.createClass({
	renderRows:function(){
		return _.map(products, function(product,key){
			return(
				<tr key={key}>
      		<td>{product.id}</td>
      		<td>{product.firstName} {product.lastName}</td>
      		<td> x x</td>
      	</tr>
			)
		})
	},
  render: function () {
    return (
    	<div>
    	<h1>{this.props.route.header}</h1>
    		<div className="form-group col-sm-4 col-sm-offset-4">
    		<Link to="create" className="hidden">
          <button type="submit" className="btn btn-success" style={ styles.marginbutton }>Create</button>
        </Link>
        </div>
        <table className="table table-striped">
        	<thead>
        		<tr>
	        		<th>#</th>
	        		<th>Firstname Lastname</th>
	        		<th>#</th>
	        	</tr>
        	</thead>
        	<tbody>
        		{this.renderRows()}
        	</tbody>
        </table>
	    	{/*<BootstrapTable data={ products } insertRow={ true } deleteRow={ true } selectRow={ selectRowProp } options={ options }>
          <TableHeaderColumn width='500' dataField='id' isKey>Product ID</TableHeaderColumn>
          <TableHeaderColumn width='600' dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      	</BootstrapTable>*/}

	    	
			</div>
    )
  }
});

module.exports = Home;