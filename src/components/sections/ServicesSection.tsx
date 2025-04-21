import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ServicesSection = () => {
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

  const tabItems = [
    { value: "school", label: "Школьникам" },
    { value: "ege", label: "ЕГЭ" },
    { value: "oge", label: "ОГЭ" },
    { value: "university", label: "Студентам" },
    { value: "olympiad", label: "Олимпиады" }
  ];

  return (
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
            {tabItems.map(tab => (
              <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>
            ))}
          </TabsList>
          
          {tabItems.map(tab => (
            <TabsContent key={tab.value} value={tab.value} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services[tab.value as keyof typeof services].map((service, index) => (
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
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesSection;
