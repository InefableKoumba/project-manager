import styled from "styled-components";
import { STATUS } from "../../context/AppStateContext";

interface ColumnProps {
    status : STATUS
}

export const ColumnContainer = styled.div`
    background-color: aliceblue;
    border-radius:3px;
    padding:2rem .8rem;
    
`;
export const ColumnHeader = styled.div`
    margin-bottom:2rem;
`
export const ColumnTitle = styled.span<ColumnProps>`
    color: #fff;
    font-size: 1.5rem;
    padding: .5rem 1rem;
    border-radius: .3rem;
    background-color: ${(props)=>{switch (props.status) {
        case "TO DO":
            return "blue";
        case "IN PROGRESS":
            return "yellow";
        case "DONE":
                return "green";
        default:
            break;
    }}};
    
`;