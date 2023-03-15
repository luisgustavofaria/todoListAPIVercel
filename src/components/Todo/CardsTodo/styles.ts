import styled from "styled-components";

interface TodoProps{
    type: string;
}

export const Card = styled.div<TodoProps>`
    width: 100%;
    max-width: 390px;
    height: ${(props) => props.type === "existingtodoCard" ? "440px" : "auto"};
    background-color: #FFFFFF;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const CardHeaderDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  :focus-within {
    height: 440px;
  }
  
  :focus-within textarea{
    height: 340px;
  }
  
  :focus-within button {
        display: block;
    }
`
export const TextAreaPosted = styled.textarea`
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
    margin: 0 0 10px 20px;
    cursor: pointer;
    border: 0;
    border-radius: 8px;
    background-color: #A9A9A9;
    display: none;

`
        



export const CardHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 23px;
    height: 44px;
    border-bottom: 1px solid #FFFFFF;
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

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 14px 23px;
    
        div:nth-child(1){
            display: flex;
            gap: 12px;
        }
`
