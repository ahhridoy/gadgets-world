// import { camera } from "@/data/camera";
import Card from "../../components/Card";

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: "force-cache",
  });

  return res.json();
}

export default async function CameraList() {
  const data = await fetchData();
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5">
      {data.map((item: any) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}
