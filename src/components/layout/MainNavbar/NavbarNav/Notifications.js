import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavItem, NavLink, Badge, Collapse, DropdownItem } from "shards-react";

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleNotifications = this.toggleNotifications.bind(this);
  }

  toggleNotifications() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <Router>
        <NavItem className="border-right dropdown notifications">
          <NavLink
            className="nav-link-icon text-center"
            onClick={this.toggleNotifications}
          >
            <div className="nav-link-icon__wrapper">
              <i className="material-icons">&#xE7F4;</i>
              <Badge pill theme="danger">
                3
              </Badge>
            </div>
          </NavLink>
          <Collapse
            open={this.state.visible}
            className="dropdown-menu dropdown-menu-small"
          >
            <DropdownItem>
              <div className="notification__icon-wrapper">
                <div className="notification__icon">
                  <i className="material-icons">&#xE6E1;</i>
                </div>
              </div>
              <div className="notification__content">
                <span className="notification__category">Analytics</span>
                <p>
                  You completed{" "}
                  <span className="text-success text-semibold">28%</span> 
                  of the course last week. Great job!
                </p>
              </div>
            </DropdownItem>
            <DropdownItem>
              <div className="notification__icon-wrapper">
                <div className="notification__icon">
                  <i className="material-icons">&#xE8D1;</i>
                </div>
              </div>
              <div className="notification__content">
                <span className="notification__category">Sales</span>
                <p>
                  Your professional skills development decreased{" "}
                  <span className="text-danger text-semibold">5.52%</span>. It
                  could have been worse!
                </p>
              </div>
            </DropdownItem>
            <DropdownItem className="notification__all text-center">
              View all Notifications
            </DropdownItem>
          </Collapse>
        </NavItem>
      </Router>
    );
  }
}
