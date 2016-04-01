import React, { Component } from 'react';
import ChatBox from './ChatBox';
import Jumbotron from './Jumbotron';

class Sidebar extends Component {
  render() {
    return (
      <div className="col m4 hide-on-small-and-down grey lighten-4 height-92 height-min-510px">
        <Jumbotron socket={this.props.socket}/>
        <ChatBox socket={this.props.socket} />
      </div>
    );
  }
}

export default Sidebar;
