import React from "react";
import { Menu } from "semantic-ui-react";
import SearchBar from "./Search.js";
import "./Menu.css";
import {Link} from 'react-router-dom'


class MyMenu extends React.Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu className="mainMenu">
        
        <Link to='/category'>
          
        <Menu.Item
          name="CATALOG"
          active={activeItem === "CATALOG"}
          onClick={this.handleItemClick}
        >
          CATALOG
        </Menu.Item>
        </Link>

        <Link to='/'>
        <Menu.Item
          name="HOME"
          active={activeItem === "HOME"}
          onClick={this.handleItemClick}
          >
          HOME
        </Menu.Item>
        </Link>

        <SearchBar />
        <div className="logo">
          <div className="logo__icon"></div>
          <div className="logo__text">makeshift</div>
        </div>
      </Menu>
    );
  }
}

export default MyMenu;
