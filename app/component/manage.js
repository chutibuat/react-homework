var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

function aaa(){
	
}


var Manage = React.createClass({
	propTypes:{
    route: React.PropTypes.shape({
      header:React.PropTypes.string
    }),
    onChange: React.PropTypes.func
  },
  getInitialState: function () {
    return {loading: false, errors: {}}
  },
  _create: function () {
    
    return $.ajax({
      url: 'localhost:3030',
      type: 'POST',
      data: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        mobile:this.state.mobile
      },
      beforeSend: function () {

        this.setState({loading: true});
      }.bind(this)

    })
  },
  _onSubmit: function (e) {
    e.preventDefault();
    var xhr = this._create();
    xhr.done(this._onSuccess)
    .fail(this._onError)
    .always(this.hideLoading)
  },
  hideLoading: function () {
    this.setState({loading: false});
  },
  _onSuccess: function (data) {
    this.refs.user_form.getDOMNode().reset();
    this.setState(this.getInitialState());
    // show success message
  },
  _validate: function () {
    var errors = {}
    if(this.state.firstName == "") {
      errors.firstName = "Username is required";
    }
    return errors;
  },
	render:function() {
		return(
			<div>
        <h1>{this.props.route.header}</h1>
        <div className="clearfix"></div>
        <form className="form-horizontal" onSubmit={this._onSubmit} method="POST">
          <input type="hidden" name="pageType" id="file" defaultValue={this.props.pageType}/>
          <input type="hidden" name="id" id="id" defaultValue={this.props.userId}/>
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
                <button className="btn btn-default" style={ styles.marginbutton }>Cancel</button>
              </Link>
              <button type="submit" className="btn btn-default" disabled={this.state.loading}>
		            Create
		          </button>
              {/*<button type="submit" className="btn btn-success" style={ styles.marginbutton }>Submit</button>*/}
            </div>
          </div>
        </form>
      </div>
		)
	}
})

module.exports = Manage




