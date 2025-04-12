import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-2 border-b shadow-md bg-bone">
    <div className="flex items-center gap-4">

      <div className="w-14 h-14 bg-forest-green-500"/>
      <h1 className="text-2xl font-bold">Better Typing</h1>
    </div>
   
        <nav className="flex gap-4">
          <Link href="/login">Iniciar sesión</Link>
          <Link href="/info">Informacion</Link>
        </nav>
    </header>
  );
}
