import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CustomButton from '../../components/CustomButton';
import CustomColumn from '../../components/CustomColumn';
import CustomFont from '../../components/CustomFont';
import CustomInput from '../../components/CustomInput';
import HeaderBox from '../../components/HeaderBox';
import CustomBox from '../../components/CustomBox';
import { colors } from '../../styles/colors';
import { postLogin, PostLogin } from '../../apis/User';

const SignUpContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  a {
    margin: 0 1rem;
  }
`;

const ErrorMessage = styled.span<{ hasError?: boolean }>`
  font-size: 1.4rem;
  margin-top: 4px;
  color: ${({ hasError }) => (hasError ? 'red' : 'transparent')};
  height: 1.6rem;
  display: block;
  transition: color 0.3s ease;
`;

function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const response = await postLogin(data);
      console.log('로그인 성공:', response.data);
      window.localStorage.setItem('logiData', response.data);
      // 성공 시 처리 로직 (예: 페이지 이동)
      navigate('/mainpage');
    } catch (error: any) {
      console.error('로그인 실패:', data);
      // 실패 시 에러 처리 (예: 사용자에게 알림)
    }
  };

  return (
    <CustomBox
      $width="420px"
      $height="auto"
      $backgroundcolor={colors.Gray100}
      $padding="1rem"
      $overflowx="hidden"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomColumn
          $width="420px"
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
              이메일
            </CustomFont>
            <CustomInput
              placeholder="이메일"
              {...register('email', {
                required: '이메일을 입력해주세요.',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: '유효한 이메일 형식이 아닙니다.',
                },
              })}
            />
            <ErrorMessage hasError={!!errors.email}>이메일오류 </ErrorMessage>
            <CustomFont $fontweight="bold" $font="2rem">
              비밀번호
            </CustomFont>
            <CustomInput
              placeholder="비밀번호"
              type="password"
              {...register('password', {
                required: '비밀번호를 입력해주세요.',
                minLength: {
                  value: 4,
                  message: '비밀번호는 최소 4자리 이상이어야 합니다.',
                },
              })}
            />
            <ErrorMessage hasError={!!errors.password}>
              비밀번호 빈 값
            </ErrorMessage>
            <SignUpContainer>
              <CustomFont $fontweight="bold" $font="1.8rem">
                아직 계정이 없다면?
              </CustomFont>
              <CustomFont
                $fontweight="bold"
                $font="1.8rem"
                $color={colors.Primary}
                onClick={() => navigate('/positionpage')}
              >
                회원가입
              </CustomFont>
            </SignUpContainer>
          </CustomColumn>
          <CustomButton
            type="submit" // submit 버튼
            $color="white"
            $backgroundColor={colors.Primary}
            $height="6.4rem"
            $borderRadius="3.2rem"
            $font="2.2rem"
          >
            로그인 하기
          </CustomButton>
        </CustomColumn>
      </form>
    </CustomBox>
  );
}

export default LoginPage;
