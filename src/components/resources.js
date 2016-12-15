// @flow
import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getDefaultData} from '../actions/index.js'

class Resource extends Component {
  static propTypes = {

  }
  static defaultProps = {

  }
  state = {

  }
  componentWillMount = () => {
  }
  componentDidMount = () => {
  }
  componentWillReceiveProps = (nextProps) => {
    console.info('nextProps', nextProps)
  }
  componentWillUpdate = (nextProps, nextState) => {
  }
  componentDidUpdate = (prevProps, prevState) => {
  }
  handleClick = (e) => {
    e.preventDefault()
    this.props.getDefaultData()

  }
  render = () => {
    return (
    <div>
      <div style={{display: this.props.isSpinnerOn ? 'block' : 'none'}}>
        <img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'/>
      </div>
      <a href onClick={this.handleClick}>get Data From Server!</a>
      {this.props.resource}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.data,
    ...state.spinner
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getDefaultData
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Resource)