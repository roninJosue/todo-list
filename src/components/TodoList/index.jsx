import React, { useCallback } from 'react'
import TodoItem from '../TodoItem'
import {connect, useDispatch, useSelector} from 'react-redux'

const TodoList = ({ list, removeItem }) => {
  const dispatch = useDispatch()
  //const items = useSelector(state => state.items)

  const onClickRemove = useCallback((item) => {

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
