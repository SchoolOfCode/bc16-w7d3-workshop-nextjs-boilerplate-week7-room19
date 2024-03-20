// import Image from "next/image";
import "./page.css";
import Card from "./src/Cards/Card";
import Hero from "./src/Hero/Hero";



export default function Home() {
  return (
    <>
    
    <main className="main">
      <Hero/>
      <Card/>
     
    </main>
    </>
  );
}
