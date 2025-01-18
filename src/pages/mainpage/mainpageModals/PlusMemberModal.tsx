import React from "react";
import CustomButton from "../../../components/CustomButton";
import CustomColumn from "../../../components/CustomColumn";
import CustomFont from "../../../components/CustomFont";
import Modal from "../../../components/Modal";
import MainInput from "../mainpageComponents/MainInput";

interface PlusMemberModalProps {
	openModal: boolean;
	onClose: () => void;
}

const PlusMemberModal: React.FC<PlusMemberModalProps> = ({ openModal, onClose }) => {
	return (
		<Modal isOpen={openModal} onClose={onClose}>
			<CustomColumn $width="90%" $alignitems="center" $justifycontent="center">
				<CustomFont $color="black" $fontweight="bold">가족 추가</CustomFont>
				<CustomFont $color="black">아이디를 검색하여 추가해주세요.</CustomFont>

				<MainInput $width="100%" $padding="1rem 0.5rem" placeholder="가족 아이디" />

				<CustomButton $width='100%' onClick={onClose} $padding="0.5rem">
					<CustomFont $color="black" $fontweight="bold">추가하기</CustomFont>
				</CustomButton>
			</CustomColumn>
		</Modal>
	);
};

export default PlusMemberModal;
