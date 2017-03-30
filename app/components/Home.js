var React = require('react');
var ReactRouter = require('react-router');
var styles = require('../styles');
var ReactBsTable  = require('react-bootstrap-table')
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;;
var Link = ReactRouter.Link

const products = [
	{
      id: 1,
      name: "Product1",
      price: 120
  }, {
      id: 2,
      name: "Product2",
      price: 80
  }, {
      id: 3,
      name: "Product2",
      price: 80
  }, {
      id: 4,
      name: "Product2",
      price: 80
  }, {
      id: 5,
      name: "Product2",
      price: 80
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
  render: function () {
    return (
    	<div>
    	<h1>{this.props.route.header}</h1>
    		<div className="form-group col-sm-4 col-sm-offset-4">
    		<Link to="create" className="hidden">
          <button type="submit" className="btn btn-success" style={ styles.marginbutton }>Create</button>
        </Link>
    		
         
        </div>
	    	<BootstrapTable data={ products } insertRow={ true } deleteRow={ true } selectRow={ selectRowProp } options={ options }>
          <TableHeaderColumn width='500' dataField='id' isKey>Product ID</TableHeaderColumn>
          <TableHeaderColumn width='600' dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      	</BootstrapTable>

	    	
			</div>
    )
  }
});

module.exports = Home;