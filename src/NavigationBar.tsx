import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import CustomButton from "./components/CustomButton";
import CustomRow from "./components/CustomRow";
import CustomBox from "./components/CustomBox";
import CustomFont from "./components/CustomFont";
import StyledImg from "./components/StyledImg";

import NavImg from './assets/Nav_background.svg';
import NavIcon1 from './assets/Nav_icon_post.svg';
import NavIcon2 from './assets/Nav_icon_letter.svg';
import NavIcon3 from './assets/Nav_icon_my.svg';
import NavIcon1off from './assets/Nav_icon_post_off.svg';
import NavIcon2off from './assets/Nav_icon_letter_off.svg';
import NavIcon3off from './assets/Nav_icon_my_off.svg';

const NavigationBar: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const GoMain = () => {
		navigate("/mainpage");
	};

	const GoHistory = () => {
		navigate("/historypage");
	};

	// 네비바 렌더링x 경로
	const excludedPaths = ["/", "/loginpage", "/signuppage", "/questionpage"];
	if (excludedPaths.includes(location.pathname)) {
		return null;
	}

	const homeIcon = location.pathname === "/mainpage" ? NavIcon1 : NavIcon1off;
	const historyIcon = location.pathname === "/historypage" ? NavIcon2 : NavIcon2off;
	const myPageIcon = location.pathname === "/mypage" ? NavIcon3 : NavIcon3off;

	const homeColor = location.pathname === "/mainpage" ? "black" : "#71717A";
	const historyColor = location.pathname === "/historypage" ? "black" : "#71717A";
	const myPageColor = location.pathname === "/mypage" ? "black" : "#71717A";

	return (
		<CustomBox
			$width="100%"
			$height="auto"
			$backgroundcolor="#D9D9D9"
			$borderradius="0"
			$padding="0.5rem"
			$backgroundimg={NavImg}
		>
			<CustomRow $width="100%" $justifycontent="center" $alignitems="center" $gap="2rem">
				<CustomButton
					$flexDirection="column"
					$backgroundColor="transparent"
					$width="33%"
					$height="auto"
					$padding="0"
					$gap="0.5rem"
					onClick={GoMain}
				>
					<StyledImg src={homeIcon} />
					<CustomFont $color={homeColor} $fontweight="bold">홈</CustomFont>
				</CustomButton>

				<CustomButton
					$flexDirection="column"
					$backgroundColor="transparent"
					$width="33%"
					$height="auto"
					$padding="0"
					$gap="0.5rem"
					onClick={GoHistory}
				>
					<StyledImg src={historyIcon} />
					<CustomFont $color={historyColor} $fontweight="bold">우체통</CustomFont>
				</CustomButton>

				<CustomButton
					$flexDirection="column"
					$backgroundColor="transparent"
					$width="33%"
					$height="auto"
					$padding="0"
					$gap="0.5rem"
				>
					<StyledImg src={myPageIcon} />
					<CustomFont $color={myPageColor} $fontweight="bold">마이페이지</CustomFont>
				</CustomButton>
			</CustomRow>
		</CustomBox>
	);
};

export default NavigationBar;
