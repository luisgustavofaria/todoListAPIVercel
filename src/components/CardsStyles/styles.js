import styled from "styled-components";

export const ContainerTodo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 53px;
    margin: 25px;
    
`

export const CardTodoList = styled.form`
    width: 100%;
    max-width: 390px;
    height: 440px;
    background-color: #FFFFFF;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const CardTodoForm = styled(CardTodoList)`
    height: 100px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  
  :focus-within {
      height: 440px;
    }
    
    :focus-within textarea{
        height: 340px;
    }
    
    :focus-within footer {
        display: flex;
    }
    
`

    export const TextAreaTodoList = styled.textarea`
    width: 100%;
    height: 340px;
    padding: 14px 23px;
    color: #4F4F4D;
    font-size: 13px;
    resize: none;
    border: 0;
    background-color: transparent;

    :focus {
        outline: none;
    }
`
export const TextAreaNew = styled.textarea`
    width: 100%;
    height: 50px;
    padding: 14px 23px;
    color: #50656E;
    font-size: 13px;
    resize: none;
    border: 0;
    background-color: transparent;

    :focus {        
        outline: none;
    }
`

export const Button = styled.button`
    width: 80px;
    padding: 7px 10px;
    color: black;
    font-size: 13px;
   
    cursor: pointer;
    border: 0;
    border-radius: 8px;
    background-color: #A9A9A9;
    //display: none;

`

export const CardHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 23px;
    height: 44px;
    border-bottom: 1px solid #FFFFFF;

    button{
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
`

export const Title = styled.input`
    width: 90%;
    height: 30px;
    border: none;
    background-color: transparent;
    color: #4F4F4D;
    font-size: 14.2px;
    font-weight: 700;
    
    :focus-visible{
        outline: none;
    }
    
    ::placeholder {
        color: #4F4F4D;
        font-size: 14.2px;
        font-weight: 700;
    }

`

export const Container = styled.div`
    display: flex;
    align-content: space-between;
`

export const FooterTodoList = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 14px 23px;

        div{
            display: flex;
            align-items: center;
            gap: 12px;
        }

        button {
            border: none;
            cursor: pointer;
            padding: 5px;
            background-color: transparent;
        }
`

export const FooterTodoForm = styled.footer`
    
    justify-content: space-between;
    align-items: center;
    padding: 14px 23px;
    display: none;
        
`



