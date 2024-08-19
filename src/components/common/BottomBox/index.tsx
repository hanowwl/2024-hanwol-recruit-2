import React, { SVGProps } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import { GoogleFromIcon } from "src/assets";

import { AnimatePresence } from "framer-motion";

import * as S from "./styled";

export interface CloseIconProps extends SVGProps<SVGSVGElement> {}

export const BottomBox: React.FC = () => {
  const router = useRouter();

  const onBoxClick = () => {
    router.push(
      "https://docs.google.com/forms/d/e/1FAIpQLSfpF-_e_RfxWKwhPN5XdkJrRysmdgF_sxvhF4jHxcyVvclgCA/viewform",
    );
  };

  return (
    <AnimatePresence>
      <S.BottomBoxWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <S.BottomBoxContainer>
          <S.BottomBoxContentContainer onClick={onBoxClick}>
            <Image src={GoogleFromIcon} alt="구글폼" quality={100} />
            <S.BottomBoxTextContainer>
              <S.BottomBoxBoldText>학생회에 관심이 있으신가요?</S.BottomBoxBoldText>
              <S.BottomBoxText>이 팝업을 눌러 학생회에 지원 해보세요!</S.BottomBoxText>
            </S.BottomBoxTextContainer>
          </S.BottomBoxContentContainer>
        </S.BottomBoxContainer>
      </S.BottomBoxWrapper>
    </AnimatePresence>
  );
};
