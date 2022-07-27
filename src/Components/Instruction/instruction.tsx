import React, {FunctionComponent} from 'react'

const Instruction: FunctionComponent = () => {
    return <div className="instruction-container">
        <p>
            Press the <span>"add card"</span> button to add the new card.
            Use the <span>"sort cards"</span> button to short the cards by the increase.
            Press an <span>X</span> icon on the top right to delete them
        </p>
    </div>
}

export default Instruction