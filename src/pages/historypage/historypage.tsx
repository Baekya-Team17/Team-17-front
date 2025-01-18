import CustomBox from '../../components/CustomBox';
import CustomColumn from '../../components/CustomColumn';
import CustomFont from '../../components/CustomFont';
import { colors } from '../../styles/colors';
import styled from 'styled-components';
import backImg from '../../assets/Main_backImg.svg';
import { useNavigate } from 'react-router-dom';

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-image: linear-gradient(to right, black 60%, transparent 40%);
  background-size: 8px 1px; /* 점선의 반복 크기 (길이+공백) */
`;

const WritingBox = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.2rem 1.8rem;
  background-image: url('src/assets/writingPad.png'); /* 이미지 경로 */
  border-radius: 2.4rem;
  gap: 1.5rem;
  background-size: cover; /* 이미지를 컨테이너에 맞게 */
  background-position: center; /* 이미지 중심 위치 */
`;
const AnswerText = styled.div`
  color: black;
  font-size: 1.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const FixedBtn = styled.div`
  position: fixed;
  padding: 1.5rem 1.8rem;
  width: auto;
  height: 5rem;
  font-size: 1.6rem;
  background-color: ${colors.Primary};
  color: white;
  border-radius: 2.5rem;
  margin-left: 210px;
  bottom: 90px;
`;
function HistoryPage() {
  const navigate = useNavigate();

  // 질문, 답변 mockData
  const historyData = [
    { question: '가장 행복했던 순간은?', answer: '너희들이 태어났을 때' },
    {
      question: '너무 힘들었던 순간은 언제인가요?',
      answer:
        'IMF 때 우리 가족을 먹여살려야 할 때 IMF 때 우리 가족을 먹여살려야 할 때 IMF 때 우리 가족을 먹여살려야 할 때 IMF 때 우리 가족을 먹여살려야 할 때 IMF 때 우리 가족을 먹s여살려야 할 때 IMF 때 우리 가족을 먹여살려야 할 때 IMF 때 우리 가족을 먹여살려야 할 때',
    },
    {
      question: '화가 났던 때는 언제인가요?',
      answer: '너희가 말을 안 들으면...^^',
    },
  ];

  return (
    <CustomBox $width="420px" $height="auto" $backgroundimg={backImg}>
      <CustomColumn
        $width="420px"
        $minHeight="92vh"
        $alignitems="center"
        $justifycontent="flex-start"
        $gap="1.5rem"
      >
        <CustomColumn $height="0.5vh" />
        <CustomFont $font="2.2rem" $color="white">
          지난 질문
        </CustomFont>
        <CustomColumn $height="0.3vh" />

        {historyData.map((item, index) => (
          <WritingBox key={index}>
            <CustomFont $color="black" $font="1.6rem">
              Q. {item.question}
            </CustomFont>
            <Divider />
            <AnswerText>{item.answer}</AnswerText>
          </WritingBox>
        ))}
        <FixedBtn onClick={() => navigate('/questionpage')}>
          직접 질문 등록하기
        </FixedBtn>
      </CustomColumn>
    </CustomBox>
  );
}

export default HistoryPage;
