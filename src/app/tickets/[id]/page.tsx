import Dot from "@/app/components/Datatype";
import getDatas from "@/app/components/BlogLists";
import { notFound } from "next/navigation";
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
      <h3>{geTicket.title}</h3>
      <small>Address by {geTicket.body}</small>
      <p>you clicked {geTicket.id}</p>
      <p>
        Double api calling{" "}
        {/* {getGetData.map((get: any) => (
          <li key={get.id}>Name: {get.name}</li>
        ))} */}
      </p>
    </div>
  );
};

export default getTicketDetails;
