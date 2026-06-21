import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Killaura и боевые функции",
    description: "Автоматическая атака по врагам, критические удары и точное прицеливание для победы в любом PvP.",
    icon: "zap",
    badge: "PvP",
  },
  {
    title: "Защита от античита",
    description: "Продвинутый байпас обходит популярные античиты и скрывает действия от других игроков на сервере.",
    icon: "lock",
    badge: "Bypass",
  },
  {
    title: "ESP и вижуалы",
    description: "Подсветка игроков, мобов, руды и сундуков сквозь стены. Видите всё, что скрыто от обычного взгляда.",
    icon: "target",
    badge: "Visuals",
  },
  {
    title: "Движение и полёт",
    description: "Fly, Speed, NoFall и Spider — полная свобода перемещения по карте без ограничений.",
    icon: "globe",
    badge: "Movement",
  },
  {
    title: "Поддержка версий",
    description: "Работает на всех актуальных версиях Minecraft и популярных лаунчерах без лишних настроек.",
    icon: "link",
    badge: "1.8 — 1.21",
  },
  {
    title: "Гибкая настройка",
    description: "Удобное меню с горячими клавишами, профилями и тонкой настройкой каждого модуля под себя.",
    icon: "brain",
    badge: "ClickGUI",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Возможности чита</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Десятки модулей, которые дают преимущество на любом сервере Minecraft
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}