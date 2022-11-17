import { User } from "./User";

export const Users = () => {
  const users = [
    { name: "Himanshu", age: 35 },
    { name: "Raj", age: 22 },
  ];
  return (
    <>
      {users.map((user, key) => (
        <User {...user} key={key} />
      ))}
    </>
  );
};
