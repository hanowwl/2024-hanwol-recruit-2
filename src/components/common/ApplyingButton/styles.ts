import styled from "@emotion/styled";

export const ApplyingButton = styled.button`
  width: 250px;
  height: 50px;
  background-color: #4785fa;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 10px;
  border: none;
  z-index: 999999;

  @media (max-width: 768px) {
    margin: 0 auto;
  }

  &:hover {
    cursor: pointer;
  }
`;
