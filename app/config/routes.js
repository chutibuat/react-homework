var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var MainContainer = require('../containers/MainContainer');
var MemberListContainer = require("../containers/MemberListContainer");
var ManageContainer = require("../containers/ManageContainer");

var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute header='User List' component={MemberListContainer} />
      <Route path='create' header='Create User' component={ManageContainer} />
      <Route path='update' header='User Profile' component={ManageContainer} />
    </Route>
  </Router>
);

module.exports = routes;