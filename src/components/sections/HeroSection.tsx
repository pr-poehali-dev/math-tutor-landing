import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-tutor-cream to-tutor-lightGray">
      <div className="container-tutor">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tutor-spaceGray leading-tight">
              Математика станет <span className="text-blue-800">понятной</span> и <span className="text-blue-800">интересной</span>
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
                src="https://cdn.poehali.dev/files/11fb4f6e-4921-4816-8597-6ff4866a2b5d.jpeg" 
                alt="Репетитор по математике" 
                className="w-full h-auto rounded-2xl shadow-lg grayscale"
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
  );
};

export default HeroSection;