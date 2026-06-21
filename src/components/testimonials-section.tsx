import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "xX_DragonSlayer_Xx",
    role: "Игрок анархии, 2.5k часов",
    avatar: "/placeholder.svg",
    content:
      "Залетел на сервер и поднялся в топ PvP за неделю. Killaura настраивается идеально, бан так и не словил.",
  },
  {
    name: "ProBuilder_99",
    role: "Стример Minecraft",
    avatar: "/placeholder.svg",
    content:
      "Байпас реально рабочий — гоняю на популярных серверах в открытую и без палева. ESP сундуков экономит кучу времени.",
  },
  {
    name: "NeZnayka_2010",
    role: "Игрок BedWars",
    avatar: "/placeholder.svg",
    content:
      "Меню удобное, всё на горячих клавишах. Поставил за пару минут, теперь выношу катки на BedWars без проблем.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Отзывы игроков</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Тысячи игроков уже используют NitroCheat каждый день
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}