import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findProductBySlug, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = findProductBySlug(slug);

  if (!product) return notFound();

  return (
    <main className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
      <Link href="/catalog" className="text-xs uppercase tracking-editorial text-graphite/70">← Назад в каталог</Link>
      <div className="mt-6 grid gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          {product.images.map((src) => (
            <div key={src} className="relative h-80 overflow-hidden lg:h-[420px]">
              <Image src={src} alt={product.title} fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-editorial text-tobacco">{product.country} · {product.period}</p>
          <h1 className="font-serif text-5xl">{product.title}</h1>
          <dl className="grid grid-cols-1 gap-3 text-sm">
            <div><dt className="font-medium">Категория</dt><dd>{product.category}</dd></div>
            <div><dt className="font-medium">Материалы</dt><dd>{product.materials}</dd></div>
            <div><dt className="font-medium">Размеры</dt><dd>{product.dimensions}</dd></div>
            <div><dt className="font-medium">Состояние</dt><dd>{product.condition}</dd></div>
            <div><dt className="font-medium">Срок доставки</dt><dd>{product.estimatedDelivery}</dd></div>
            <div><dt className="font-medium">Стили</dt><dd>{product.styles.join(" · ")}</dd></div>
          </dl>
          <div className="space-y-3 border-t border-graphite/20 pt-4">
            <h2 className="font-serif text-3xl">Где предмет работает в интерьере</h2>
            <p>{product.interiorFit}</p>
            <p className="text-graphite/75">{product.scenario}</p>
          </div>
          <div className="space-y-3 border-t border-graphite/20 pt-4">
            <h2 className="font-serif text-3xl">Реставрационный потенциал</h2>
            <p>{product.restorationPotential}</p>
          </div>
          <Link href="/contact" className="inline-block bg-graphite px-6 py-3 text-sm uppercase tracking-editorial text-ivory">
            Запросить через Telegram
          </Link>
        </div>
      </div>
    </main>
  );
}
