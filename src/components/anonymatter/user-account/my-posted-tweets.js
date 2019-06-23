import React from "react";
import { displayTweetsDetail } from "../../../redux/reducers/usersDetail";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import TweetContent from "../anonymatter-twitter/tweet-content";

class MyPostedTweets extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { onMyTweetsDisplay } = this.props;
    onMyTweetsDisplay();
  }
  render() {
    const { myPostedTweets } = this.props;
    return (
      <div>
        {myPostedTweets &&
          myPostedTweets.map((tweet, index) => (
            <TweetContent key={index} tweet={tweet} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { myPostedTweets, myTweetsLength } = state.usersDetail;
  return {
    myPostedTweets,
    myTweetsLength
  };
};

const matDispatchToProps = dispatch => {
  return {
    onMyTweetsDisplay: () => dispatch(displayTweetsDetail())
  };
};

MyPostedTweets.propTypes = {
  myPostedTweets: PropTypes.array,
  onMyTweetsDisplay: PropTypes.func
};

MyPostedTweets.defaultProps = {
  myPostedTweets: [],
  onMyTweetsDisplay: () => {}
};

export default connect(
  mapStateToProps,
  matDispatchToProps
)(MyPostedTweets);
