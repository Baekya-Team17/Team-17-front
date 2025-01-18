import CustomButton from "./components/CustomButton";
import CustomColumn from "./components/CustomColumn"
import CustomFont from "./components/CustomFont"
import { useNavigate } from "react-router-dom";
import CustomRow from "./components/CustomRow";

function App() {
  const navigate = useNavigate();

  const GoLogin = () => {
    navigate("/loginpage");
  };
  const GoSignup = () => {
    navigate("/signuppage");
  };

  return (
    <CustomColumn $width="100%" $minHeight="90vh" $gap='30vh'>

      <CustomRow $width="90%" $justifycontent="flex-start">
        <CustomFont $color='black' $font="1.5rem">서비스명</CustomFont>
      </CustomRow>

      <CustomColumn $width="90%" $gap="1rem">
        <CustomButton onClick={GoLogin}>
          <CustomFont $color="black">로그인하러 가기</CustomFont>
        </CustomButton>
        <CustomButton onClick={GoSignup}>
          <CustomFont $color="black">회원가입하러 가기</CustomFont>
        </CustomButton>
      </CustomColumn>
    </CustomColumn>
  )
}

export default App
