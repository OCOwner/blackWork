import styled from "styled-components";

const Number = () => {
    return (
        <Container>
            <NameNumber>010-3102-0233 신동실장</NameNumber>
        </Container>
    );
}
export default Number;
const Container = styled.div`
    background-color: ${(props) => props.theme.color.background};
    color: #ffffff;
    display: flex;
    justify-content: center; /* 세로 방향에서 가운데 정렬 */
    margin: -30px;
`;
const NameNumber = styled.p`
    font-size:50px;
`;