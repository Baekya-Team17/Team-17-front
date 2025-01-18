import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import CustomColumn from "../../components/CustomColumn";
import CustomFont from "../../components/CustomFont";
import CustomRow from "../../components/CustomRow";
import CustomBox from "../../components/CustomBox";

import PlusGroupModal from "./mainpageModals/PlusGroupModal";
import PlusMemberModal from "./mainpageModals/PlusMemberModal";

function MainPage() {
	const [openModal, setHandleModal] = useState(false); // PlusGroupModal 상태관리 용도
	const [haveGroup, setHaveGroup] = useState(true); // 이 유저가 그룹을 가지고 있는지에 따른 상태관리 변수
	const [inviteModal, setInviteModal] = useState(false); // PlusMemberModal 상태관리 용도
	const [haveLetter, setHaveLetter] = useState(true); // 이 유저가 부모님으로부터 받은 답장을 가지고 있는지에 따른 상태관리 변수

	// 내가 속한 그룹 mockData
	const rolesWithQuestions = [
		{ role: "부모", question: "내가 가장 자랑스러웠던 순간은 언제인가요?" },
		{ role: "부모", question: "오늘 가장 즐거웠던 일은 무엇인가요?" },
	];

	// 내가 받은 답장 mockData
	const receivedLetter = [
		{ Q: "자녀가 태어났을 때?", A: "세상을 다 가진 기분이었지." },
		{ Q: "자녀가 아팠을 땐?", A: "내가 대신 아프고 싶었어." },
	];

	const handleModal = () => { // PlusGroupModal
		setHandleModal(true);
	};

	const handleCloseModal = () => { // PlusGroupModal
		setHandleModal(false);
	};

	const handleSelectRole = (role: "부모" | "자녀") => { // 특정 역할로 그룹 개설 시 조건부 렌더링
		alert(`${role} 역할이 선택되었습니다.`);
		setHaveGroup(false);
	};

	const OpenInviteModal = () => { // PlusMemberModal
		setInviteModal(true);
	};

	const CloseMemberModal = () => { // PlusMemberModal
		alert("추가되었습니다.");
		setInviteModal(false);
	};

	return (
		<>
			<CustomColumn $width="100%" $minHeight="100vh" $justifycontent="flex-start">
				<CustomRow $width="90%" $justifycontent="flex-start">
					<CustomFont $font="1rem" $color="black">
						Logo
					</CustomFont>
				</CustomRow>

				{/* 서버로부터 유저가 속한 모든 Group 받아와서 출력하도록 수정하기 */}
				{!haveGroup && (
					<>
						{rolesWithQuestions.map((item, index) => (
							<CustomBox $width="90%" $height="auto" $backgroundcolor="transparent" $border="1px solid #D9D9D9" $padding="1rem">
								<CustomColumn $width="100%">
									<CustomRow $width="100%" $justifycontent="space-between">

										<CustomBox
											key={index}
											$width="auto"
											$height="auto"
											$padding="0.5rem 1rem"
											$backgroundcolor="#F4F4F5"
										>
											<CustomFont $color="black">{item.role}</CustomFont>
										</CustomBox>


										<CustomButton
											$width="auto"
											$height="auto"
											$padding="0.5rem 1rem"
											$backgroundColor="#F4F4F5"
											onClick={OpenInviteModal}
										>
											<CustomFont $color="black">자녀 추가</CustomFont>
										</CustomButton>
									</CustomRow>

									<CustomFont $color="black" $font="1rem" $fontweight="bold">
										오늘의 질문
									</CustomFont>

									<CustomFont key={index} $color="black" $font="1rem">
										{item.question}
									</CustomFont>
								</CustomColumn>
							</CustomBox>
						))}
					</>
				)}

				{/* 서버로부터 유저에게 보내진 질문 출력하도록 수정하기 */}
				{
					!haveGroup && (
						<CustomBox $width="90%" $height="auto" $backgroundcolor="#F4F4F5" $flexdirection="column" $alignitems="flex-start" $padding="1rem">
							<CustomFont $font="1rem" $color="black" $fontweight="bold">최근에 받은 답변</CustomFont>
							<CustomColumn $width="100%" $alignitems="center" $justifycontent="center">
								{!haveLetter && (<CustomFont $color="black">아직 부모님께서 작성해주신 답변이 없어요.</CustomFont>)}
								{haveLetter && (
									<>
										{receivedLetter.map((item, index) => (
											<CustomBox key={index} $width="90%" $height="auto" $backgroundcolor="white" $border="1px solid #D9D9D9" $padding="1rem">
												<CustomFont $color="blue">Q: {item.Q}</CustomFont>
												<CustomFont $color="blue" $fontweight="bold">Q: {item.A}</CustomFont>
											</CustomBox>
										))}
									</>
								)}
							</CustomColumn>
						</CustomBox>
					)
				}

				<CustomButton
					$flexDirection="column"
					$backgroundColor="#F4F4F5"
					$width="90%"
					$alignItems="center"
					$justifyContent="center"
					$height="10rem"
					onClick={handleModal}
				>
					<CustomFont $color="black" $font="1rem">
						+
					</CustomFont>
				</CustomButton>

				{haveGroup && (
					<CustomFont $color="#D9D9D9" $font="1rem">
						그룹을 생성해주세요!
					</CustomFont>
				)}
			</CustomColumn>

			<PlusGroupModal openModal={openModal} onClose={handleCloseModal} onSelectRole={handleSelectRole} />
			<PlusMemberModal openModal={inviteModal} onClose={CloseMemberModal} />
		</>
	);
}

export default MainPage;
