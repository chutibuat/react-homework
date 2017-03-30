var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var Create = React.createClass({
  render: function () {
    return (
        <div>
        <h1>{this.props.route.header}</h1>
          <div className="clearfix"></div>
        
          <form className="form-horizontal">
            <div className="form-group">
              <label htmlFor="firstName" className="col-sm-2 col-sm-offset-2 control-label">Firstname</label>
              <div className="col-sm-6">
                <input type="text" className="form-control" id="firstName" placeholder="Firstname"/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="lastName" className="col-sm-2 col-sm-offset-2 control-label">Lasttname</label>
              <div className="col-sm-6">
                <input type="text" className="form-control" id="lastName" placeholder="Lasttname"/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail" className="col-sm-2 col-sm-offset-2 control-label">Email</label>
              <div className="col-sm-6">
                <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="mobilePhone" className="col-sm-2 col-sm-offset-2 control-label">Mobile</label>
              <div className="col-sm-6">
                <input type="number" className="form-control" id="mobilePhone" placeholder=""/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="file" className="col-sm-2 col-sm-offset-2 control-label">Avatar</label>
              <div className="col-sm-6">
                <input type="file" className="form-control" id="file" placeholder=""/>
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
});

module.exports = Create;