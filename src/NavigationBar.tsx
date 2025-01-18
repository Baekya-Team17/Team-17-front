import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import CustomButton from "./components/CustomButton";
import CustomRow from "./components/CustomRow";
import CustomBox from "./components/CustomBox";
import CustomFont from "./components/CustomFont";
import StyledImg from "./components/StyledImg";

// import { MdHomeFilled } from "react-icons/md";
// import { MdLocalPostOffice } from "react-icons/md";
// import { BsPersonFill } from "react-icons/bs";

import NavImg from './assets/Nav_background.svg';
import NavIcon1 from './assets/Nav_icon_post.svg';
import NavIcon2 from './assets/Nav_icon_letter.svg';
import NavIcon3 from './assets/Nav_icon_my.svg';

const NavigationBar: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const GoMain = () => {
		navigate("/mainpage");
	};

	const GoHistory = () => {
		navigate("/historypage");
	};

	// 렌더링하지 않을 경로
	const excludedPaths = ["/", "/loginpage", "/signuppage"];
	if (excludedPaths.includes(location.pathname)) {
		return null;
	}

	// const homeIconColor = location.pathname === "/mainpage" ? "#694FA0" : "black";
	// const postOfficeIconColor = location.pathname === "/historypage" ? "#694FA0" : "black";
	// const myPageIconColor = "black";

	return (
		<CustomBox $width="100%" $height="auto" $backgroundcolor="#D9D9D9" $borderradius="0" $padding="0.5rem" $backgroundimg={NavImg}>
			<CustomRow $width="100%" $justifycontent="center" $alignitems="center" $gap="2rem">
				<CustomButton $flexDirection="column" $backgroundColor="transparent" $width="33%" $height="auto" $padding="0"
					$gap="0.5rem" onClick={GoMain}>
					<StyledImg src={NavIcon1} />
					<CustomFont $color="black">홈</CustomFont>
				</CustomButton>

				<CustomButton $flexDirection="column" $backgroundColor="transparent" $width="33%" $height="auto" $padding="0"
					$gap="0.5rem" onClick={GoHistory}>
					<StyledImg src={NavIcon2} />
					<CustomFont $color="black">우체통</CustomFont>
				</CustomButton>

				<CustomButton $flexDirection="column" $backgroundColor="transparent" $width="33%" $height="auto" $padding="0" $gap="0.5rem">
					<StyledImg src={NavIcon3} />
					<CustomFont $color="black">마이페이지</CustomFont>
				</CustomButton>
			</CustomRow>
		</CustomBox>
	);
};

export default NavigationBar;
