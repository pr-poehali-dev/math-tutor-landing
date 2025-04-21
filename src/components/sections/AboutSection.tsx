import { Check } from "lucide-react";

const AboutSection = () => {
  const advantages = [
    "Индивидуальный подход к каждому ученику",
    "Доступное объяснение сложного материала",
    "Гарантированный результат на экзаменах",
    "Современные методики обучения",
    "Гибкий график занятий онлайн и офлайн"
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-tutor">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/5">
            <div className="relative">
              <div className="absolute top-6 -left-6 h-full w-full bg-tutor-cream rounded-2xl -z-10"></div>
              <img 
                src="https://cdn.poehali.dev/files/2c2e33ad-9f31-465f-955e-eac34916364a.jpeg" 
                alt="Фото преподавателя" 
                className="w-full h-auto rounded-2xl shadow-md relative z-10 grayscale"
              />
            </div>
          </div>
          <div className="md:w-3/5 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Обо мне</h2>
            <p className="text-lg text-tutor-accentGray">
              Здравствуйте! Меня зовут [Имя Фамилия], я преподаватель математики с 10-летним опытом работы. 
              Имею высшее математическое образование и степень кандидата физико-математических наук.
            </p>
            <p className="text-lg text-tutor-accentGray">
              Моя цель — не просто помочь ученику получить хорошую оценку, а привить любовь к математике, 
              научить мыслить логически и применять знания на практике.
            </p>
            
            <h3 className="text-xl font-semibold mt-8">Почему выбирают меня</h3>
            <ul className="space-y-3">
              {advantages.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;