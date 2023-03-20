import styled from 'styled-components';

export const ContainerHeader = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 15px 12px 18px 25px;
  box-shadow: 0px 1px 7px;
  gap: 15px;

  p {
    color: #455a64;
    font-size: 13px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-grow: 1;
`;
