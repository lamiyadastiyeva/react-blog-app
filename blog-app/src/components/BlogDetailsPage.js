import React from 'react'
import { connect } from 'react-redux'
import BlogDetailsItem from './BlogDetailsItem'

const BlogDetailsPage = (props) => {
  return (
    <div><BlogDetailsItem {...props.sendValue}/></div>
  )
}

const mapStateToProps = (state, props) => {
    return{
        sendValue: state.item.find((blog)=>{
            return blog.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(BlogDetailsPage)