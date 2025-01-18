import styled from 'styled-components';
import CustomBox from '../../components/CustomBox';
import CustomButton from '../../components/CustomButton';
import CustomColumn from '../../components/CustomColumn';
import CustomFont from '../../components/CustomFont';
import CustomInput from '../../components/CustomInput';
import HeaderBox from '../../components/HeaderBox';
import { colors } from '../../styles/colors';

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 1.4rem;
  padding: 8px;
  height: 6.4rem;
  margin-bottom: 3.4rem;
`;

export const StyledInput = styled.input`
  border: none;
  width: 60%;
  outline: none;
  padding: 8px 12px;
  background-color: transparent;
  font-size: 2rem;
`;

export const StyledButton = styled.button`
  background-color: ${colors.Primary};
  width: auto;
  height: 4.2rem;
  color: white;
  border: none;
  border-radius: 2.1rem;
  padding: 0.8rem 2rem;
  font-size: 1.6rem;
`;

function SignupPage() {
  return (
    <CustomBox $width="100%" $height="auto" $backgroundcolor={colors.Gray100}>
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
          <HeaderBox title="회원가입" $marginbottom="2.5rem" />
          <CustomFont $fontweight="bold" $font="2rem">
            닉네임
          </CustomFont>

          <InputWrapper>
            <StyledInput placeholder="이메일" />
            <StyledButton>중복확인</StyledButton>
          </InputWrapper>

          <CustomFont $fontweight="bold" $font="2rem">
            이메일
          </CustomFont>
          <CustomInput placeholder="이메일"></CustomInput>
          <CustomFont $fontweight="bold" $font="2rem">
            비밀번호
          </CustomFont>
          <CustomInput placeholder="비밀번호" $marginbottom="5px"></CustomInput>
          <CustomInput placeholder="비밀번호 확인"></CustomInput>
        </CustomColumn>
        <CustomButton
          $color="white"
          $backgroundColor={colors.Primary}
          $height="6.4rem"
          $borderRadius="3.2rem"
          $font="2.2rem"
        >
          회원가입 하기
        </CustomButton>
      </CustomColumn>
    </CustomBox>
  );
}

export default SignupPage;
