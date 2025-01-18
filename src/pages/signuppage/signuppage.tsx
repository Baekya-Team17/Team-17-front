import React from 'react';
import { useForm } from 'react-hook-form';
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
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 1.4rem;
  padding: 8px;
  height: 6.4rem;
`;

export const StyledInput = styled.input`
  border: none;
  width: 70%;
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
const ErrorMessage = styled.span<{ hasError?: boolean }>`
  font-size: 1.4rem;
  color: ${({ hasError }) => (hasError ? 'red' : 'transparent')};
  height: 2.7rem;
  display: block;
  transition: color 0.3s ease;
`;
function SignupPage() {
  const {
    register, // Input 필드와 연결
    handleSubmit, // 폼 제출 핸들러
    formState: { errors }, // 유효성 검증 에러 관리
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <CustomBox $width="100%" $height="auto" $backgroundcolor={colors.Gray100}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              <StyledInput
                {...register('nickname', {
                  required: '닉네임을 입력해주세요.',
                })} // react-hook-form과 연결
                placeholder="닉네임"
              />
              <StyledButton type="button">중복확인</StyledButton>
            </InputWrapper>
            <ErrorMessage hasError={!!errors.nickname}>
              닉네임 오류
            </ErrorMessage>

            <CustomFont $fontweight="bold" $font="2rem">
              이메일
            </CustomFont>
            <CustomInput
              {...register('email', {
                required: '이메일을 입력해주세요.',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: '유효한 이메일 형식이 아닙니다.',
                },
              })}
              placeholder="이메일"
            />
            <ErrorMessage hasError={!!errors.email}>
              이메일을 입력해주세요.
            </ErrorMessage>

            <CustomFont $fontweight="bold" $font="2rem">
              비밀번호
            </CustomFont>
            <CustomInput
              {...register('password', {
                required: '비밀번호를 입력해주세요.',
                minLength: {
                  value: 4,
                  message: '비밀번호는 최소 4자리 이상이어야 합니다.',
                },
              })}
              type="password"
              $marginbottom="0.6rem"
              placeholder="비밀번호"
            />

            <CustomInput
              {...register('confirmPassword', {
                required: '비밀번호 확인을 입력해주세요.',
                validate: (value, formValues) =>
                  value === formValues.password ||
                  '비밀번호가 일치하지 않습니다.',
              })}
              type="password"
              placeholder="비밀번호 확인"
            />
            <ErrorMessage hasError={!!errors.confirmPassword}>
              비밀번호 오류입니다.
            </ErrorMessage>
          </CustomColumn>
          <CustomButton
            type="submit" // submit 버튼으로 설정
            $color="white"
            $backgroundColor={colors.Primary}
            $height="6.4rem"
            $borderRadius="3.2rem"
            $font="2.2rem"
          >
            회원가입 하기
          </CustomButton>
        </CustomColumn>
      </form>
    </CustomBox>
  );
}

export default SignupPage;
