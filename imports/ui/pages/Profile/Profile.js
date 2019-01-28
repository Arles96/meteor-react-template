import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import PropTypes from 'prop-types';


import './Profile.scss';

class Profile extends React.Component {
  componentWillMount() {
    if (!this.props.loggedIn) {
      return this.props.history.push('/login');
    }
  }

  shouldComponentUpdate(nextProps) {
    if (!nextProps.loggedIn) {
      nextProps.history.push('/login');
      return false;
    }
    return true;
  }

  render() {
    return (
      <div className="profile-page">

      </div>
    );
  }
}

Profile.defaultProps = {
  counter: null,
};

Profile.propTypes = {

};

export default withTracker(() => {
  // counters example
  return undefined;
})(Profile);
