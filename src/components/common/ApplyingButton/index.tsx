import React from "react";

import * as S from "./styles";

import { useRouter } from "next/router";

export interface ApplyingButtonProps {
  isActive: boolean;
}

export const ApplyingButton: React.FC<ApplyingButtonProps> = ({ isActive }) => {
  const route = useRouter();

  const redirect = () => {
    if (isActive) {
      route.push(
        "https://docs.google.com/forms/d/e/1FAIpQLSfpF-_e_RfxWKwhPN5XdkJrRysmdgF_sxvhF4jHxcyVvclgCA/viewform",
      );
    }
  };

  return (
    <a>
      <S.ApplyingButton onClick={redirect}>
        {isActive ? "지원하기" : "모집중이 아닙니다"}
      </S.ApplyingButton>
    </a>
  );
};
