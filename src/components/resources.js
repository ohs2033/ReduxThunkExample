// @flow
import React, {PropTypes, Component} from 'react'

export default class myclass extends Component {
  static propTypes = {

  }
  static defaultProps = {

  }
  static state = {

  }
  componentWillMount = () => {
  }
  componentDidMount = () => {
  }
  componentWillReceiveProps = (nextProps) => {
  }
  shouldComponentUpdate = (nextProps, nextState) => {
  }
  componentWillUpdate = (nextProps, nextState) => {
  }
  componentDidUpdate = (prevProps, prevState) => {
  }
  handleClick = (e) => {
    e.preventDefault()

  }
  render = () => {
    return <div><a href onClick={this.handleClick}>get Data From Server!</a></div>
  }
}
