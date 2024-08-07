const Box = (props) => {
    const {currentBoxs} = props
    const {setCurrentBoxs} = props

    const removeBox = (deleteBox) => {
        const newBox = currentBoxs.filter((box) => box !== deleteBox)
        setCurrentBoxs(newBox)
    }


    return (
        <div className="square">
            {
                currentBoxs.map((box, index) => (
                    <div key={index}>
                        <p style={{background:box.boxColor, width:box.boxWidth, height:box.boxHeight}}>
                            <button onClick={() => removeBox(box)}>Delete</button>
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default Box