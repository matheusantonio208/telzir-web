import styled from 'styled-components';
// Adicionar Toaster
export const Container = styled.div`
  display: flex;
  justify-content: center;

  padding: 30px;
  background: #fff;
  border-radius: 4px;
  align-items: center;
  display: flex;
  p {
    font-size: 20px;
  }

  button {
    margin-top: 40px;
    padding: 30px;
  }
  img {
    width: 1000px;
  }
`;
export const AboutPlan = styled.div`
  h1 {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 80px;

    img {
      width: 80px;
      padding-left: 10px;
    }
  }
`;
export const CardGroup = styled.div`
  display: flex;
  align-items: center;

  div:nth-child(2) {
    padding-top: 80px;
    height: 660px;
    border: 2px solid #43b1fa;
    img {
      width: 350px;
    }
  }
  div:nth-child(1) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0;
  }
  div:nth-child(3) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0;
  }
`;
export const Card = styled.div`
  border: solid 1px #ccc;
  border-radius: 8px;
  height: 600px;
  width: 380px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  img {
    width: 300px;
  }
  h2 {
    font-weight: bold;
    text-align: center;
    font-size: 25px;
  }
  span {
    margin-top: 10px;
    font-size: 12px;
    color: #8e8e8e;
  }
  h3 {
    margin-top: 10px;
  }
  h1 {
    font-size: 50px;
  }
  p {
    margin-top: 20px;
    font-size: 15px;
  }

  button {
    margin-top: 30px;
    margin: auto;
    padding: 20px;
    span {
      font-size: 16px;
      font-weight: normal;
      color: white;
    }
  }
`;

export const SectionSimulation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;

  h1 {
    text-transform: uppercase;
  }

  label {
    margin: 8px 0;
  }

  button {
    width: 256px;
    background: #f8cf61;
    border: 0;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    padding: 20px;
    color: #fff;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const AreaCodes = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 5px;
`;

export const SelectCode = styled.div`
  margin-left: 18px;
  margin-right: 18px;
  width: 120px;
`;

export const Duration = styled.input`
  padding: 10px;
  font-size: 68px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
  color: #757575;
  background-color: #e0e0e0;
  border: 0;
  border-radius: 10px;
  width: 400px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: #cfcfcf;
  }
`;
