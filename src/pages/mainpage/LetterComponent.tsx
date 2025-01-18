import { useState } from 'react';
import CustomButton from "../../components/CustomButton";
import CustomColumn from "../../components/CustomColumn";
import CustomFont from "../../components/CustomFont";
import CustomBox from "../../components/CustomBox";
import CustomRow from "../../components/CustomRow";
import MainTextarea from './mainpageComponents/MainTextarea';

import opendLetter from '../../assets/Main_img_openedLetter.svg';
import { HiOutlinePaperAirplane } from "react-icons/hi2";

interface LetterComponentProps {
	onClose: () => void;
}

function LetterComponent({ onClose }: LetterComponentProps) {
	const [isChild, setIsChild] = useState(false);

	return (
		<CustomBox $width='80%' $height='70rem' $backgroundimg={opendLetter} $alignitems='center' $justifycontent='center'>
			<CustomColumn $width='100%' $height='80%' $justifycontent='space-between' $alignitems='center'>
				<CustomColumn $width='90%' $justifycontent='center' $alignitems='center'>
					<CustomFont $color='black' $font='1.5rem'>01.</CustomFont>
					<CustomFont $color='black' $font='1.5rem'>
						자식이 가장 자랑스러웠던 순간은 언제였나요?
					</CustomFont>
					<CustomFont $color='black' $font='2rem'>
						---------------------------------
					</CustomFont>
					{/* 서버와 연동하여, 유저가 답변한 상태라면 Textarea와 전송버튼 대신 답변한 내용 출력하도록 하기 */}
					<>
						<MainTextarea $width='90%' $height='30rem' $backgroundColor='transparent' $border='none' placeholder='답변을 입력해주세요.' />
						<CustomRow $width='90%' $alignitems='center' $justifycontent='flex-end'>
							<CustomButton $width='auto' $height='auto' $backgroundColor='transparent' $padding='0' onClick={onClose}>
								<HiOutlinePaperAirplane style={{ fontSize: 30 }} />
							</CustomButton>
						</CustomRow>
					</>
				</CustomColumn>

				{/* 서버와 연동하여, 유저가 부모이면 이 부분 렌더링 x (isChild는 false), 유저가 자녀이면 이 부분 렌더링 o (isChild는 o) 처리하기 */}
				{isChild && (
					<CustomRow $width='90%' $justifycontent='space-between'>
						<CustomButton $width='auto' $height='auto' $padding='1rem' $backgroundColor='#694FA0'>
							<CustomFont $color='white' $font='1.5rem'>댓글 달기</CustomFont>
						</CustomButton>

						<CustomFont $color='black' $font='1.5rem'>-영숙님의 답변</CustomFont>
					</CustomRow>
				)}
			</CustomColumn>
		</CustomBox>

	);
}

export default LetterComponent;
