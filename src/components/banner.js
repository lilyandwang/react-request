import React,{Component} from "react";
import {connect} from "react-redux";
import {goodsListAction} from "../action/actionCreator";

class Banner extends Component{
    render(){
        let {goodsList} = this.props;
        return(
            <div>
                <ul>
                    {
                        Object.prototype.toString.call(goodsList) == "[object String]" ?<div>{goodsList}</div>:goodsList.map((item,index)=>{
                            return (
                             <li key={index}>
                                  {item.d_title}-----------
                                  {item.yuanjia}
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    componentDidMount(){
        this.props.getHomeDate();
    }
}
const mapStateToProps = (state) =>({
    goodsList:state.todoList.goodsList
})
const mapDispatchToProps = (dispatch)=>({
    getHomeDate(){
        goodsListAction(dispatch)
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Banner);