import axios from "axios";
import { useRouter } from "next/router";
import { Button } from "semantic-ui-react";
import { useEffect, useState } from "react";

export default function Admin() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const checkLogin = () => {
    axios.get("/api/IsLogin").then((res) => {
      if (res.status === 200 && res.data.name) {
        //로그인
        setIsLogin(true);
      } else {
        router.push("/login");
      }
    });
  };

  const logout = () => {
    axios.get("/api/logout").then((res) => {
      if ((res.status = 200)) router.push("/");
    });
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <>
      admin
      {isLogin && <Button onClick={logout}>Logout</Button>}
    </>
  );
}
