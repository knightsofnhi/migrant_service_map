import React, { Component } from "react";
import "components/ProviderList/provider-list.css";
import ProviderTypeDropdown from "./provider-type-dropdown";
import Search from "./search";
import DistanceDropdown from "./distance-dropdown";
import HelpIcon from "./help-icon.js";
import "./top-bar.css";
// import VisaStatusDropdown from "./visa-status-dropdown";

class TopBar extends Component {
  onSearchInputClick = () => {
    const { selectTab } = this.props;
    selectTab(0);
  };

  onDistanceSelected = distance => {
    const { changeDistanceFilter } = this.props;
    changeDistanceFilter(distance);
  };

  render() {
    const {
      // changeVisaFilter,
      providerTypes,
      toggleProviderVisibility
      // visaTypes
    } = this.props;
    const topBarItemClass = "top-bar-item";

    return (
      <div className="top-bar">
        {/* <VisaStatusDropdown
          className={topBarItemClass}
          onChange={changeVisaFilter}
          visaTypes={visaTypes}
        /> */}
        <ProviderTypeDropdown
          className={topBarItemClass}
          providerTypes={providerTypes}
          onChange={toggleProviderVisibility}
        />
        <Search
          className={topBarItemClass}
          onSearchInputClick={this.onSearchInputClick}
        />
        <DistanceDropdown
          className={topBarItemClass}
          onChange={this.onDistanceSelected}
        />
        <HelpIcon
          className={topBarItemClass}
          onSearchInputClick={this.onSearchInputClick}
        />
      </div>
    );
  }
}

export default TopBar;
