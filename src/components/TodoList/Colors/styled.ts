import styled from 'styled-components';

export const Colors = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: absolute;
  bottom: -85px;
  left: 60px;
  width: 290px;
  height: 100px;
  padding: 5px 10px;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #d9d9d9;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  background-color: #ffffff;
  z-index: 1;

  @media (min-width: 1000px) {
    width: 515px;
    height: 46px;
    flex-direction: row;
    left: -60px;
    bottom: -35px;
    gap: 5px;
  }
`;

export const Circle = styled.button`
  background: lightblue;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;
  border: none;
`;
