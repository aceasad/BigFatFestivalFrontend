import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./index.css"
import Main from "views/Main.js";
import CreateTicket from "views/CreateTicket";
import UpdateTicket from "views/UpdateTicket";
import GetTicketQR from './views/GetTicketQR';
import DeleteTicket from './views/DeleteTicket';
import Admin from './views/Admin'
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={Main} />
      <Route path="/createTicket" component={CreateTicket} />
      <Route path="/updateTicket" component={UpdateTicket} />
      <Route path="/getTicketQr" component={GetTicketQR} />
      <Route path="/deleteTicket" component={DeleteTicket} />
      <Route exact path="/" component={Admin}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
