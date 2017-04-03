var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

const request = require('axios')

var Manage = React.createClass({
  propTypes:{
    route: React.PropTypes.shape({
      header:React.PropTypes.string
    }),
    onChange: React.PropTypes.func
  },
  _create: function () {  
    // console.log(this.props)
    // return $.ajax({
    //   url: 'http://localhost:3000/v1/user/create',
    //   type: 'POST',
    //   data: {
    //     firstname: this.props.firstName,
    //     lastname: this.props.lastName,
    //     email: this.props.inputEmail,
    //     mobile: this.props.mobilePhone
    //   },
    //   beforeSend: function () {
    //     this.setState({loading: true});
    //   }.bind(this)
    // })
  },
  // _onSuccess: function (data) {
  //   console.log('_onSuccess');
  //   // console.log(data)
  //   this.refs.user_form.getDOMNode().reset();
  //   this.setState(this.getInitialState());
  //   // show success message
  // },
  _onSubmit: function (e) {
    // request.post('http://localhost:3000/v1/user/create', { 
    //   firstName: 'Marlon', lastName: 'Bernardes' 
    // })
    // .then(function(response){
    //   console.log('saved successfully')
    // });
    return window.location = '/'
    // e.preventDefault();    
    // var xhr = this._create();
    // console.log('_onSubmit');
    // console.log(xhr);
    // xhr.done(this._onSuccess)
    // .fail(this._onError)
    // .always(this.hideLoading)
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
              <button type="submit" className="btn btn-success" style={ styles.marginbutton }>Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
})

module.exports = Manage