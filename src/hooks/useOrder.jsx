import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { primaryType, orderByStats, deleteFilter, resetPage, orderByAll, orderByCreated, orderByOriginal } from '../actions'

export const useOrder = () => {
  const [order, setOrder] = useState({ value: false, text: '' })
  const [type, setType] = useState({ value: false, text: '' })
  const [ori, setOri] = useState({ value: false, text: '' })
  const dispatch = useDispatch()

  const handleType = (e) => {
    dispatch(resetPage(true))
    if (type.value && order.value && ori.value) {
      handleClose(ori.text)
      dispatch(primaryType(e.target.textContent, true))
      setType({ ...type, value: true, text: e.target.textContent })
      const orderByBef = orderByStats(order.text)
      dispatch(orderByBef(true))
    } else if (type.value && ori.value) {
      handleClose(ori.text, false)
      dispatch(primaryType(e.target.textContent, true))
      setType({ ...type, value: true, text: e.target.textContent })
    } else if (type.value && order.value) {
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
    dispatch(resetPage(true))
    setOrder({ ...order, text: e.target.textContent, value: true })
    const orderBy = orderByStats(e.target.textContent)
    dispatch(orderBy(true))
  }

  const handleClose = (filter) => {
    if (filter === 'order') {
      dispatch(resetPage(true))
      setOrder({ ...order, value: false })
      if (type.value && ori.value) {
        dispatch(deleteFilter('origin', ori.text))
        dispatch(primaryType(type.text, true))
      } else if (type.value) dispatch(deleteFilter('order', type.text))
      else if (ori.value) dispatch(deleteFilter('origin', ori.text))
      else dispatch(deleteFilter())
    } else if (filter === 'type') {
      setType({ ...type, value: false })
      if (order.value && ori.value) {
        dispatch(deleteFilter('origin', ori.text))
        const orderAll = deleteFilter('type', order.text)
        dispatch(orderAll(true))
      } else if (order.value) {
        dispatch(resetPage(true))
        const orderAll = deleteFilter('type', order.text)
        dispatch(orderAll(false))
      } else if (ori.value) dispatch(deleteFilter('origin', ori.text))
      else dispatch(deleteFilter())
    } else {
      setOri({ ...ori, value: false })
      dispatch(orderByAll())
    }
  }

  const handleOrigin = (origin) => {
    dispatch(resetPage(true))
    if (type.value || order.value) {
      if (origin === 'All') {
        dispatch(orderByAll())
        setOri({ ...ori, value: true, text: origin })
      } else if (origin === 'Created') {
        dispatch(orderByCreated(true))
        setOri({ ...ori, value: true, text: origin })
      } else {
        dispatch(orderByOriginal(true))
        setOri({ ...ori, value: true, text: origin })
      }
    } else if (origin === 'All') {
      dispatch(orderByAll())
      setOri({ ...ori, value: true, text: origin })
    } else if (origin === 'Created') {
      dispatch(orderByCreated(false))
      setOri({ ...ori, value: true, text: origin })
    } else {
      dispatch(orderByOriginal(false))
      setOri({ ...ori, value: true, text: origin })
    }
  }

  return {
    type,
    order,
    ori,
    handleClose,
    handleOrder,
    handleType,
    handleOrigin
  }
}
