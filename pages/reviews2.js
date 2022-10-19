import Head from 'next/head';

export default function Reviews({ reviews }) {
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

export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await response.json();

  return {
    props: {
      reviews: data.slice(0, 15),
    },
  };
}
