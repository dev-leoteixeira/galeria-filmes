import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  height: 100vh; /* Preenche 100% da altura da tela */
  width: 100%; /* Preenche 100% da largura da tela */
  background-color: #f0f0f0; /* Nova cor de fundo */
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 1px 5px #0003;
  background-color: white;
  max-width: 350px;
  padding: 70px;
  border-radius: 25px;
`;



export const Label = styled.label`
  font-size: 50px;
  font-weight: 600;
  color: #00000;
  text-shadow: 1px 1px 0 #ddd, 2px 2px 0 #ccc, 3px 3px 0 #bbb, 4px 4px 0 #aaa, 5px 5px 0 #999;
  transform: perspective(500px) rotateX(40deg);
  transition: transform 0.6s ease, color 0.3s ease;

  &:hover {
    color: #ff572;
    transform: perspective(500px) rotateX(0);
  }
`;

export const LabelSignin = styled.label`
font-size: 20px;
color: #676767;
`;

export const LabelError = styled.label`
font-size: 19px;
color: red;
`;

export const Strong = styled.strong`
cursor: pointer;
a{
  text-decoration: none;
  color: #676767;
}
`;