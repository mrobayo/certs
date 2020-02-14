import PropTypes from "prop-types";

const aiux = props => {
  return props.children;
};

aiux.propTypes = {
  children: PropTypes.node.isRequired
};

export default aiux;
