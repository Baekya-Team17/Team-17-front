import React from "react";
import CustomButton from "../../../components/CustomButton";
import CustomColumn from "../../../components/CustomColumn";
import CustomFont from "../../../components/CustomFont";
import CustomRow from "../../../components/CustomRow";
import Modal from "../../../components/Modal";

interface PlusGroupModalProps {
	openModal: boolean;
	onClose: () => void;
	onSelectRole: (role: "부모" | "자녀") => void;
}

const PlusGroupModal: React.FC<PlusGroupModalProps> = ({ openModal, onClose, onSelectRole }) => {
	return (
		<Modal isOpen={openModal} onClose={onClose}>
			<CustomColumn $width="90%" $alignitems="center" $justifycontent="center">
				<CustomFont $color="black" $fontweight="bold">
					당신은 어떤 역할인가요?
				</CustomFont>
				<CustomRow $width="90%">
					<CustomButton $backgroundColor="#E4E4E7"
						onClick={() => {
							onSelectRole("부모");
							onClose();
						}}>
						<CustomFont $color="black" $fontweight="bold">
							부모
						</CustomFont>
					</CustomButton>
					<CustomButton $backgroundColor="#E4E4E7"
						onClick={() => {
							onSelectRole("자녀");
							onClose();
						}}>
						<CustomFont $color="black" $fontweight="bold">
							자녀
						</CustomFont>
					</CustomButton>
				</CustomRow>
			</CustomColumn>
		</Modal>
	);
};

export default PlusGroupModal;
