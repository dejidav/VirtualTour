import React, { Component } from "react";
import propTypes from "prop-types";

class ContestPreview extends React.Component {
  handleCLick = () => {
    console.log(this.props.contestName);
    this.props.onClick(this.props._id);
  };
  render() {
    return (
      <div className="link ContestPreview" onClick={this.handleCLick}>
        <div className="category-name">{this.props.categoryName}</div>
        <div className="contest-name">{this.props.contestName}</div>
      </div>
    );
  }
}

ContestPreview.propTypes = {
  _id: propTypes.string.isRequired,
  categoryName: propTypes.string.isRequired,
  contestName: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};





export default ContestPreview;