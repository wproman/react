const url = "https://jsonplaceholder.typicode.com/users";

export default async function getDatas() {
  const res = await fetch(url, {
    next: {
      revalidate: 0, // it is 0sec. nothing cached. if i refresh it's show 0 sec.
    },
  });
  return res.json();
}
