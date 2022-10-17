import styled from 'styled-components'

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.15));
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
  justify-content: center;
  align-items: center;
  margin: 2.5px;

  :hover,
  :focus {
    transform: scale3d(1.05, 1.05, 1.1);
  }
`

export const StyledComponentName = styled.text`
  font-size: calc(16px + 0.5vw);
`
