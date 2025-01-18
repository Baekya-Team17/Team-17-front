import React from 'react';
import CustomBox from '../components/CustomBox';
import CustomColumn from '../components/CustomColumn';
import { colors } from '../styles/colors';
import HeaderBox from '../components/HeaderBox';
import {
  InputWrapper,
  StyledButton,
  StyledInput,
} from './signuppage/signuppage';
import CustomFont from '../components/CustomFont';
import CustomButton from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LineButton = styled.button`
  background: none;
  border: none;
  outline: none;
  color: #111111;
  font-size: 2rem;
  position: relative;
  padding: 8px 0;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #111111;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const SearchParentPage = () => {
  const navigate = useNavigate();

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
          $gap="1.4rem"
        >
          <HeaderBox title="회원가입" $marginbottom="2.5rem" />
          <CustomFont $fontweight="bold" $font="2rem">
            부모님의 이메일을 검색해주세요
          </CustomFont>
          <InputWrapper>
            <StyledInput placeholder="이메일" />
            <StyledButton>검색</StyledButton>
          </InputWrapper>
          <CustomBox $backgroundcolor={colors.Gray100} $margintop="6rem">
            <LineButton>연결하기</LineButton>
          </CustomBox>
        </CustomColumn>

        <CustomButton
          $color="white"
          $backgroundColor={colors.Primary}
          $height="6.4rem"
          $borderRadius="3.2rem"
          $font="2.2rem"
          onClick={() => navigate('/signuppage')}
        >
          다음
        </CustomButton>
      </CustomColumn>
    </CustomBox>
  );
};

export default SearchParentPage;
