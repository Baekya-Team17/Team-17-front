import styled from 'styled-components';
import CustomButton from '../../components/CustomButton';
import CustomColumn from '../../components/CustomColumn';
import CustomFont from '../../components/CustomFont';
import CustomInput from '../../components/CustomInput';
import HeaderBox from '../../components/HeaderBox';
import { colors } from '../../styles/colors';

const SignUpContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  a {
    margin: 0 1rem;
  }
`;
function LoginPage() {
  return (
    <CustomColumn
      $width="100%"
      $height="100vh"
      $justifycontent="space-between"
      $alignitems="flex-start"
      $padding="0 16px 16px 16px"
    >
      <CustomColumn
        $width="100%"
        $justifycontent="flex-start"
        $alignitems="flex-start"
        $gap="6px"
      >
        <HeaderBox title="로그인" $marginbottom="8rem" />
        <CustomFont $fontweight="bold" $font="2rem">
          닉네임
        </CustomFont>
        <CustomInput placeholder="닉네임"></CustomInput>
        <CustomFont $fontweight="bold" $font="2rem">
          비밀번호
        </CustomFont>
        <CustomInput
          placeholder="비밀번호"
          $marginbottom="2.3rem"
        ></CustomInput>
        <SignUpContainer>
          <CustomFont $fontweight="bold" $font="1.8rem">
            아직 계정이 없다면?
          </CustomFont>
          <CustomFont $fontweight="bold" $font="1.8rem" $color={colors.Primary}>
            회원가입
          </CustomFont>
        </SignUpContainer>
      </CustomColumn>
      <CustomButton
        $color="white"
        $backgroundColor={colors.Primary}
        $height="6.4rem"
        $borderRadius="3.2rem"
        $font="2.2rem"
      >
        로그인 하기
      </CustomButton>
    </CustomColumn>
  );
}

export default LoginPage;
