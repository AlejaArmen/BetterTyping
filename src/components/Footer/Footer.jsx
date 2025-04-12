import Link from "next/link";

export default function Footer(){
    return (
        <footer className="w-full bg-transparent border-t mt-10">
            <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-center gap-4">
                <p className="text-sm">&copy; 2025</p>
                <div>
                    <Link href="/redesSociales">REDES SOCIALES</Link>
                </div>
            </div>
        </footer>
    );
}