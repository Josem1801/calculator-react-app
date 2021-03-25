import React from 'react'
import './Item.css'
function Item({value, click,color}) {
    return (
        <input type="button" style={{background:`${color}`}} onClick={click} value={value} className='button'/>
    )
}

export default Item
