import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'

const Footer = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <button className="btn" onClick={() => dispatch(increment())}>
        Footer +
      </button>
      <button className="btn" onClick={() => dispatch(decrement())}>
        Footer -
      </button>
    </div>
  )
}

export default Footer
