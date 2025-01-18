import CustomButton from '../../components/CustomButton';
import CustomColumn from '../../components/CustomColumn';
import CustomFont from '../../components/CustomFont';
import CustomInput from '../../components/CustomInput';
import HeaderBox from '../../components/HeaderBox';
import { colors } from '../../styles/colors';

function SignupPage() {
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
        <HeaderBox title="회원가입" $marginbottom="2.5rem" />
        <CustomFont $fontweight="bold" $font="2rem">
          닉네임
        </CustomFont>
        <CustomInput placeholder="닉네임"></CustomInput>
        <CustomButton
          $height="4.2rem"
          $backgroundColor={colors.Primary}
          $color="white"
          $width="wrap-content"
          $borderRadius="2.1rem"
          $font="1.6rem"
          $padding="1.5rem 2rem"
        >
          중복확인
        </CustomButton>
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
  );
}

export default SignupPage;
