// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}
  
getRandomNumber = () => Math.ceil(Math.random() * 100)


  onClickButton = () => {
      const random = this.getRandomNumber()
    this.setState(prevState => ({
      count: prevState.count + random),
    }))
  }

  

  render() {
    const {count} = this.state
    const value =count%2 === 0 ? "Even" :"Odd"
    return (
      <div className="app-container">
        <div className="count-container">
          <h1 className="heading">Count{count}</h1>
          <p className="count">Count is {value}</p>

          <button className="button" type="button">
            Increment
          </button>
          <p className="para">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
