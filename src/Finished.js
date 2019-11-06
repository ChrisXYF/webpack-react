import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Finished extends Component {
    render() {
        return (
            <div className='order'>
                <h2>已经完成 ： <span>{this.props.afterList.length}</span></h2>
                <div className='lists'>
                <ul>
                    {
                        this.props.afterList.map((data, index) => (
                            <li key={index + Math.random()}><input type="checkbox" defaultChecked onClick={()=>{
                                if(this.props.addAfterList){   this.props.addAfterList(index)}
                            }}/> {data} <input type="button" value="X" onClick={()=>{if(this.props.deleteAftData){
                                this.props.deleteAftData(index)}}}/></li>
                        ))
                    }
                </ul>
            </div>
           
            </div>
        );
    }
}

Finished.defaultProps={
    afterList:PropTypes.array,
    deleteAftData:PropTypes.func
}



export default Finished;
