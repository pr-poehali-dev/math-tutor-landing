import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
      
      // Сбрасываем сообщение об успехе через 3 секунды
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Ваше имя <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Иван Иванов"
            required
            className="rounded-xl border-tutor-accentGray/30 bg-white focus:border-tutor-spaceGray"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Номер телефона <span className="text-red-500">*</span>
          </label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+7 (XXX) XXX-XX-XX"
            required
            className="rounded-xl border-tutor-accentGray/30 bg-white focus:border-tutor-spaceGray"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@mail.ru"
            className="rounded-xl border-tutor-accentGray/30 bg-white focus:border-tutor-spaceGray"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium">
            Услуга <span className="text-red-500">*</span>
          </label>
          <Select 
            value={formData.service}
            onValueChange={handleSelectChange}
            required
          >
            <SelectTrigger className="rounded-xl border-tutor-accentGray/30 bg-white focus:border-tutor-spaceGray">
              <SelectValue placeholder="Выберите услугу" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="school">Школьная математика</SelectItem>
              <SelectItem value="ege">Подготовка к ЕГЭ</SelectItem>
              <SelectItem value="oge">Подготовка к ОГЭ</SelectItem>
              <SelectItem value="university">Высшая математика</SelectItem>
              <SelectItem value="olympiad">Олимпиадная математика</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Сообщение
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Расскажите подробнее о своих целях и пожеланиях..."
          className="min-h-[120px] rounded-xl border-tutor-accentGray/30 bg-white focus:border-tutor-spaceGray"
        />
      </div>
      
      <Button 
        type="submit" 
        className="bg-tutor-spaceGray hover:bg-tutor-spaceGray/90 text-white rounded-full px-8 py-6"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Отправляем..." : "Записаться на занятие"}
      </Button>
      
      {isSuccess && (
        <div className="bg-green-50 text-green-700 px-4 py-3 rounded-lg animate-fade-in">
          Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.
        </div>
      )}
    </form>
  );
};

export default ContactForm;