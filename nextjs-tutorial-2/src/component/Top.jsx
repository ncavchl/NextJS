import Gnb from "./Gnb";
import { Header } from "semantic-ui-react";

export default function Top() {
  return (
    <div
      style={{
        marginTop: 40,
        padding: "40px 0",
        borderTop: "1px solid #999",
        textAlign: "center",
      }}
    >
      <div style={{ flex: "100px 0 0" }}>
        <img
          src="/images/ping.jpg"
          alt=""
          style={{ display: "block", width: 80 }}
        />
      </div>
      <Header as="h1">코딩앙마</Header>
      <Gnb />
    </div>
  );
}
