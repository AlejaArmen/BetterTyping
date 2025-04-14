import Link from "next/link";
import TypePractice from "@/components/TypingPractice/TypePractice";

export default function Home() {
  return (
   <>
    <section>
      <TypePractice />
      <Link href='/slider' className='text-9xl underline'>DEMOS</Link>
    </section>
   </>
  );
}
