import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import CustomBox from "../../components/CustomBox";
import CustomButton from "../../components/CustomButton";
import CustomColumn from "../../components/CustomColumn";
import CustomFont from "../../components/CustomFont";
import MainTextarea from "../mainpage/mainpageComponents/MainTextarea";
import writingPad from "../../assets/writingPad.png";
import CustomRow from "../../components/CustomRow";

const FloatingButton = styled(CustomButton)`
  position: fixed;
  bottom: 5rem;
  border-radius: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
`;

function QuestionPage() {
	const [aiQuestions, setAiQuestions] = useState<string[]>([]); // AI 질문 상태
	const [loading, setLoading] = useState<boolean>(true); // 로딩 상태

	useEffect(() => {
		// GPT API 호출 함수
		const fetchQuestions = async () => {
			try {
				setLoading(true); // 로딩 시작
				const apiKey = import.meta.env.VITE_GPT_KEY;
				const response = await axios.post(
					"https://api.openai.com/v1/chat/completions",
					{
						model: "gpt-4-turbo",
						messages: [
							{
								role: "system",
								content:
									"너는 자녀가 부모에게 궁금할만한 내용을 질문으로 만들어야 한다.한번에 총 10개를 생성하라. 모든 질문은 존댓말로 끝나야 하며, 10개의 질문 중 중복이 있어서는 안된다.",
							},
						],
						max_tokens: 300,
						temperature: 0.7,
					},
					{
						headers: {
							Authorization: `Bearer ${apiKey}`,
							"Content-Type": "application/json",
						},
					}
				);

				// 응답에서 질문 추출
				const generatedQuestions = response.data.choices[0].message.content
					.split("\n")
					.filter((q: string) => q.trim() !== "")
					.map((q: string) => q.replace(/^\d+\.\s*/, ""));

				setAiQuestions(generatedQuestions);
			} catch (error) {
				console.error("GPT API 호출 오류:", error);
				setAiQuestions(["AI 질문을 불러오지 못했습니다."]);
			} finally {
				setLoading(false);
			}
		};

		fetchQuestions();
	}, []);

	return (
		<CustomColumn
			$width="100%"
			$minHeight="100vh"
			$gap="6rem"
			style={{ background: "linear-gradient(to bottom, #2C1B5B, #B8A4D4, #BAA8D9)" }}
		>
			<CustomColumn $height="1vh" />
			<CustomFont $color="white" $fontweight="bold" $font="2rem">
				부모님을 향한 질문을 남겨주세요!
			</CustomFont>

			<CustomBox $width="90%" $height="40rem" $backgroundimg={writingPad} $padding="1rem" $borderradius="3rem">
				<MainTextarea
					$width="100%"
					$height="100%"
					placeholder="질문을 입력해주세요."
					$backgroundColor="transparent"
					$border="none"
				/>
			</CustomBox>

			<CustomRow $width="90%" $justifycontent="flex-start">
				<CustomFont $color="white" $font="3rem">
					AI 추천 질문
				</CustomFont>
			</CustomRow>

			<CustomColumn $width="100%" $alignitems="center" $justifycontent="center" $gap="1rem">
				{loading ? (
					<CustomFont $color="white" $font="1.5rem">
						AI 질문을 생성 중입니다...
					</CustomFont>
				) : (
					aiQuestions.map((question, index) => (
						<CustomBox
							key={index}
							$width="90%"
							$height="auto"
							$backgroundimg={writingPad}
							$padding="1rem"
						>
							<CustomFont $color="black" $font="1.5rem">
								{question}
							</CustomFont>
						</CustomBox>
					))
				)}
				<CustomColumn $height="2vh" />
			</CustomColumn>

			<FloatingButton $width="400px" $height="auto" $padding="1rem" $backgroundColor="#694FA0">
				<CustomFont $color="white" $font="1.5rem">
					질문 등록하기
				</CustomFont>
			</FloatingButton>
		</CustomColumn>
	);
}

export default QuestionPage;
