import Image from "next/image";
import MikeAndMandy from "../../src/images/foundersImage/";
import Link from "next/link";

export default function Founders() {
  return (
    <>
      <div>
        <h1>Meet the artisans behind our masterpieces!</h1>
        <h1>Mike and Mandy</h1>
        <Image src={MikeAndMandy} alt="Mike and Mandy"></Image>
        <Link href="/founders">Founders Page</Link>
      </div>
    </>
  );
}
