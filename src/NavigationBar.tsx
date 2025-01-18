import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import CustomButton from "./components/CustomButton";
import CustomRow from "./components/CustomRow";
import CustomBox from "./components/CustomBox";
import CustomFont from "./components/CustomFont";

import { MdHomeFilled } from "react-icons/md";
import { MdLocalPostOffice } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";

const NavigationBar: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const GoMain = () => {
		navigate("/mainpage");
	};

	const GoHistory = () => {
		navigate("/historypage");
	};

	// const GoMy = () => {
	// 	navigate("/mypage");
	// };

	const homeIconColor = location.pathname === "/mainpage" ? "#694FA0" : "black";
	const postOfficeIconColor = location.pathname === "/historypage" ? "#694FA0" : "black";
	const myPageIconColor = "black";

	return (
		<CustomBox $width="100%" $height="auto" $backgroundcolor="#D9D9D9" $borderradius="0" $padding="0.5rem">
			<CustomRow $width="100%" $justifycontent="center" $alignitems="center" $gap="2rem">
				<CustomButton $flexDirection="column" $backgroundColor="transparent" $width="33%" $height="auto" $padding="0"
					$gap="0.5rem" onClick={GoMain}>
					<MdHomeFilled size="2rem" color={homeIconColor} />
					<CustomFont $color={homeIconColor}>홈</CustomFont>
				</CustomButton>

				<CustomButton $flexDirection="column" $backgroundColor="transparent" $width="33%" $height="auto" $padding="0"
					$gap="0.5rem" onClick={GoHistory}>
					<MdLocalPostOffice size="2rem" color={postOfficeIconColor} />
					<CustomFont $color={postOfficeIconColor}>우체통</CustomFont>
				</CustomButton>

				<CustomButton $flexDirection="column" $backgroundColor="transparent" $width="33%" $height="auto" $padding="0" $gap="0.5rem">
					<BsPersonFill size="2rem" color={myPageIconColor} />
					<CustomFont $color={myPageIconColor}>마이페이지</CustomFont>
				</CustomButton>
			</CustomRow>
		</CustomBox>
	);
};

export default NavigationBar;
