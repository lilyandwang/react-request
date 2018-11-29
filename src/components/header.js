import React,{Component} from "react";
import {connect} from "react-redux";
import {numReducers} from "../store/reducers/numReducers"

class Header extends Component{
    render(){
        let {title} = this.props;
        return(
            <div>
                <div>{title}</div>
                <button onClick={this.props.handleModify}>变</button>
            </div>  
        )
    }
}
const mapStateToProps = (state)=>({
    title:state.numReducers.title
})
const mapDispatchToProps = (dispatch) =>({
    handleModify(){
        dispatch({
            type:"MODIFY",
            value:"wang"
        })
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Header);