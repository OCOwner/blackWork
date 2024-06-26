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
    background-color: ${(props) => props.theme.color.background};
    display: flex;
    justify-content: center;
    align-items: center;
`;