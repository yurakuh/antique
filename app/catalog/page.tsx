import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function CatalogPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
      <h1 className="font-serif text-5xl">Каталог винтажных предметов</h1>
      <p className="mt-4 max-w-3xl text-graphite/80">
        Каждый лот сопровождается страной происхождения и сценарием использования в интерьере, чтобы дизайнер сразу
        видел потенциал предмета.
      </p>
      <div className="mt-12 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        {products.map((item) => (
          <article key={item.slug} className="space-y-4">
            <div className="relative h-72 overflow-hidden">
              <Image src={item.images[0]} alt={item.title} fill className="object-cover" />
            </div>
            <p className="text-xs uppercase tracking-editorial text-tobacco">
              {item.country} · {item.period}
            </p>
            <h2 className="font-serif text-3xl">{item.title}</h2>
            <p className="text-sm text-graphite/80">Сценарий: {item.scenario}</p>
            <Link href={`/catalog/${item.slug}`} className="text-sm uppercase tracking-editorial underline underline-offset-4">
              Открыть досье
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
