import Image from "next/image";
import MikeAndMandy from "../src/images/foundersImage/founder-mike-and-mandy.png";
import Link from "next/link";
import FoundersCard from "../foundersCard/page";

export default function Founders() {
  return (
    <>
      <div id="founders">
        <Link href="/founders"></Link>
        <h1>Meet the artisans behind our masterpieces!</h1>
        <h1>Mike and Mandy</h1>
        <Image src={MikeAndMandy} alt="Mike and Mandy" />
      </div>
      <FoundersCard/>
    </>
  );
}
