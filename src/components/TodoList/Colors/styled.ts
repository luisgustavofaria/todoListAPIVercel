import styled from "styled-components";


export const Colors = styled.div`
    position: absolute;
    bottom: -85px;
    left: 60px;
    width: 290px;
    height:100px;
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid #D9D9D9;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    background-color: #ffffff;
`
export const ContainerCircle = styled.div`
    display: flex;
    gap: 10px;
`

export const Circle = styled.button`
    background: lightblue;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    cursor: pointer;
`