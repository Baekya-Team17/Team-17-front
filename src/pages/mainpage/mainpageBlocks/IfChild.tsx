import CustomColumn from "../../../components/CustomColumn";
import CustomFont from "../../../components/CustomFont";
import StyledImg from "../../../components/StyledImg";
import CustomRow from "../../../components/CustomRow";

import letterOff from "../../../assets/Main_icon_letter_off.svg";

function IfChild() {
	return (
		<CustomColumn $width="100%" $alignitems="center" $justifycontent="center">
			<CustomFont $color="white" $font="2rem">영숙님의 답변을 기다리는 중</CustomFont>
			<CustomRow $width="100%" $alignitems="center" $justifycontent="center">
				<CustomFont $color="#FF9E96" $font="1.5rem">7</CustomFont>
				<CustomFont $color="#FF9E96" $font="1.5rem">시간</CustomFont>
				<CustomFont $color="black" $font='1.5rem'>뒤에 열어볼 수 있어요</CustomFont>
			</CustomRow>
			<StyledImg src={letterOff} />
		</CustomColumn>
	);
}

export default IfChild;