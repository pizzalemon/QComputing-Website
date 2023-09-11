import { useState } from "react"
import styled from "styled-components"

const Years = ({ children, style, rowStyle }) => {
    const [select, setSelect] = useState(Object.keys(children)[0])

    return (
        <div style={style}>
            <StyledRow style={rowStyle}>
                {Object.keys(children).map((y) => {
                    return <StyledTab key={y} selected={y == select} onClick={() => {
                        setSelect(y)
                    }}>{y}</StyledTab>
                })}
            </StyledRow>
            {children[select]}
        </div>
    )
}

const StyledTab = styled.div`
    width: auto;
    padding: 0.25em 1em;
    background: ${props => props.selected ? "#608799" : "0"};
    transition-duration: 0.3s;
    color: ${props => props.selected ? "white" : "black"};
    border-radius: 0.3em;
    cursor: pointer;
    user-select: none;

    &:hover {
        ${props => props.selected ? "" : "background: #c8e9f7;"}
        transition-duration: 0.2s;
    }
`

const StyledRow = styled.div`
    display: flex;
    margin-top: 1em;
    gap: 1em;
`

export default Years