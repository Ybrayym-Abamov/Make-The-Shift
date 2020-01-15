import React from "react";
import { Sidebar, Menu, Checkbox, Divider } from "semantic-ui-react";
import "./SideBar.css";

function SideBar() {
  return (
    <div id="sidebar">
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible
        width="thin"
        style={{
          backgroundColor: "white",
          borderRight: "1px solid lightgray"
        }}
      >
        <div style={{ height: "65px" }} />
        <h3>Sort By</h3>

        <Divider />
        <Checkbox radio label="Popularity" />
        <Checkbox radio label="Most Recent" />

        <h3>Filter By</h3>
        <Divider />
        <Checkbox label="Hardware" />
        <Checkbox label="Plumbing" />
        <Checkbox label="Kitchenware" />
        <Checkbox label="Containers" />
      </Sidebar>
    </div>
  );
}

export default SideBar;
