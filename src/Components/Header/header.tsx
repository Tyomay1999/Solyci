import React, {FunctionComponent} from 'react'
import {addCard} from "../../Redux/card.action";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../Redux/store";
import {sortCard} from "../../Redux/card";

const Header: FunctionComponent = () => {
    const dispatch: AppDispatch = useDispatch()
    return <div className="header-container">
        <button onClick={() => dispatch(addCard())}>add card</button>
        <button onClick={() => dispatch(sortCard())}>sort cards</button>
    </div>
}

export default Header