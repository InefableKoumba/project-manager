import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
`;

export const ProjectTitleInput = styled.input`
    padding: 1rem;
    border-radius: .5rem;
    margin-bottom: 1rem;
    width: 50rem;
    border: solid #333 1px;
`;

export const ProjectDescriptionInput = styled.textarea`
    padding: 1rem;
    border-radius: .5rem;
    width: 50rem;
`;
export const ProjectSubmitButton = styled.button`
    padding: 1rem 3rem;
    border-radius: .5rem; 
    margin-top: 1rem;
    border: none;
`;