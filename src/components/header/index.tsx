import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-center p-8">
      <Image
        src="/logo-full.svg"
        alt="Logo"
        width={180}
        height={100}
      />
    </header>
  );
}
