import styled from "styled-components";

export const SidebarContainer = styled.nav`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    background-color: teal;
    align-items: center;
    padding:  5rem 2rem;

    @media screen and (max-width: 1000px) {
        & {
            display:none;
        }
    }
   
    
`
export const SidebarItem = styled.div`
    border-radius: 100%;
    background: #fff;
    width: 3rem;
    height: 3rem;

`