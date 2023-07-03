import styled from "styled-components";

export const NewItemFormContainer = styled.div`
    display: flex;
    flex-direction: column;
   
    align-items: flex-end;
    
`;

export const NewItemButton = styled.button`
    background-color: #5aac44;
    border-radius: .3rem;
    border: none;
    box-shadow: none;
    color: #fff;
    padding: .6rem 1.2rem;
    text-align: center;
`

export const NewItemTitleInput = styled.input`
    border-radius: .3rem;
    border: none;
    box-shadow: #091e4240 0px 1px 5px 0px;
    margin-bottom: 0.5rem;
    padding: 0.8rem 1rem;
    width: 100%;
`
export const NewItemDescriptionInput = styled.textarea`
    border-radius: 3px;
    border: none;
    box-shadow: #091e4240 0px 1px 5px 0px;
    margin-bottom: 0.5rem;
    padding: 0.8rem 1rem;
    width: 100%;
    height: 10rem
`