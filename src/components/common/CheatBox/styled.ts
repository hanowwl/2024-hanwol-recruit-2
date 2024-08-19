import styled from "@emotion/styled";

export const ApplyingButton = styled.button`
  height: 50px;
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 10px;
  border: none;


  @media (max-width: 768px) {
    margin: 0 auto;
  }

  &:hover {
    cursor: pointer;
  }
`;