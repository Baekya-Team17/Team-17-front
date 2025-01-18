import { useState } from "react";

import CustomColumn from "../../components/CustomColumn";
import CustomBox from "../../components/CustomBox";

import IfParent from "./mainpageBlocks/IfParent";
import IfChild from "./mainpageBlocks/IfChild";
import LetterComponent from "./LetterComponent";

import backImg from "../../assets/Main_backImg.svg";

function MainPage() {
	const [openLetter, isOpenLetter] = useState(false);

	const handleLetter = () => {
		isOpenLetter(true); // LetterComponent 열기
	};

	const closeLetter = () => {
		isOpenLetter(false); // LetterComponent 닫기
	};

	return (
		<CustomBox $width="100%" $height="auto" $padding="0" $backgroundimg={backImg}>
			<CustomColumn $width="100%" $minHeight="100vh" $justifycontent="flex-start" $gap="10rem">
				{/* 서버와 연동하여, 이 유저가 자녀인지/부모인지에 따라 다르게 렌더링하기 */}
				{/* <IfChild /> */}
				<IfParent onOpenLetter={handleLetter} />

				{openLetter && (
					<>
						<LetterComponent onClose={closeLetter} />
						<CustomColumn $height="1rem" />
					</>
				)}
			</CustomColumn>
		</CustomBox>
	);
}

export default MainPage;
