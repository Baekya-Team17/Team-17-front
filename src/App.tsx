import { useNavigate } from "react-router-dom";
import CustomButton from "./components/CustomButton";
import CustomColumn from "./components/CustomColumn"
import CustomFont from "./components/CustomFont"
import StyledImg from "./components/StyledImg";
import moon from '../src/assets/Landing_icon_moon.svg';
import post from '../src/assets/Landing_img_post.svg';

function App() {
  const navigate = useNavigate();

  const GoLogin = () => {
    navigate("/loginpage");
  };
  const GoSignup = () => {
    navigate("/signuppage");
  };

  return (
    <CustomColumn $width="100%" $minHeight="100vh" $gap="10vh" style={{ background: "linear-gradient(to bottom, #2C1B5B, #B8A4D4, #BAA8D9)" }}>

      <CustomColumn $width="90%" $height="30%" $justifycontent="center" $alignitems='flex-start' $gap="2rem">
        <CustomColumn $height="5vh" />
        <StyledImg src={moon} />
        <CustomFont $color='white' $font="2rem">8시 우체통</CustomFont>

        <CustomColumn $width="100%" $alignitems="flex-start" $justifycontent="center" $gap='0.5rem'>
          <CustomFont $color='white' $font="1rem">당신의 마음 속</CustomFont>
          <CustomFont $color='white' $font="1rem">이야기를 전해주세요.</CustomFont>
        </CustomColumn>
      </CustomColumn>

      <CustomColumn $width="90%" $height="70%" $alignitems="flex-end" $gap="0">
        <StyledImg src={post} $height="30%" />
        <CustomColumn $width="100%" $gap="1rem">
          <CustomButton onClick={GoLogin} $backgroundColor="#694FA0" $borderRadius="2rem">
            <CustomFont $color="white">로그인 하기</CustomFont>
          </CustomButton>
          <CustomButton onClick={GoSignup} $backgroundColor="#694FA0" $borderRadius="2rem">
            <CustomFont $color="white">회원가입 하기</CustomFont>
          </CustomButton>
        </CustomColumn>
        <CustomColumn $height="3vh" />
      </CustomColumn>
    </CustomColumn>
  )
}

export default App
