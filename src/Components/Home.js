import React from 'react';
import {  useDispatch } from 'react-redux';
import { decrementNum, incrementNum } from '../actions/index'

function Home(props) {
    // const myState = useSelector((state) => state.changeNum)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => dispatch(incrementNum())}>Count++</button>
            <button onClick={() => dispatch(decrementNum())}>Count--</button>
        </div>
    )
}

export default Home
