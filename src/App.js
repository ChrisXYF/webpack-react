import React, { Component } from 'react';
import Header from './Header'
import Current from './Current'
import Finished from './Finished'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            preList:[],
            afterList: []
        }
        this.addPreData = this.addPreData.bind(this)
        this.addFinished = this.addFinished.bind(this)
        this.addAfterList = this.addAfterList.bind(this)
        this.deletePreData = this.deletePreData.bind(this)
        this.deleteAftData = this.deleteAftData.bind(this)
    }
    componentDidMount(){
        this._loadMes()
        this._loadMesTwo()
    }
    _loadMes(){
        let preList = localStorage.getItem('preList')
        if(preList){
            preList = JSON.parse(preList)
            this.setState({
                preList
            })
        }
    }
    _loadMesTwo(){
        let afterList = localStorage.getItem('afterList')
        if(afterList){
            afterList = JSON.parse(afterList)
            this.setState({
                afterList
            })
        }
    }
    _saveMes(list){
        if(list){
            localStorage.setItem('preList',JSON.stringify(list))
        }
    }
    _saveMesTwo(list){
        if(list){
            localStorage.setItem('afterList',JSON.stringify(list))
        }
    }
    addPreData(mes){
        if(!mes) return
        let list = this.state.preList
        list.push(mes)
         this.setState({
             preList : list
         })
         this._saveMes(list)
    }
    addFinished(index){
        let list = this.state.preList
        let newList = this.state.afterList
        newList.push(list[index])
        this.setState({
            afterList:newList
        })
        this._saveMesTwo(newList)
        
        list.splice(index,1)
        this.setState({
            preList:list
        })
        this._saveMes(list)
    }
    addAfterList(index){
        let list = this.state.afterList
        let newList = this.state.preList
        newList.push(list[index])
        this.setState({
            preList:newList
        })
        this._saveMes(newList)
    //    console.log(index)
        list.splice(index,1)
        this.setState({
            afterList:list
        })
        this._saveMesTwo(list)
    }
    deletePreData(index){
        let list =this.state.preList
        list.splice(index,1)
        this.setState({
            preList:list
        })
        this._saveMes(list)

    }
    deleteAftData(index){
        let list =this.state.afterList
        list.splice(index,1)
        this.setState({
            afterList:list
        })
        this._saveMesTwo(list)

    }
    render() {
        return (
            <div>
                   <Header onhandleData={this.addPreData}/>
                   <Current preList={this.state.preList} addFinishedList={this.addFinished} deletePreData={this.deletePreData}/>
                   <Finished afterList={this.state.afterList} addAfterList={this.addAfterList} deleteAftData={this.deleteAftData} />
            </div>
        )
    }
}
export default App