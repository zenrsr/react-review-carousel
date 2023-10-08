import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    count: 0,
  }

  increment = () => {
    const {reviewsList} = this.props
    const {count} = this.state
    this.setState(prevState => ({count: prevState.count + 1}))
    if (count >= reviewsList.length - 1) {
      this.setState({count: 0})
    }
  }

  decrement = () => {
    const {reviewsList} = this.props
    const {count} = this.state
    if (count === 0) {
      this.setState({count: reviewsList.length - 1})
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} className="review-img" alt={username} />
        <p className="name">{username}</p>
        <p className="company">{companyName}</p>
        <p className="info">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {count} = this.state
    const currentReviewDetails = reviewsList[count]

    return (
      <div className="container">
        <button
          className="arrow-btn"
          type="button"
          onClick={this.decrement}
          data-testid="leftArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
            alt="left arrow"
            className="arrow"
          />
        </button>
        {this.renderActiveReview(currentReviewDetails)}
        <button
          type="button"
          className="arrow-btn"
          onClick={this.increment}
          data-testid="rightArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
            alt="right arrow"
            className="arrow"
          />
        </button>
      </div>
    )
  }
}
export default ReviewsCarousel
