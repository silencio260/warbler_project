import React from 'react'

export default function TodoItem({name, completed, onDelete, onToggle}) {
    return (
        <li
        
        style = {{textDecoration: completed? 'line-through' : 'none'}}
        >
        <span onClick={onToggle}> 
            {name}
         </span>
            <span onClick={onDelete}> X </span>
        </li>
    )
}
 