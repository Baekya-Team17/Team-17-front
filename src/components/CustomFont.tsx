import styled from 'styled-components';

interface CustomFontProps {
  $font?: string;
  $color?: string;
  $fontweight?: string;
  $fontfamily?: string;
}

const CustomFont = styled.a<CustomFontProps>`
  font-size: ${(props) => props.$font || '0.8rem'};
  color: ${(props) => props.$color || '#000000'};
  font-weight: ${(props) => props.$fontweight || 'normal'};
  font-family: ${(props) => props.$fontfamily || 'none'};
`;

export default CustomFont;
