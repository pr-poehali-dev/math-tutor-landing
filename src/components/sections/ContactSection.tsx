import { ArrowRight, MessageCircle, Send } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
