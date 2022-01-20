import React, { useCallback } from 'react'
import TodoItem from '../TodoItem'
import {connect} from 'react-redux'

const TodoList = ({ list, removeItem }) => {
  const onClickRemove = useCallback((item) => {
    removeItem(item)
  }, [removeItem])

  return (
    <div>
      {list && list.map(i => <TodoItem key={i.item} {...i} onClickRemove={onClickRemove}/>)}
    </div>
  )
}

const mapStateToProps = state => {
    return {
        list: state.items
    }
}
const mapDispatchToProps = dispatch => {
    return {
        removeItem: value => dispatch({type: 'REMOVE_ITEM', payload: value})
    }
}

 export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
