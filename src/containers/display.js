import React, { Component } from 'react'
import style from './style.css'

import { connect } from 'react-redux'
import  { bindActionCreators } from 'redux'
import { reducer } from '../store/redux'

class Display extends Component {

    componentDidMount(){
        this.props.getNumbersRequest() 
    }

    render() {
        return (
            <div className={style.buttonDiv}>
                <button>
                    Previous Page
                </button>
                <button>
                    Next Page
                </button>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    numbers: state.generatedData
})

const mapDispatchToProps = dispatch => bindActionCreators(reducer,dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Display)
