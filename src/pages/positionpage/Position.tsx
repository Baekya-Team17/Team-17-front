import React from 'react';
import CustomColumn from '../../components/CustomColumn';
import HeaderBox from '../../components/HeaderBox';
import CustomFont from '../../components/CustomFont';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { colors } from '../../styles/colors';
import styled from 'styled-components';
import CustomBox from '../../components/CustomBox';
import Child from '../../assets/Child';
import Parent from '../../assets/Parent';
import { useNavigate } from 'react-router-dom';

const PositionBox = styled.div`
  border-radius: 2rem;
  height: auto;
  width: 100%;
  box-shadow: 2px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding-right: 2.4rem;
  svg {
    margin-top: 5rem;
  }
`;

const position = () => {
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
          $gap="6px"
        >
          <HeaderBox title="회원가입" $marginbottom="2.5rem" />
          <CustomFont $font="2.6rem">당신은 어떤 역할인가요?</CustomFont>
          <CustomColumn $height="3.5rem" />
          <PositionBox onClick={() => navigate('/signuppage')}>
            <CustomColumn
              $alignitems="flex-start"
              $padding="3.8rem 2.4rem 2.4rem"
              $gap="1.2rem"
            >
              <CustomFont $font="3rem">부모</CustomFont>
              <CustomFont $font="1.8rem">
                하루에 한번
                <br />
                질문에 답변해요
              </CustomFont>
            </CustomColumn>
            <Parent />
          </PositionBox>
          <CustomColumn $height="2rem" />
          <PositionBox onClick={() => navigate('/searchparentpage')}>
            <CustomColumn
              $alignitems="flex-start"
              $padding="3.8rem 2.4rem 2.4rem"
              $gap="1.2rem"
            >
              <CustomFont $font="3rem">자식</CustomFont>
              <CustomFont $font="1.8rem">
                부모님의 몰랐던 <br />
                이야기를 전해들어요
              </CustomFont>
            </CustomColumn>
            <Child />
          </PositionBox>
        </CustomColumn>
      </CustomColumn>
    </CustomBox>
  );
};

export default position;
