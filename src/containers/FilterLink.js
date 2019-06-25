import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Link from '../components/Link'

const mapFilterStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
};

const mapFilterDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    },
  };
};

export default connect(
  mapFilterStateToProps,
  mapFilterDispatchToProps,
)(Link);
