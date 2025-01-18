import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import CustomFont from './CustomFont';
import styled from 'styled-components';

interface HeaderBoxProps {
  title: string;
  $marginbottom?: string;
}

const Container = styled.div<{ $marginbottom?: string }>`
  width: 100%;
  height: 5.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 10px;
  margin-bottom: ${(props) => props.$marginbottom || '1rem'};
  div {
    width: 2.4rem;
  }
`;

const HeaderBox = ({ title, $marginbottom }: HeaderBoxProps) => {
  const navigate = useNavigate();
  return (
    <Container $marginbottom={$marginbottom}>
      <IoIosArrowBack size="2.4rem" onClick={() => navigate(-1)} />
      <CustomFont $font="22px" $fontweight="bold">
        {title}
      </CustomFont>
      <div></div>
    </Container>
  );
};

export default HeaderBox;
