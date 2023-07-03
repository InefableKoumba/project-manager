import styled from "styled-components";

export const TasksContainer = styled.div`
    display: grid;
    flex-direction: column;
    gap: 2rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    @media screen and (max-width: 1000px) {
        & {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            row-gap: 2rem;
        }
    }
    @media screen and (max-width: 650px) {
        & {
            grid-template-columns: repeat(1, minmax(0, 1fr));
            row-gap: 1rem;
        }
    }
 
`;

export const TasksScreenLayout = styled.div` 
    row-gap: 2rem;
    align-items: center;
    flex: 1;
    padding: 5rem;
    background-color: teal;

    @media screen and (max-width: 650px) {
        & {
            padding: 5rem 2rem;
        }
    }
`;
