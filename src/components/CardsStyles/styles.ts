import styled from 'styled-components';

export const ContainerTodo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 25px;
`;
export const ContainerList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerFavoriteOrNo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 25px;
  position: relative;

  p {
    font-size: 12px;
    margin-right: 50%;
  }
`;

export const Task = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  @media (min-width: 1000px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 35px;
  }
`;

export const CardTodoList = styled.form<{ colorBack: string }>`
  width: 100%;
  max-width: 390px;
  height: 440px;
  background-color: ${({ colorBack }) => colorBack};
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const CardTodoForm = styled.form`
  width: 100%;
  max-width: 390px;
  min-height: 100px;
  background-color: #ffffff;
  border-radius: 25px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1000px) {
    max-width: 550px;
    border-radius: 0px;
  }
`;

export const TextAreaTodoList = styled.textarea<{ error?: boolean }>`
  width: 100%;
  height: 340px;
  padding: 14px 23px;
  color: #4f4f4d;
  font-size: 13px;
  resize: none;
  border: 0;
  background-color: transparent;

  :focus {
    outline: none;
  }
`;
export const TextAreaNew = styled.input<{ error?: boolean }>`
  width: 100%;
  height: 50px;
  padding: 14px 23px;
  color: #50656e;
  font-size: 13px;
  resize: none;
  border: 0;
  background-color: transparent;

  :focus {
    outline: none;
  }
`;

export const Button = styled.button`
  width: 80px;
  padding: 7px 10px;
  color: black;
  font-size: 13px;

  cursor: pointer;
  border: 0;
  border-radius: 8px;
  background-color: #a9a9a9;
  //display: none;
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 23px;
  height: 44px;
  border-bottom: 1px solid #ffffff;

  div {
    cursor: pointer;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const Title = styled.input<{ error?: boolean }>`
  width: 90%;
  height: 30px;
  border: none;
  background-color: transparent;
  color: #4f4f4d;
  font-size: 14.2px;
  font-weight: 700;

  :focus-visible {
    outline: none;
  }

  ::placeholder {
    color: #4f4f4d;
    font-size: 14.2px;
    font-weight: 700;
  }
`;

export const ErrorText = styled.span`
  color: red;
  margin-left: 20px;
  font-size: 12px;
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  align-content: space-between;
`;

export const FooterTodoList = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 14px 23px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    height: 30px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    padding: 0px;
    background-color: transparent;
    width: 30px;
    height: 33px;
  }
`;

export const FooterTodoForm = styled.footer`
  justify-content: space-between;
  align-items: center;
  padding: 14px 23px;
  display: none;
  box-sizing: border-box;
`;
