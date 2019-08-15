import React from "react";
import Features from "../Features/Features";

class LaptopConfiguration extends React.Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <Features
          features={this.props.features}
          USCurrencyFormat={this.props.USCurrencyFormat}
          selected={this.props.selected}
          updateFeature={this.props.updateFeature}
        />
      </form>
    );
  }
}

export default LaptopConfiguration;
