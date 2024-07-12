import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Header = styled.div`
  

  justify-content: space-between;
  align-items: center;
  padding: 5px 50px;
  box-sizing: border-box;
  background-color: #f9f9f9;
  color: white;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 50px;
  color: #333;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  background: linear-gradient(135deg, #708090, #363636);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 0.3s, text-shadow 0.3s;

  &:hover {
    transform: scale(1.2);
    text-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 3px;
    background-color: #ee0979;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 80%;
  }
`;

export const MovieGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;


export const BackButton = styled.button`
  background-color: #007bff;
  font-size: 25px;
  color: white;
  border: none;
  padding: 10px 30px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004494;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  background: white; 
`;
