import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CameraList from "./camera/page";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CameraList />
    </main>
  );
}
