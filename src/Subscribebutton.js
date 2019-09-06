import React from "react";
import Subscribe from "./Subscribe/Subscribe";
class Subscribebutton extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
    this.onToggleSubscribe = this.onToggleSubscribe.bind(this);
  }
  onToggleSubscribe() {
    this.setState({
      active: !this.state.active
    });
  }
  render() {
    const Subscribesec = <Subscribe />;
    return (
      <div>
        <button className="subscribebtn" onClick={this.onToggleSubscribe}>
          Subscribe <i class="material-icons">keyboard_arrow_down</i>
        </button>
        <div className="subscribeoverlay">
          {this.state.active ? Subscribesec : null}
        </div>
      </div>
    );
  }
}
export default Subscribebutton;
