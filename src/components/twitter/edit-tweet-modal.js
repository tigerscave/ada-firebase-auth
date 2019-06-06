import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { userLogout } from "../../redux/reducers/logout";

class EditTweetModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetText: "",
      selectedImage: "",
      image: ""
    };

    this.onTweetImageChange = e => {
      this.setState({
        selectedImage: window.URL.createObjectURL(e.target.files[0]),
        image: e.target.files[0]
      });
    };

    this.onTweetTextChange = e => {
      this.setState({
        tweetText: e.target.value
      });
    };
  }

  componentDidMount() {
    const { tweet } = this.props;
    this.setState({
      selectedImage: tweet.imageUrl
    });
  }

  render() {
    const { onCanceled, onConfirmed, tweet, tweetImage } = this.props;
    const { tweetText, selectedImage, image } = this.state;
    return (
      <div className="container">
        <div>
          <textarea
            placeholder={tweet.content}
            onChange={this.onTweetTextChange}
            value={tweetText}
            rows="6"
            cols="40"
          />
          <div>
            <img width="200" src={tweetImage} />
            <input onChange={this.onTweetImageChange} type="file" />
          </div>
        </div>
        <div>
          <button className="close" onClick={() => onCanceled(false)}>
            Cancel
          </button>

          <button className="close">Confirm</button>
        </div>
        <style jsx>{`
          .container {
            position: absolute;
            top: 10rem;
            left: 15rem;
            width: 10rem;
            height: 10rem;
            //  background: lightGray;
            width: 450px;
            height: 300px;
          }
          button.close {
            marginbottom: 1rem;
          }
        `}</style>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     onLogoutButtonClicked: () => dispatch(userLogout())
//   };
// };

EditTweetModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  onLogoutButtonClicked: PropTypes.func.isRequired
};

export default connect(
  null
  // mapDispatchToProps
)(EditTweetModal);
