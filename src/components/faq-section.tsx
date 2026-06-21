import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Как установить NitroCheat?",
      answer:
        "Скачайте установщик с сайта, запустите его и выберите нужную версию Minecraft. Чит автоматически добавится в лаунчер — останется только зайти в игру и открыть меню по клавише.",
    },
    {
      question: "Забанят ли меня на сервере?",
      answer:
        "Встроенный байпас обходит популярные античиты и скрывает действия от других игроков. Полную анонимность не гарантирует ни один чит, поэтому рекомендуем включать функции аккуратно.",
    },
    {
      question: "Какие версии Minecraft поддерживаются?",
      answer:
        "NitroCheat работает на всех актуальных версиях от 1.8 до 1.21 и совместим с популярными лаунчерами без дополнительных настроек.",
    },
    {
      question: "Нужен ли мощный компьютер?",
      answer:
        "Нет, чит оптимизирован и почти не нагружает систему. Он работает даже на слабых ПК и не снижает FPS в игре.",
    },
    {
      question: "Как обновляется чит?",
      answer:
        "Обновления приходят автоматически. После выхода новой версии Minecraft или античита мы оперативно выпускаем патч, чтобы всё продолжало работать.",
    },
    {
      question: "Сколько стоит NitroCheat?",
      answer:
        "Доступна бесплатная версия с базовым набором модулей, а также подписка с расширенным функционалом и приоритетной поддержкой. Подробные тарифы — по кнопке скачивания.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы об установке, безопасности и функциях NitroCheat.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}