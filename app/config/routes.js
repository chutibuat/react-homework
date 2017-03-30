var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require("../components/Home");
var Create = require("../components/Create");
var PromptContainer = require("../containers/PromptContainer");

var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute header='User List' component={Home} />
      <Route path='create' header='Create User' component={Create} />
      <Route path='playerOne' header='Player One' component={PromptContainer} />
    </Route>
  </Router>
);

module.exports = routes;