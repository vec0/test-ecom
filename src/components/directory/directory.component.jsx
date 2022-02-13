import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import { connect } from "react-redux";
import { selectDirectorySelections } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";

class Directory extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.selectedSections.map(({ id, ...rest }) => {
          return <MenuItem key={id} {...rest} />;
        })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  selectedSections: selectDirectorySelections,
});

export default connect(mapStateToProps)(Directory);
