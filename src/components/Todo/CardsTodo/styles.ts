import styled from "styled-components";

export const Card = styled.div`
    max-width: 390px;
    height: 440px;
    background-color: #BAE2FF;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const CardHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 23px;
    height: 44px;
    border-bottom: 1px solid #FFFFFF;
`

export const Title = styled.strong`
    color: #4F4F4D;
    font-size: 14.2px;
`

export const Description = styled.p`
    padding: 14px 23px;
    color: #4F4F4D;
    font-size: 13px;
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
