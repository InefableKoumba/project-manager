import styled from "styled-components";

export const Layout = styled.div`
    height: auto;
    background-color: teal;
   
`
export const AddNewProjectBtn = styled.button`
    padding: 1rem;
    border-radius: .2rem;
    border: none;
    font-weight: 500;
    
    
`
export const ProjectsContainer = styled.main`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem;
    padding: 2rem 5rem 5rem 5rem;
    

    @media screen and (max-width: 1000px) {
        & {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }
    @media screen and (max-width: 650px) {
        & {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
    }
    
`

export const Project = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #f5f5f5;
    border-radius: .3rem;
    padding: 1.5rem;
    box-shadow: #491e4240 0px 1px 5px 0px;
    
`

export const ProjectTitle = styled.main`
    font-size: 1.8rem;
    font-weight: 500;
`
export const ProjectDescription = styled.main`
    font-size: 1.6rem;
    margin: 1.2rem 0;
`
export const ProjectActionButtons = styled.main`
    display: flex;
    column-gap:2rem;
    justify-content: flex-end
`
export const ProjectOpenButton = styled.button`
    color: white;
    padding: 1rem 1.2rem;
    background-color: blue;
    border-radius: .3rem;
    border:none
`
export const ProjectDeleteButton = styled.button`
    color: white;
    padding: 1rem 1.2rem;
    background-color: red;
    border-radius: .3rem;
    border:none
`