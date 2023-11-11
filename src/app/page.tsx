// import { useState, useEffect } from "react";
import getDatas from "@/app/components/BlogLists";
import Dot from "./components/Datatype";
import Link from "next/link";
// let name = "mario";
// const [name, setName] = useState("Ayaan");
// const [age, setAge] = useState(1);

// const handleClick = () => {
//   let name = "roman";
//   setName(name);
//   setAge(Math.random() * 10);
// };

// const [data, setData] = useState(null);

// const [isLoading, setLoading] = useState(true);

// useEffect(() => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => {
//       setData(data);
//       setLoading(false);
//     });
// }, []);
// if (isLoading) return <p>Loading...</p>;
// if (!data) return <p>No profile data</p>;
// console.log(data[0]["name"]);

export default async function Homepage() {
  const datas = await getDatas();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Homepage</h2>
      <p>{/* My name is {name} and {age} */}</p>
      {/* <button onClick={handleClick}>Click me</button> */}
      {datas.map((data: Dot) => (
        <div key={data.id}>
          <Link href={`tickets/${data.id}`}>
            {data.name} and {data.website}
          </Link>
        </div>
      ))}
      {datas.length === 0 && <p>There is no data</p>}
    </main>
  );
}
