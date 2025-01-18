import styled from 'styled-components';
import { colors } from '../styles/colors';

interface CustomInputProps {
  $font?: string;
  $color?: string;
  $fontweight?: string;
  $fontfamily?: string;
  $marginbottom?: string;
}

const CustomInput = styled.input<CustomInputProps>`
  height: 6.4rem;
  width: 100%;
  padding: 20px;
  font-size: ${(props) => props.$font || '2rem'};
  color: ${(props) => props.$color || '#000000'};
  font-weight: ${(props) => props.$fontweight || 'normal'};
  font-family: ${(props) => props.$fontfamily || 'none'};
  margin-bottom: ${(props) => props.$marginbottom || '34px'};
  border: none;
  border-radius: 14px;
  background-color: ${colors.Gray100};
  outline: none;
`;

export default CustomInput;
