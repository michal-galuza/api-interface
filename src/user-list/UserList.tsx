import { useUserList } from "./useUserList";

export const UserList = (): JSX.Element => {
  const { users, isLoading } = useUserList();

  return (
    <div>
      {isLoading && <h1>Loading</h1>}
      {users &&
        users.map((u, index) => (
          <div key={`${u.name}${u.lastname}`}>
            <p>
              {index + 1}. {u.name} {u.lastname}
            </p>
          </div>
        ))}
    </div>
  );
};
