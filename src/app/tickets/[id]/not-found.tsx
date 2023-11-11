import Link from "next/link";

const NotFound = () => {
  return (
    <main>
      <div className="mb-5 flex justify-center items-center text-center text-3xl text-red-200">
        not-found
      </div>
      <button className="bg-red-600 flex m-auto rounded-lg p-2 text-white">
        <Link href={"/"}>Go to Home</Link>
      </button>
    </main>
  );
};

export default NotFound;
