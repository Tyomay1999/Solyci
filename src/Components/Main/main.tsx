import React, {FunctionComponent, useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../Redux/store";
import {data, deleteCard} from "../../Redux/card";
import {addCard} from "../../Redux/card.action";

const Main: FunctionComponent = () => {
    const dispatch: AppDispatch = useDispatch()
    const {data} = useSelector((state: RootState) => state.card)

    const x = useCallback(() => {
        const localData: data[] | '' =
            JSON.parse(localStorage.getItem("card") || JSON.stringify(""))
        if (Array.isArray(localData) && localData.length) {
            dispatch(addCard(localData))
        }
    },[dispatch])

    useEffect(() => {
        x()
    }, [x])

    useEffect(() => {
        localStorage.setItem("card", JSON.stringify(data))
    }, [data])

    return <div className="main">
        {
            data.map(({id, number}: data) => {
                return <div key={id} className="card">
                    <h1>{number}</h1><span onClick={() => dispatch(deleteCard(id))}>X</span>
                </div>
            })
        }
    </div>
}

export default Main