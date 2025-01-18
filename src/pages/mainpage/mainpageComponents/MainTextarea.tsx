import styled from "styled-components";

interface MainTextareaProps extends React.InputHTMLAttributes<HTMLInputElement> {
	$width?: string;
	$maxwidth?: string;
	$height?: string;
	$padding?: string;
	$border?: string;
	$borderRadius?: string;
	$backgroundColor?: string;
}

const MainTextarea = styled.textarea<MainTextareaProps>`
  display: flex;
  flex-direction: row;
  width: ${(props) => props.$width || "auto"};
  max-width: ${(props) => props.$maxwidth || "none"};
  height: ${(props) => props.$height || "auto"};
  padding: ${(props) => props.$padding || "0"};
  border: ${(props) => props.$border || "1px solid #D9D9D9"};
  border-radius: ${(props) => props.$borderRadius || "1rem"};
  background-color: ${(props) => props.$backgroundColor || '#F4F4F5'};
`;

export default MainTextarea;
