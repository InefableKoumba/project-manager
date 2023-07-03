import styled from "styled-components";

export const LoginScreenContainer = styled.main`
    background: teal;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 5rem;
    
`
export const LoginForm = styled.form`
    background-color: whitesmoke;
    padding: 3rem;
    width: 40%;
    height: min-content;
    text-align: center;
    border-radius: .3rem;
    
`
export const UsernameInput = styled.input`
    width: 100%;
    padding: 1rem 1.3rem;
    border-radius: .3rem;
    border: none;
`
export const PasswordInput = styled.input`
    width: 100%;
    padding: 1rem 1.3rem;
    border-radius: .3rem;
    margin: 1rem 0;
    border: none;
    

`
export const SubmitButton = styled.button`
    background-color: blue;
    padding: 1rem 4rem;
    color: white;
    border: none;
    border-radius: .3rem;
    text-align: center;
`