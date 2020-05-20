import React from 'react'
import './to-top.css'

export default class ToTop extends React.Component {

  state = {
    transform: false
  }

  goToTop = () => {
    // to top button
    this.setState({transform: true})
    setTimeout(() => {
      window.scrollTo(0, 0)
      this.setState({transform: false})
    }, 500)
  }
  render() {
    return (
      <>
        <div className="to-top btn btn-primary" onClick={this.goToTop}>
          <i className="fas fa-arrow-up" />
        </div>
        <div className={`transformbg ${this.state.transform ? 'transforming' : ''}`}/>
      </>
    )
  }
}
