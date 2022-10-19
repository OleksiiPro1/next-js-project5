import Head from 'next/head';
import React, { useEffect, useState } from 'react';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/comments',
      );
      const data = await response.json();
      setReviews(data);
    };
    getData();
  }, []);
  console.log(reviews);

  return (
    <>
      <Head>
        <title>Reviews</title>
        <meta name="Reviews-page" content="Reviews-page-content" />
      </Head>
      <div>
        <h1>Reviews</h1>
        <div>
          {!!reviews.length &&
            reviews.slice(0, 20).map((res) => {
              return (
                <div key={res.id} style={{ margin: '15px' }}>
                  {res.id}
                  {'. '}
                  {`${res.body.slice(0, 90)}...`}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
