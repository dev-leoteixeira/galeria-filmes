import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  max-width: 120px;
  cursor: pointer;
  background-color: #046ee5;
  color: white;
  font-weight: 800;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #035ac2;
    transform: scale(1.05);
  }

  &:active {
    background-color: #02429a;
    transform: scale(0.95);
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(4, 110, 229, 0.5);
  }
`;
