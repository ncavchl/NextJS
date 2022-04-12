import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import Item from "../../src/component/Item";
import Head from "next/head";
import { Loader } from "semantic-ui-react";

const Post = ({ item, name }) => {
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();
  console.log(router.isFallback);
  if (router.isFallback) {
    return (
      <div style={{ padding: "100px 0" }}>
        <Loader active inline="centered"></Loader>
      </div>
    );
  }

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

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    paths: data.slice(0, 9).map((item) => ({
      params: {
        id: item.id.toString(),
      },
    })),
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
