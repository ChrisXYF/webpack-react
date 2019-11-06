import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Current extends Component {
    render() {
        return (
            <div className='order'>
                <h2>正在进行 ： <span>{this.props.preList.length}</span></h2>
                <div className='lists'>
                <ul>
                    {
                        this.props.preList.map((data, index) => (
                            <li key={index + Math.random()}><input type="checkbox"  onClick={()=>{if(this.props.addFinishedList){
                                this.props.addFinishedList(index)
                            }}}/> {data} <input type="button" value="X" onClick={()=>{if(this.props.deletePreData){
                                this.props.deletePreData(index)
                            }}}/></li>
                        ))
                    }
                </ul>
            </div>
            </div>
        );
    }
}
Current.defaultProps={
    preList:PropTypes.array,
    deletePreData:PropTypes.func
}


export default Current;
