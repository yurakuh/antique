const steps = ["Бриф и интерьерная задача","Поиск предметов у дилеров, аукционов и частных коллекций","Проверка состояния, оригинальности и происхождения","Согласование стоимости и условий покупки","Доставка, таможенная координация и страхование","Реставрация и финальная передача клиенту"];
export default function ProcessPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14 lg:px-10"><h1 className="font-serif text-5xl">Процесс работы</h1><ol className="mt-10 space-y-5">{steps.map((step, i) => (<li key={step} className="border-l border-tobacco pl-4 text-lg"><span className="mr-3 text-sm uppercase tracking-editorial text-tobacco">0{i + 1}</span>{step}</li>))}</ol></main>
  );
}
