import axios from "axios";
import { useState } from "react";
import { UserProfile } from "../types/UserProfile";
import { User } from "../types/api/User";

export const useAllUsers = () => {
  const [userProfile, setUserProfile] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [errFlg, setErrFlg] = useState(false);

  const getUsers = () => {
    setLoading(true);
    setErrFlg(false);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`
        }));
        setUserProfile(data);
      })
      .catch(() => {
        setErrFlg(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { getUsers, userProfile, loading, errFlg };
};