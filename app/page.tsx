import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">
        <div className="space-y-8">
          <p className="text-xs uppercase tracking-editorial text-tobacco">European Vintage Sourcing Bureau</p>
          <h1 className="font-serif text-5xl leading-tight lg:text-7xl">
            Редкий винтаж для интерьеров с музейным характером.
          </h1>
          <p className="max-w-xl text-lg text-graphite/80">
            Мы находим мебель, свет и декор по всей Европе, проверяем происхождение и состояние, организуем покупку,
            доставку и реставрацию под задачу вашего проекта.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="bg-graphite px-6 py-3 text-sm uppercase tracking-editorial text-ivory">
              Запрос в Telegram
            </Link>
            <Link href="/catalog" className="border border-graphite/30 px-6 py-3 text-sm uppercase tracking-editorial">
              Смотреть каталог
            </Link>
          </div>
        </div>
        <div className="relative min-h-[460px] overflow-hidden">
          <Image src={products[0].images[0]} alt={products[0].title} fill className="object-cover" />
        </div>
      </section>
    </main>
  );
}
