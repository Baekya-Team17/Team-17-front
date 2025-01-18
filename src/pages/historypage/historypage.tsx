import CustomBox from "../../components/CustomBox";
import CustomColumn from "../../components/CustomColumn";
import CustomFont from "../../components/CustomFont";
import CustomDivider from "../../components/CustomDivider";

function HistoryPage() {
	// 질문, 답변 mockData
	const historyData = [
		{ question: "가장 행복했던 순간은?", answer: "너희들이 태어났을 때" },
		{ question: "너무 힘들었던 순간은 언제인가요?", answer: "IMF 때 우리 가족을 먹여살려야 할 때" },
		{ question: "화가 났던 때는 언제인가요?", answer: "너희가 말을 안 들으면...^^" },
	];

	return (
		<CustomColumn $width="100%" $minHeight="100vh" $alignitems="center" $justifycontent="flex-start">
			<CustomColumn $height="1vh" />
			{historyData.map((item, index) => (
				<CustomBox
					key={index}
					$width="90%"
					$height="auto"
					$alignitems="center"
					$justifycontent="center"
					$padding="1rem 0.5rem"
					$backgroundcolor="#F4F4F5"
				>
					<CustomColumn $width="100%" $height="auto">
						<CustomFont $color="black">Q. {item.question}</CustomFont>
						<CustomDivider $width="90%" $height="1px" $backgroundcolor="#D9D9D9" />
						<CustomFont $color="black">A. {item.answer}</CustomFont>
					</CustomColumn>
				</CustomBox>
			))}
		</CustomColumn>
	);
}

export default HistoryPage;
