import { useState } from 'react';
import styled from 'styled-components';

const QandA = ({ title, manager, number }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const contant = [
    {
      Q: 'Q. BAR 11 CLUB 어떤 곳인가요?',
      A: 'A. 저희는 강남역에 위치한 착석바/토킹바입니다.',
    },
    {
      Q: 'Q. BAR 11 CLUB은 그럼 당연히 비싸겠죠?',
      A: 'A. 저희는 위스키 500ml 기준 병당 5만원으로 강남 최저가입니다. 아가씨TC또한 합리적입니다.',
    },
    {
      Q: 'Q. 그러면 이것 저것 추가금액이 발생되는 것 아닌가요?',
      A: 'A. 저희는 메뉴판으로 속이고 추가금액으로 고객님들을 낚지 않습니다. 메뉴판에 나와있는 것과 동일한 가격으로 진행됩니다!',
    },
    {
      Q: 'Q. BAR 11 CLUB는 왜 뒤에 클럽이 붙나요? 젊은 사람만 가는 건가요?',
      A: 'A. 아닙니다 저희는 매장의 분위기가 트렌디하고 힙한 분위기로 매장의 저희 이쁜 직원분들이 좀더 밝고 재밋게 응대해주실 수 있는 분위기입니다~!',
    },
    {
      Q: 'Q. BAR 11은 그럼 매장직원분들은 어떠한가요?',
      A: 'A. 저희 매장 직원분들은 다양한 직업군을 가지고있어 다양한 직원분들과 즐겁고 재밌는 소통을하며 술을 즐기실 수 있습니다! 또한 100%일반인 여성으로 구성되어있어 수준높은 시간을 가질수있습니다.',
    },
    {
      Q: 'Q. 이렇게 말해놓고 나중에 계산 할 때 다른소리 하는건 아니겠죠?',
      A: 'A. 저희는 모든 시스템이 종이에 적는게 아니라 전산으로 시스템화가 되어있기때문에 흔히 말해 고객님들을 눈탱이 칠 생각도 하지않고 칠 수도 없습니다. 신뢰있는 서비스로 모시겠습니다.',
    },
    {
      Q: 'Q. 혼자 가도 되나요?',
      A: 'A. 혼자 오시는 단골 고객님들도 상당히 많습니다! 편히 앉을 수 있는 자리와 분위기가 갖추어져 있어 혼자오시기에도 좋습니다.',
    },
    { Q: 'Q.아베크도 가능한가요?', A: 'A.안될 이유가 없습니다!' },
    {
      Q: 'Q. 영업시간은 어떻게 되나요?',
      A: 'A. 저희 매장 영업일은 매주 월요일~토요일 영업을 하며 영업시간은 오픈19(오후7시)시 마감 7시(오전)입니다!',
    },
    {
      Q: 'Q. 예약은 어떻게 해야하나요?',
      A: 'A. 예약사항이나 방문관련 궁금사항은 010-3102-0233 신동실장 / 카카오톡 11sd1으로 연락주시면 됩니다!',
    },
    {
      Q: 'Q. 대관도 가능한가요?',
      A: 'A. 네 가능합니다 먼저 1차적으로 협의를 거친 후에 가능합니다.',
    },
  ];

  return (
    <Container>
      <Title>{title}</Title>
      {contant.map((item, index) => (
        <Box key={index}>
          <QuestionContainer>
            <Q>{item.Q}</Q>
            <Button onClick={() => handleClick(index)}>
              {openIndex === index ? '-' : '+'}
            </Button>
          </QuestionContainer>
          {openIndex === index && <A>{item.A}</A>}
        </Box>
      ))}
      <Manager>
        {manager}
        <br />
        {number}
      </Manager>
    </Container>
  );
};
export default QandA;

const Container = styled.div`
  background-color: ${(props) => props.theme.color.background};
  color: #ffffff;
  padding: 10px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2em;
  margin-bottom: 20px;
  color: #f0f0f0; /* 제목 텍스트 색상 */
`;

const Box = styled.div`
  border: 1px solid #333;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
  border-radius: 5px;
  background-color: #2a2a2a; /* 어두운 박스 배경색 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background-color: #555;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 1.2em;
  transition: background-color 0.3s;

  &:hover {
    background-color: #777;
  }
`;

const Q = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin: 0;
  color: #fff;
`;

const A = styled.p`
  font-size: 1em;
  margin-top: 10px;
  color: #ccc; /* 답변 텍스트 색상 */
  line-height: 1.5;
`;
const Manager = styled.p`
  text-align: center;
  font-size: 20px;
`;
