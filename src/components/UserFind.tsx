import React from "react";
import styled from "styled-components";

const UserFind: React.FC = () => {
  const users = [
    {
      name: "Patrick",
      age: 30,
      designation: "Software Engineer",
      id: 1,
    },
    {
      name: "Jimmy",
      age: 28,
      designation: "Programmer",
      id: 2,
    },
    {
      name: "Julian",
      age: 33,
      designation: "Software Engineer",
      id: 3,
    },
    {
      name: "Alex",
      age: 30,
      designation: "Designer",
      id: 4,
    },
    {
      name: "Ronny",
      age: 25,
      designation: "UX-Wrtiter",
      id: 5,
    },
  ];
  const [userList, setUserList] = React.useState<
    { name: string; age: number; designation: string; id: number }[] | undefined
  >(users);
  const [text, setText] = React.useState("");

  const handleOnClick = (e: any) => {
    e.preventDefault();
    const findUsers =
      userList && userList?.length > 0
        ? userList?.filter((u) => u?.name === text)
        : undefined;
    console.log(findUsers);

    setUserList(findUsers);
  };

  return (
    <div>
      <Title>User Find</Title>

      <Form>
        <Input
          type="text"
          placeholder="Search User"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button disabled={!text} onClick={handleOnClick}>
          Searchbar
        </Button>
      </Form>

      <div>
        <NotFound>
          {userList && userList?.length === 0 && <div>No User Found !!</div>}
        </NotFound>
        {userList &&
          userList?.length > 0 &&
          userList?.map((user) => {
            return (
              <Body key={user.id}>
                <BodyItem>
                  <h3>Name: {user?.name}</h3>
                  <p>Age: {user?.age}</p>
                  <p>Designation: {user?.designation}</p>
                </BodyItem>
              </Body>
            );
          })}
      </div>
    </div>
  );
};

export default UserFind;

const Title = styled.h1`
  background-color: #749bbd;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Form = styled.form`
  text-align: center;
`;

const Input = styled.input`
  border: 3px solid #749bbd;
  padding: 8px 15px;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #749bbd;
  color: white;
  padding: 8px 15px;
  border: 3px solid #749bbd;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
`;

const Body = styled.div`
  border: 5px solid #749bbd;
  margin: 20px;
  border-radius: 10px;
`;

const BodyItem = styled.div`
  text-align: left !important;
  margin: 20px 10px;
`;

const NotFound = styled.div`
  text-align: center;
  margin-top: 50px;
  color: #f50c0c;
`;
