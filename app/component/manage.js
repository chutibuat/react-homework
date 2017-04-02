var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

var Manage = React.createClass({
	propTypes:{
    route: React.PropTypes.shape({
      header:React.PropTypes.string
    }),
    onChange: React.PropTypes.func
  },
	render:function() {
		return(
			<div>
        <h1>{this.props.route.header}</h1>
        <div className="clearfix"></div>
      
        <form className="form-horizontal">
        	<div className="form-group">
            <div className="col-sm-12">
            	<img className="img-profile center-block"  src={this.props.avatarUrl} alt=""/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="file" className="col-sm-2 col-sm-offset-2 control-label">Avatar</label>
            <div className="col-sm-6">
              <input type="file" name="avatarUrl"  className="form-control" id="file" placeholder="" onChange={this.props.onChange}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="firstName" className="col-sm-2 col-sm-offset-2 control-label">Firstname</label>
            <div className="col-sm-6">
              <input type="text" name="firstName" className="form-control" id="firstName" placeholder="Firstname" value={this.props.firstName} onChange={this.props.onChange}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="col-sm-2 col-sm-offset-2 control-label">Lasttname</label>
            <div className="col-sm-6">
              <input type="text" name="lastName" className="form-control" id="lastName" placeholder="Lasttname" value={this.props.lastName} onChange={this.props.onChange}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail" className="col-sm-2 col-sm-offset-2 control-label">Email</label>
            <div className="col-sm-6">
              <input type="email" name="inputEmail" className="form-control" id="inputEmail" placeholder="Email" value={this.props.inputEmail} onChange={this.props.onChange}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="mobilePhone" className="col-sm-2 col-sm-offset-2 control-label">Mobile</label>
            <div className="col-sm-6">
              <input type="number" name="mobilePhone" className="form-control" id="mobilePhone" placeholder="" value={this.props.mobilePhone} onChange={this.props.onChange}/>
            </div>
          </div>
          
          <div className="form-group">
            <div className="col-sm-10 text-right">
              <Link to="/">
                <button type="submit" className="btn btn-default" style={ styles.marginbutton }>Cancel</button>
              </Link>
              <button type="submit" className="btn btn-success" style={ styles.marginbutton }>Submit</button>
            </div>
          </div>
        </form>
      </div>
		)
	}
})

module.exports = Manage