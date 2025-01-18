import CustomButton from "./components/CustomButton";
import CustomColumn from "./components/CustomColumn"
import CustomFont from "./components/CustomFont"
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const GoLogin = () => {
    navigate("/loginpage");
  };
  const GoSignup = () => {
    navigate("/signuppage");
  };

  return (
    <CustomColumn $width="100%" $minHeight="100vh">
      <CustomFont $color='black'>여기는 랜딩페이지</CustomFont>

      <CustomButton onClick={GoLogin}>
        <CustomFont $color="black">로그인하러 가기</CustomFont>
      </CustomButton>
      <CustomButton onClick={GoSignup}>
        <CustomFont $color="black">회원가입하러 가기</CustomFont>
      </CustomButton>
    </CustomColumn>
  )
}

export default App
