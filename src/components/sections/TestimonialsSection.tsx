import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Алексей К.",
    role: "Ученик 11 класса",
    text: "Благодаря занятиям я сдал профильный ЕГЭ на 92 балла! Объяснения всегда понятные, а домашние задания помогают закрепить материал."
  },
  {
    name: "Елена В.",
    role: "Мама ученицы 9 класса",
    text: "Моя дочь всегда боялась математики, но после нескольких занятий полюбила предмет. Теперь у нее твердая пятерка в школе и успешно сданный ОГЭ."
  },
  {
    name: "Мария Д.",
    role: "Студентка, 1 курс",
    text: "Помощь с высшей математикой очень выручила в первом семестре. Объяснения доступные, материал подается структурировано. Рекомендую!"
  },
  {
    name: "Дмитрий Н.",
    role: "Ученик 10 класса",
    text: "Занимаюсь подготовкой к олимпиадам. Педагог дает интересные задачи и учит нестандартному мышлению. Уже есть первые успехи!"
  },
  {
    name: "Ольга С.",
    role: "Мама ученика 6 класса",
    text: "Сын стал лучше понимать математику, повысилась успеваемость. Педагог находит общий язык с ребенком и умеет заинтересовать."
  },
  {
    name: "Антон П.",
    role: "Выпускник",
    text: "Занимался подготовкой к ЕГЭ в течение года. Результат превзошел ожидания — 98 баллов! Очень благодарен за высокий профессионализм."
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-tutor-cream">
      <div className="container-tutor">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Отзывы моих учеников</h2>
          <p className="text-lg text-tutor-accentGray mt-4 max-w-2xl mx-auto">
            Что говорят мои ученики и их родители о наших занятиях
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-none shadow-sm">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-tutor-accentGray mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="bg-tutor-spaceGray/10 rounded-full h-10 w-10 flex items-center justify-center text-tutor-spaceGray font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-tutor-accentGray">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
