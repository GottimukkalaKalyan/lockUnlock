import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #161617;
  background-image: linear-gradient(#0b0c1e, #3c2940);
`

export const LockedHeading = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 100px;
  font-family: 'Roboto';
`
export const LockedImage = styled.img`
  width: 100px;
  height: 100px;
`

export const Button = styled.button`
  background-color: #06b6d4;
  border: 0px;
  padding: 5px 20px;
  border-radius: 5px;
  color: white;
  font-weight: 500;
  cursor: pointer;
`
