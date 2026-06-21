import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Доминация в PvP",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Выигрывайте бои на анархиях, в дуэлях и на BedWars. Боевые модули дают преимущество против любого
            противника и помогают занимать топовые места.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Killaura с настройкой дальности и FOV
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              AutoCritical и Velocity (антиоткидывание)
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              AutoTotem и быстрое восстановление HP
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Сбор ресурсов",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Находите алмазы, нетерит и сундуки быстрее всех. Вижуалы и автоматизация ускоряют фарм и экономят
            десятки часов гринда на выживании.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              X-Ray и подсветка ценной руды
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              ESP сундуков и точек интереса
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              AutoMine и ускоренная добыча блоков
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Свобода передвижения",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Перемещайтесь по карте без ограничений. Модули движения помогают убегать от врагов, исследовать мир
            и преодолевать любые препятствия.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Fly и Speed с обходом античита
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              NoFall, Spider и Jesus (ходьба по воде)
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              AutoSprint и быстрый обзор карты
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Где пригодится NitroCheat</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            От жёстких PvP-боёв до быстрого фарма ресурсов — NitroCheat даёт преимущество в любом сценарии
            игры на серверах Minecraft.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}