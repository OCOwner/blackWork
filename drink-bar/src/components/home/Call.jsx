import styled from "styled-components";
import CallBtn from "../public/CallBtn";
import MassageBtn from "../public/MassageBtn";

const Call = () => {
    return (
        <CallandMassage>
            <CallBtn />
            <MassageBtn />
        </CallandMassage>
    );
}
export default Call;

const CallandMassage = styled.div`
    display: flex;
    justify-content: flex-start; /* 왼쪽으로 정렬 */
    margin-left: 110px;
`;