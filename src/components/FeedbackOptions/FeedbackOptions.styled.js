import styled from "styled-components";

export const FeedbackList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin-left: 0;
  padding-left: 0;
`;

export const FeedbackListItem = styled.li`
  list-style-type: none;
`;

export const Button = styled.button`
  border: none;
  border-radius: 3px;
  padding: 10px 15px;
  background-color: #2196f3;
  color: #fff;
  font-weight: 500px;
  margin: 10px;

  cursor: pointer;
  outline: none;
  box-shadow: 1px 1px 1px 0 #2196f3;
  box-shadow: 0px 0px 0px 1px #2196f3;
  
  transition-duration: 0.5s;
  :hover {
    background-color: white;
    color: #2196f3;
`;
