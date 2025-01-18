import CustomBox from "../../components/CustomBox"
import CustomButton from "../../components/CustomButton"
import CustomColumn from "../../components/CustomColumn"
import CustomFont from "../../components/CustomFont"
import MainInput from "../mainpage/mainpageComponents/MainInput"

function QuestionPage() {

	return (
		<CustomColumn $width="100%" $minHeight="100vh" $gap="6rem">
			<CustomFont $color='black' $fontweight="bold" $font="1rem">부모님을 향한 질문을 남겨주세요.</CustomFont>

			<CustomColumn $width="100%" $alignitems="center" $justifycontent="center" $gap="3rem">
				<CustomColumn $width="90%" $alignitems="flex-start" $justifycontent="center">
					<CustomFont $color="black">AI 추천 질문:</CustomFont>
					<CustomBox $width="100%" $height="5rem" $backgroundcolor="#D9D9D9">
						<CustomFont $color="black">질문질문질문</CustomFont>
					</CustomBox>
				</CustomColumn>

				<CustomColumn $width="90%" $alignitems="flex-start" $justifycontent="center">
					<CustomFont $color="black">내 질문 작성하기:</CustomFont>
					<MainInput $width="100%" $padding="1rem" $backgroundColor="#F4F4F5" placeholder="여기 질문 작성" />
				</CustomColumn>
			</CustomColumn>

			<CustomButton $width='90%' $padding="1rem" $backgroundColor="#352462">
				<CustomFont $color="white">질문 등록하기</CustomFont>
			</CustomButton>
		</CustomColumn>
	)
}

export default QuestionPage
