import styled from "styled-components";

export const ContainerInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 314.1px;
    height: 28px;
    border: 1px solid #D9D9D9;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    flex-grow: 1;
`

export const Input = styled.input`
background-color: #FFFFFF;
    border: none;
    width: 100%;
    height: 100%;
    padding-left: 9px;
    
    
    ::placeholder {
        color: #9A9A9A;
    
    }

    :focus-visible{
        outline: none;
    }
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    border: none;
    height: 100%;
    width: 30px;
    border-radius: 3px;

    :hover{
        cursor: pointer;
    }
`
