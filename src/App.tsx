import "./styles.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

export default function App() {
  const { getUsers, userProfile, loading, errFlg } = useAllUsers();
  const onClickFachUser = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickFachUser}>データ取得</button>
      <br />
      {errFlg ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>...Loading</p>
      ) : (
        <>
          {userProfile.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
