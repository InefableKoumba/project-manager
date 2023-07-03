import styled from "styled-components";

export const TopbarContainer = styled.nav`
    width: 100%;
    background-color: teal;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.2rem;
    align-items: center;
    position: fixed;
    box-shadow:  0 0 #0000,  0 0 #0000,0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`
export const Profile = styled.div`
    border-radius: 100%;
    width: 4rem;
    height:4rem;
    background-color: #fff;
`
export const Logo = styled.div`
    border-radius: 100%;
    width: 5rem;
    height: 5rem;
    background-color: white;
`
export const OpenedProjectTitle = styled.div`
    font-size: 2rem;
    color: white
`