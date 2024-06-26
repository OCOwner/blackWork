// import styled from 'styled-components';

import styled from "styled-components";

const MainDescription = () => {
    return(
            <Container>
                <Manager>BAR11 석구실장 010 2073 9779</Manager>
                <ShopName>강남착석바 BAR 11</ShopName>
                <Description>
                    강남유일의, 최대 규모의 클럽형 착석바입니다.<br/> 
                    급변하는 트랜드만큼 고객님들의 니즈에 발맞추고<br/>
                    <br/>
                    기존의 진부하고 고루했던 시스템을 탈피, 끊임없이 연구한 결과<br/>
                    트랜드의 걸맞는 신개념 시스템을 도입했습니다.
                </Description>
            </Container>
    );
}

export default MainDescription;

const Container = styled.div`
    border-style: solid;
    padding-top: 300px;
    padding-bottom: 169px;
    padding-left: 80px;
`;
const Manager = styled.p`
    font-size: 24px;
`;
const ShopName = styled.p`
    font-size: 94px;
    margin-top: 10px;
    margin-bottom: 10px;
`;
const Description = styled.p`
    font-size: 17px;
`;

