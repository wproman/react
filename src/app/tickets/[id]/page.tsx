import Dot from "@/app/components/Datatype";
import getDatas from "@/app/components/BlogLists";

import { Suspense } from "react";
import { notFound } from "next/navigation";

// import Loading from "@/app/Loading";
// await new Promise((resolve) => setTimeout(resolve, 3000));
export const dynamiParams = true;
// যদি এমন আইডিতে রিকুয়েস্ট করা হয় যেটা নাই।

async function getTicket(id: Number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/` + id, {
    next: {
      revalidate: 0, // it is 0sec. nothing cached. if i refresh it's show 0 sec.
    },
  });
  if (!res.ok) {
    notFound();
  }
  return res.json();
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  return posts.map((post: Dot) => ({
    id: post.id.toString(),
  }));
}

const getTicketDetails = async ({ params }: { params: Dot }) => {
  const ticket = getTicket(params.id);
  const getData = getDatas();
  const [geTicket, getGetData] = await Promise.all([ticket, getData]);
  return (
    <div>
      <h1>Below it</h1>
      <Suspense>
        <h3>{geTicket.title}</h3>
        <small>Address by {geTicket.body}</small>
        <p>you clicked {geTicket.id}</p>
        <p>
          Double api calling{" "}
          {/* {getGetData.map((get: any) => (
          <li key={get.id}>Name: {get.name}</li>
        ))} */}
        </p>
      </Suspense>
    </div>
  );
};

export default getTicketDetails;
