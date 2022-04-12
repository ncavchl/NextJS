import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import Item from "../../src/component/Item";
import Head from "next/head";
import { Loader } from "semantic-ui-react";

const Post = ({ item }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <>
      {item && (
        <>
          <Head>
            <title>HOME | 코딩앙마</title>
            <meta name="description" content="코딩 앙마 홈임"></meta>
          </Head>
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(API_URL);
  const data = res.data;
  return {
    props: {
      item: data,
    },
  };
}
