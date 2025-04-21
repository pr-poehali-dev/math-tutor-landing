import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import { ArrowRight, Check, MessageCircle, Send, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-tutor-lightGray text-tutor-spaceGray">
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-tutor-cream to-tutor-lightGray">
        <div className="container-tutor">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tutor-spaceGray leading-tight">
                Математика станет <span className="text-blue-600">понятной</span> и <span className="text-blue-600">интересной</span>
              </h1>
              <p className="text-lg md:text-xl text-tutor-accentGray">
                Индивидуальные занятия по математике для школьников и студентов. 
                Помогу полюбить предмет и добиться высоких результатов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-tutor-spaceGray hover:bg-tutor-spaceGray/90 text-white rounded-full px-8 py-6">
                  Записаться на занятие
                </Button>
                <Button variant="outline" className="border-tutor-accentGray/30 hover:bg-white text-tutor-spaceGray rounded-full px-8 py-6">
                  Узнать подробнее
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 md:-inset-6 bg-white/50 rounded-3xl -z-10 backdrop-blur-sm"></div>
                <img 
                  src="/placeholder.svg" 
                  alt="Репетитор по математике" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">
            {[
              { number: "10+", label: "лет опыта" },
              { number: "500+", label: "довольных учеников" },
              { number: "98%", label: "сдают экзамены на высокий балл" },
              { number: "100%", label: "увлекательных занятий" }
            ].map((stat, index) => (
              <Card key={index} className="bg-white/80 border-none shadow-sm">
                <CardContent className="p-6 text-center">
                  <p className="text-3xl md:text-4xl font-bold text-tutor-spaceGray">
                    {stat.number}
                  </p>
                  <p className="text-tutor-accentGray mt-1">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container-tutor">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/5">
              <div className="relative">
                <div className="absolute top-6 -left-6 h-full w-full bg-tutor-cream rounded-2xl -z-10"></div>
                <img 
                  src="/placeholder.svg" 
                  alt="Фото преподавателя" 
                  className="w-full h-auto rounded-2xl shadow-md relative z-10"
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
                {[
                  "Индивидуальный подход к каждому ученику",
                  "Доступное объяснение сложного материала",
                  "Гарантированный результат на экзаменах",
                  "Современные методики обучения",
                  "Гибкий график занятий онлайн и офлайн"
                ].map((item, index) => (
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
      
      {/* Services Section */}
      <section id="services" className="section-padding bg-tutor-lightGray">
        <div className="container-tutor">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Мои услуги</h2>
            <p className="text-lg text-tutor-accentGray mt-4 max-w-2xl mx-auto">
              Предлагаю занятия по различным направлениям математики. 
              Все занятия проводятся индивидуально или в мини-группах до 3 человек.
            </p>
          </div>
          
          <Tabs defaultValue="school" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="school">Школьникам</TabsTrigger>
              <TabsTrigger value="ege">ЕГЭ</TabsTrigger>
              <TabsTrigger value="oge">ОГЭ</TabsTrigger>
              <TabsTrigger value="university">Студентам</TabsTrigger>
              <TabsTrigger value="olympiad">Олимпиады</TabsTrigger>
            </TabsList>
            
            {["school", "ege", "oge", "university", "olympiad"].map((tab) => {
              const services = {
                school: [
                  { title: "Занятия с 5 по 9 класс", price: "1200₽", duration: "60 минут" },
                  { title: "Занятия с 10 по 11 класс", price: "1500₽", duration: "60 минут" },
                  { title: "Помощь с домашними заданиями", price: "900₽", duration: "45 минут" }
                ],
                ege: [
                  { title: "Подготовка к базовому ЕГЭ", price: "1500₽", duration: "90 минут" },
                  { title: "Подготовка к профильному ЕГЭ", price: "1800₽", duration: "90 минут" },
                  { title: "Интенсив перед экзаменом", price: "2500₽", duration: "120 минут" }
                ],
                oge: [
                  { title: "Подготовка к ОГЭ", price: "1400₽", duration: "90 минут" },
                  { title: "Мини-группа (до 3 человек)", price: "900₽", duration: "90 минут" },
                  { title: "Экспресс-подготовка", price: "2000₽", duration: "120 минут" }
                ],
                university: [
                  { title: "Высшая математика", price: "1800₽", duration: "90 минут" },
                  { title: "Матанализ", price: "2000₽", duration: "90 минут" },
                  { title: "Линейная алгебра", price: "1800₽", duration: "90 минут" }
                ],
                olympiad: [
                  { title: "Подготовка к олимпиадам", price: "2000₽", duration: "90 минут" },
                  { title: "Нестандартные задачи", price: "1800₽", duration: "90 минут" },
                  { title: "Углубленная математика", price: "1900₽", duration: "90 минут" }
                ]
              };
              
              return (
                <TabsContent key={tab} value={tab} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services[tab as keyof typeof services].map((service, index) => (
                      <Card key={index} className="overflow-hidden bg-white border-none shadow-sm">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                          <div className="text-3xl font-bold text-tutor-spaceGray my-4">
                            {service.price}
                            <span className="text-base text-tutor-accentGray font-normal"> / {service.duration}</span>
                          </div>
                          <Button variant="outline" className="rounded-full w-full border-tutor-accentGray/30 mt-4">
                            Выбрать
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-tutor-cream">
        <div className="container-tutor">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Отзывы моих учеников</h2>
            <p className="text-lg text-tutor-accentGray mt-4 max-w-2xl mx-auto">
              Что говорят мои ученики и их родители о наших занятиях
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
            ].map((testimonial, index) => (
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
      
      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-tutor">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Запишитесь на занятие</h2>
              <p className="text-lg text-tutor-accentGray mt-4">
                Оставьте свои контактные данные, и я свяжусь с вами для обсуждения деталей 
                и составления индивидуального плана обучения.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-tutor-cream p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-tutor-spaceGray" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Telegram</h3>
                    <p className="text-tutor-accentGray">@math_tutor</p>
                    <a 
                      href="https://t.me/math_tutor" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-1 text-sm"
                    >
                      Написать в Telegram <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-tutor-cream p-3 rounded-full">
                    <Send className="h-6 w-6 text-tutor-spaceGray" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-tutor-accentGray">math_tutor@example.com</p>
                    <a 
                      href="mailto:math_tutor@example.com" 
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-1 text-sm"
                    >
                      Отправить email <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-tutor-lightGray rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-6">Форма для записи</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-tutor-spaceGray text-white py-8">
        <div className="container-tutor">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-bold">МатПрофи</div>
              <p className="text-gray-300 mt-1">Ваш путь к успеху в математике</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <a href="#hero" className="hover:text-gray-300 transition-colors">Главная</a>
              <a href="#about" className="hover:text-gray-300 transition-colors">Обо мне</a>
              <a href="#services" className="hover:text-gray-300 transition-colors">Услуги</a>
              <a href="#testimonials" className="hover:text-gray-300 transition-colors">Отзывы</a>
              <a href="#contact" className="hover:text-gray-300 transition-colors">Контакты</a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-6 pt-6 text-center md:text-left text-gray-400 text-sm">
            © {new Date().getFullYear()} МатПрофи. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;