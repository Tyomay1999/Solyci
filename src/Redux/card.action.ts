import {AppDispatch} from "./store";
import {setCardData} from "./card";
import {data} from "./card";

export const addCard = (data?: data[]) => (dispatch: AppDispatch) => {
    if(data?.length){
        return dispatch(setCardData(data))
    }
    const card: data = {
        id: Date.now().toString(),
        number: Math.floor(Math.random() * 597)
    }
    return dispatch(setCardData(card))
}
