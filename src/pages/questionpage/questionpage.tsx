import CustomBox from "../../components/CustomBox";
import CustomButton from "../../components/CustomButton";
import CustomColumn from "../../components/CustomColumn";
import CustomFont from "../../components/CustomFont";
import MainTextarea from "../mainpage/mainpageComponents/MainTextarea";
import writingPad from "../../assets/writingPad.png";
import CustomRow from "../../components/CustomRow";
import styled from "styled-components";

const FloatingButton = styled(CustomButton)`
  position: fixed;
  bottom: 5rem;
  border-radius: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
`;

function QuestionPage() {

	const aiQuestions = [
		"자신의 인생에서 가장 중요한 사람은 누구였나요? 그 이유는 무엇인가요?",
		"다음 세대에게 전하고 싶은 삶의 교훈은 무엇인가요?",
		"어린 시절 가장 행복했던 기억은 무엇인가요?",
		"삶에서 가장 큰 도전은 무엇이었고, 그것을 어떻게 극복했나요?",
		"현재의 나에게 해주고 싶은 말은 무엇인가요?",
	];

	return (
		<CustomColumn
			$width="100%"
			$minHeight="100vh"
			$gap="6rem"
			style={{ background: "linear-gradient(to bottom, #2C1B5B, #B8A4D4, #BAA8D9)" }}
		>
			<CustomColumn $height="1vh" />
			<CustomFont $color="white" $fontweight="bold" $font="2rem">
				부모님을 향한 질문을 남겨주세요!
			</CustomFont>

			<CustomBox $width="90%" $height="40rem" $backgroundimg={writingPad} $padding="1rem" $borderradius="3rem">
				<MainTextarea
					$width="100%"
					$height="100%"
					placeholder="질문을 입력해주세요."
					$backgroundColor="transparent"
					$border="none"
				/>
			</CustomBox>

			<CustomRow $width="90%" $justifycontent="flex-start">
				<CustomFont $color="white" $font="3rem">
					AI 추천 질문
				</CustomFont>
			</CustomRow>

			<CustomColumn $width="100%" $alignitems="center" $justifycontent="center" $gap="1rem">
				{aiQuestions.map((question, index) => (
					<CustomBox
						key={index}
						$width="90%"
						$height="auto"
						$backgroundimg={writingPad}
						$padding="1rem"
					>
						<CustomFont $color="black" $font="1.5rem">
							{question}
						</CustomFont>
					</CustomBox>
				))}
				<CustomColumn $height="2vh" />
			</CustomColumn>

			<FloatingButton $width="400px" $height="auto" $padding="1rem" $backgroundColor="#694FA0">
				<CustomFont $color="white" $font="1.5rem">
					질문 등록하기
				</CustomFont>
			</FloatingButton>
		</CustomColumn>
	);
}

export default QuestionPage;
