import styled from "styled-components";

import CustomButton from "../../../components/CustomButton";
import CustomColumn from "../../../components/CustomColumn";
import CustomFont from "../../../components/CustomFont";
import StyledImg from "../../../components/StyledImg";
import CustomRow from "../../../components/CustomRow";

import letter from "../../../assets/Main_icon_letter.svg";
import parent from "../../../assets/Main_icon_isParent.svg";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: auto;
  height: auto;
`;

const CenteredText = styled(CustomFont)`
  position: absolute;
  top: 60%;
  left: 60%;
  transform: translate(-50%, -50%);
  color: black;
  font-size: 1.5rem;
  white-space: nowrap;
`;

interface IfParentProps {
	onOpenLetter: () => void; // 부모에서 전달받은 함수
}

function IfParent({ onOpenLetter }: IfParentProps) {
	return (
		<>
			<CustomColumn $width="100%" $alignitems="center" $justifycontent="center">
				<CustomColumn $height="2vh" />
				<CustomRow $width="90%" $justifycontent="flex-start">
					<Wrapper>
						<StyledImg src={parent} />
						<CenteredText>부모</CenteredText>
					</Wrapper>
				</CustomRow>
			</CustomColumn>

			<CustomColumn $width="100%" $alignitems="center" $justifycontent="center" $gap="1rem">
				<CustomFont $color="white" $font="2rem">
					오늘의 질문을 받아볼까요?
				</CustomFont>
				<CustomButton
					$backgroundColor="transparent"
					$padding="0"
					$width="auto"
					$height="auto"
					onClick={onOpenLetter} // 버튼 클릭 시 부모의 상태 변경 함수 실행
				>
					<StyledImg src={letter} />
				</CustomButton>
			</CustomColumn>
		</>
	);
}

export default IfParent;
