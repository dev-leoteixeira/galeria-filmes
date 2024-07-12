import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 20px;
  margin: 20px;
  width: 220px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #f9f9f9, #e3e3e3);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 80%;
    height: auto;
    border-radius: 25px;
    transition: transform 0.3s, opacity 0.3s;

    &:hover {
      transform: scale(1.05);
      opacity: 0.9;
    }
  }

  h3 {
    margin: 16px 0 8px;
    font-size: 1.5em;
    color: #333;
  }

  p {
    margin: 0 0 8px;
    color: #666;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 10px;
    cursor: pointer;
    margin: 4px;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
      background-color: #0056b3;
      transform: scale(1.05);
    }

    &:active {
      background-color: #004494;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  min-height: 100vh; /* Preenche 100% da altura da tela */
  width: 100%; /* Preenche 100% da largura da tela */
  background-color: #f0f0f0; /* Nova cor de fundo */
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
