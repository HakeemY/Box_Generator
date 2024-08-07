import { useState } from 'react'

const BoxForm = (props) => {

    const {stateUpdater} = props

    const [boxColor, setBoxColor] = useState("red")
    const [boxWidth, setBoxWidth] = useState("250")
    const [boxHeight, setBoxHeight] = useState("250")

    const makeBox = (e) => {

        e.preventDefault();

        // if (isNaN(width) || isNaN(height)) {
        //     // error condition
        //     console.error("Width and height must be valid numbers!");
        //     return;
        // }

        let newValue = {
            boxColor: boxColor,
            boxWidth: boxWidth + "px",
            boxHeight: boxHeight + "px"
        }

        stateUpdater(newValue)

        setBoxColor("blue")
        setBoxWidth("250")
        setBoxHeight("250")
    }


    return (
        <>
            <form onSubmit={ makeBox }>
                <div className='formBox'>
                    <label htmlFor="boxColor">Color In Box</label>
                    <input id="boxColor" value={boxColor} type="text" onChange={ (e) => setBoxColor(e.target.value) } />
                </div>
                <div className='formBox'>
                    <label htmlFor="boxWidth">Width (px)</label>
                    <input id="boxWidth" value={boxWidth} type="number" min="1" max="500" onChange={ (e) => setBoxWidth(e.target.value) }/>
                    {
                        boxWidth < 1 || boxWidth > 500 ? 
                        <p>Box Width must be between 1 and 500 pixels</p> :
                        <p></p>
                    }
                </div>
                <div className='formBox'>
                    <label htmlFor="boxHeight">Height (px)</label>
                    <input id="boxHeight" value={boxHeight} type="number" onChange={ (e) => setBoxHeight(e.target.value) } />
                    {
                        boxHeight < 1 || boxHeight > 500 ? 
                        <p>Box Height must be between 1 and 500 pixels</p> :
                        <p></p>
                    }
                </div>
                <button>Add</button>
            </form>
        </>
    );
}

export default BoxForm;