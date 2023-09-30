'use client'

import styled from "styled-components";
const inputPadding = '20px'

/**
 *
 * Wrappers
 *
 */

export const ModuleWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-image: url('exchangeRate2.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh;
`

export const ExchangeWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  height: max-content;
  padding: 30px;
  margin: 50px 20px 50px;
  background: #132011;
`

export const ImageContainer = styled.div`
  margin: 5px 0 40px;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ImageWrapper = styled.div`
  max-width: 500px;
`

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin-top: 15px;
`

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin-top: 15px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const ResultWrapper = styled.div`
  margin-top: 15px;
  background-color: #333333;
  padding: 20px; 
`

export const MessageWrapper = styled.div`
 display: flex;
  justify-content: space-between;
  align-items: center;
`


/**
 *
 * Inputs
 *
 */


export const StyledInput = styled.input`
  color: gray;
  padding: ${inputPadding};
  width: 100%;
`

export const StyledSelect = styled.select`
  color: gray;
  padding: ${inputPadding};
  width: 50%;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 100%;
  }
`
export const StyledOption = styled.option`
  color: #333333;
  padding: ${inputPadding};
  width: 100%;
  margin-top: 15px;
  border: 2px solid azure;
  transition: 0.3s linear;
`


/**
 *
 * Actions
 *
 */


export const StyledButton = styled.button`
  background: #597157;
  padding: ${inputPadding};
  color: white;
  width: 100%;
  margin-top: 15px;
  border: 2px solid azure;
  cursor: pointer;
  transition: 0.3s linear;   
  font-weight: bold;

  &:hover {
    background: #132011;
  }
`

export const CloseButton = styled.button`
  color: white;
  padding: 5px 10px 5px;
  height: max-content;
  border: 2px solid azure;
  background: transparent;
  transition: 0.3s linear;
  cursor: pointer;

  &:hover {
    background: #132011;
  }
`

export const DisclaimerText = styled.h3`
 text-align: center;
 font-size: 12px;
`