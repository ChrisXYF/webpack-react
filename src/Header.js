import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
        this.changeData = this.changeData.bind(this)
        this.sendMes = this.sendMes.bind(this)
    }
    changeData(ev) {
        this.setState({
            data: ev.target.value
        })
    }
    sendMes(e) {
        if (e.keyCode === 13) {
            if (this.props.onhandleData)
                this.props.onhandleData(this.state.data)
             this.setState({
                 data:''
             })
        }
    }
    render() {
        return (
            <div className='header'>
                <h1>TodoList</h1>
                <span><input type="text" placeholder="add events" value={this.state.data} onChange={this.changeData} onKeyUp={this.sendMes} /></span>
            </div>
        )
    }
}
Header.defaultProps = {
    onhandleData: PropTypes.func
}

export default Header  