import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import Item from "../../src/component/Item";
import Head from "next/head";
import { Loader } from "semantic-ui-react";

const Post = ({ item, name }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <>
      {item && (
        <>
          <Head>
            <title>HOME | 코딩앙마</title>
            <meta name="description" content="코딩 앙마 홈임"></meta>
          </Head>
          {name} 환경 입니다
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  //params로 적어둔 페이지들은 미리 생성해둔다는 뜻
  //fallback 값이 true면 getStaticProps로 만듬
  return {
    paths: [
      { params: { id: "740" } },
      { params: { id: "730" } },
      { params: { id: "729" } },
      //   { params: { id: "495" } },
      //   { params: { id: "488" } },
      //   { params: { id: "477" } },
    ],
    fallback: true,
  };
}

//node 환경
export async function getStaticProps(context) {
  const id = context.params.id;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(API_URL);
  const data = res.data;
  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
