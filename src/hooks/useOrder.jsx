import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { primaryType, orderByStats, deleteFilter } from '../actions'

export const useOrder = () => {
  const [order, setOrder] = useState({ value: false, text: '' })
  const [type, setType] = useState({ value: false, text: '' })
  const dispatch = useDispatch()

  const handleType = (e) => {
    if (type.value && order.value) {
      dispatch(primaryType(e.target.textContent, false))
      setType({ ...type, value: true, text: e.target.textContent })
      const orderByBef = orderByStats(order.text)
      dispatch(orderByBef(true))
    } else if (type.value) {
      setType({ ...type, value: true, text: e.target.textContent })
      dispatch(primaryType(e.target.textContent, false))
    } else {
      setType({ ...type, value: true, text: e.target.textContent })
      dispatch(primaryType(e.target.textContent, true))
    }
  }

  const handleOrder = (e) => {
    setOrder({ ...order, text: e.target.textContent, value: true })
    const orderBy = orderByStats(e.target.textContent)
    dispatch(orderBy(true))
  }

  const handleClose = (filter) => {
    if (filter === 'order') {
      setOrder({ ...order, value: false })
      if (type.value) dispatch(deleteFilter('order', type.text))
      else dispatch(deleteFilter())
    } else if (filter === 'type') {
      setType({ ...type, value: false })
      if (order.value) {
        const orderAll = deleteFilter('type', order.text)
        dispatch(orderAll(false))
      } else dispatch(deleteFilter())
    }
  }

  return {
    type,
    order,
    handleClose,
    handleOrder,
    handleType
  }
}
