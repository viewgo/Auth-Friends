import styled from "styled-components";

export const FriendListRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  width: 100%;
`;

export const Form = styled.div`
display: flex;
flex-flow: column;
align-items: center;

width: 50%;



form{
  display: flex;
  flex-flow: column;

  input{
    margin-bottom: 10px;
    width: 200px;
  }

  button{
    border: 0
    padding: 10px;
    width: 200px;
  }
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export const Nav = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;

  width: 50%;
`;

export const List = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  width: 50%;
`;

export const Card = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  width: 300px;
  margin: 10px;
  padding: 10px;

  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.3);

  h3 {
    margin: 0;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardButtons = styled.div`
  align-self: start;
`;

export const DeleteButton = styled.div`
color: red;

:hover{
  cursor: pointer;
}
`
