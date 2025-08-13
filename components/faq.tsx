"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, HelpCircle, BookOpen, Award, Users, Clock, CreditCard, Phone } from "lucide-react"

interface FAQItem {
  id: number
  question: string
  questionEn: string
  answer: string
  answerEn: string
  category: string
  categoryEn: string
  icon: React.ReactNode
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Kurslar qancha vaqt davom etadi?",
    questionEn: "How long do the courses last?",
    answer:
      "Bizning kurslarimiz 2 hafta dan 6 oygacha davom etadi. Qisqa muddatli kurslar asosan malaka oshirish uchun, uzoq muddatli kurslar esa chuqur bilim olish uchun mo'ljallangan. Har bir kurs davomiyligi dastur murakkabligiga qarab belgilanadi.",
    answerEn:
      "Our courses last from 2 weeks to 6 months. Short-term courses are mainly for skills development, while long-term courses are designed for in-depth knowledge. Each course duration is determined based on program complexity.",
    category: "Kurslar",
    categoryEn: "Courses",
    icon: <Clock className="w-5 h-5" />,
  },
  {
    id: 2,
    question: "Sertifikat qanday olinadi?",
    questionEn: "How to obtain a certificate?",
    answer:
      "Kursni muvaffaqiyatli tugatganingizdan so'ng, siz rasmiy sertifikat olasiz. Sertifikat olish uchun barcha darslarni o'tash, vazifalarni bajarish va yakuniy imtihondan o'tish kerak. Sertifikat davlat tomonidan tan olingan va butun O'zbekiston bo'ylab amal qiladi.",
    answerEn:
      "After successfully completing the course, you will receive an official certificate. To obtain a certificate, you need to attend all classes, complete assignments, and pass the final exam. The certificate is state-recognized and valid throughout Uzbekistan.",
    category: "Sertifikat",
    categoryEn: "Certificate",
    icon: <Award className="w-5 h-5" />,
  },
  {
    id: 3,
    question: "Onlayn yoki oflayn o'qish mumkinmi?",
    questionEn: "Is online or offline learning available?",
    answer:
      "Ha, biz gibrid ta'lim tizimini taklif etamiz. Siz onlayn, oflayn yoki aralash formatda o'qishingiz mumkin. Onlayn darslar jonli efir va yozib olingan video darslar orqali o'tkaziladi. Oflayn darslar zamonaviy auditoriyalarda o'tkaziladi.",
    answerEn:
      "Yes, we offer a hybrid education system. You can study online, offline, or in a mixed format. Online classes are conducted through live broadcasts and recorded video lessons. Offline classes are held in modern auditoriums.",
    category: "Ta'lim formati",
    categoryEn: "Education Format",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    id: 4,
    question: "Kurs narxi qancha?",
    questionEn: "What is the course price?",
    answer:
      "Kurs narxlari dastur turiga va davomiyligiga qarab farq qiladi. Qisqa muddatli kurslar 500,000 so'mdan boshlanadi, uzoq muddatli kurslar esa 2,000,000 so'mgacha. Biz bo'lib to'lash imkoniyatini ham taklif etamiz. Batafsil narxlar uchun biz bilan bog'laning.",
    answerEn:
      "Course prices vary depending on the program type and duration. Short-term courses start from 500,000 UZS, while long-term courses go up to 2,000,000 UZS. We also offer installment payment options. Contact us for detailed pricing.",
    category: "To'lov",
    categoryEn: "Payment",
    icon: <CreditCard className="w-5 h-5" />,
  },
  {
    id: 5,
    question: "Qanday mutaxassislar dars beradi?",
    questionEn: "What kind of specialists teach?",
    answer:
      "Bizning o'qituvchilarimiz yuridik fanlar doktorlari, professori, tajribali advokatlar va sud xodimlaridan iborat. Barcha o'qituvchilar kamida 10 yillik amaliy tajribaga ega va o'z sohalarida tan olingan mutaxassislardir.",
    answerEn:
      "Our teachers consist of doctors of legal sciences, professors, experienced lawyers, and court officials. All teachers have at least 10 years of practical experience and are recognized specialists in their fields.",
    category: "O'qituvchilar",
    categoryEn: "Teachers",
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: 6,
    question: "Ro'yxatdan o'tish qanday amalga oshiriladi?",
    questionEn: "How is registration carried out?",
    answer:
      "Ro'yxatdan o'tish uchun bizning veb-saytimizda ariza to'ldiring yoki to'g'ridan-to'g'ri ofisimizga tashrif buyuring. Kerakli hujjatlar: pasport nusxasi, ta'lim haqidagi hujjat nusxasi va 3x4 o'lchamdagi fotosurat. Ro'yxatdan o'tish jarayoni 1-2 kun davom etadi.",
    answerEn:
      "To register, fill out an application on our website or visit our office directly. Required documents: passport copy, education certificate copy, and 3x4 size photo. The registration process takes 1-2 days.",
    category: "Ro'yxatdan o'tish",
    categoryEn: "Registration",
    icon: <Phone className="w-5 h-5" />,
  },
  {
    id: 7,
    question: "Kurs tugagandan keyin qo'shimcha yordam berilarmidi?",
    questionEn: "Is additional support provided after course completion?",
    answer:
      "Ha, kurs tugagandan keyin ham biz talabalarimizni qo'llab-quvvatlaymiz. 6 oy davomida bepul maslahat xizmati, ish topishda yordam, qo'shimcha materiallar va alumni tarmog'iga kirish imkoniyati beriladi.",
    answerEn:
      "Yes, we continue to support our students even after course completion. Free consultation service for 6 months, job placement assistance, additional materials, and access to alumni network are provided.",
    category: "Qo'llab-quvvatlash",
    categoryEn: "Support",
    icon: <HelpCircle className="w-5 h-5" />,
  },
  {
    id: 8,
    question: "Gruppa hajmi qancha bo'ladi?",
    questionEn: "What will be the group size?",
    answer:
      "Har bir guruhda maksimal 15-20 talaba bo'ladi. Bu har bir talabaga individual e'tibor berish va sifatli ta'lim olish imkoniyatini yaratadi. Kichik guruhlar muhokama va amaliy mashg'ulotlar uchun qulay muhit yaratadi.",
    answerEn:
      "Each group will have a maximum of 15-20 students. This creates an opportunity to give individual attention to each student and receive quality education. Small groups create a comfortable environment for discussions and practical exercises.",
    category: "Guruh",
    categoryEn: "Group",
    icon: <Users className="w-5 h-5" />,
  },
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [language, setLanguage] = useState("uz")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const categories = [
    { value: "all", label: "Barchasi", labelEn: "All" },
    { value: "Kurslar", label: "Kurslar", labelEn: "Courses" },
    { value: "Sertifikat", label: "Sertifikat", labelEn: "Certificate" },
    { value: "To'lov", label: "To'lov", labelEn: "Payment" },
    { value: "O'qituvchilar", label: "O'qituvchilar", labelEn: "Teachers" },
  ]

  const filteredFAQs =
    selectedCategory === "all" ? faqData : faqData.filter((item) => item.category === selectedCategory)

  const translations = {
    uz: {
      title: "Ko'p Beriladigan Savollar",
      subtitle: "Eng muhim savollar va javoblar",
      allCategories: "Barcha kategoriyalar",
      contactUs: "Biz bilan bog'laning",
      contactText: "Savolingizga javob topa olmadingizmi? Biz bilan bog'laning!",
    },
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Most important questions and answers",
      allCategories: "All categories",
      contactUs: "Contact Us",
      contactText: "Couldn't find an answer to your question? Contact us!",
    },
  }

  const t = translations[language as keyof typeof translations]

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
      <div
        className="absolute bottom-10 left-10 w-64 h-64 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t.subtitle}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          {categories.map((category, index) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer hover-scale animate-fade-in ${
                selectedCategory === category.value
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 shadow-md"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {language === "uz" ? category.label : category.labelEn}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((item, index) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden glass-morphism animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {language === "uz" ? item.question : item.questionEn}
                    </h3>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {language === "uz" ? item.category : item.categoryEn}
                    </span>
                  </div>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${
                    openItems.includes(item.id) ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openItems.includes(item.id) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="pl-14">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {language === "uz" ? item.answer : item.answerEn}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact section */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <HelpCircle className="w-12 h-12 mx-auto mb-4 animate-bounce-slow" />
            <h3 className="text-2xl font-bold mb-4">{t.contactUs}</h3>
            <p className="text-blue-100 mb-6">{t.contactText}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+998712000235"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 cursor-pointer hover-scale"
              >
                +998 71 200 02 35
              </a>
              <a
                href="mailto:yurmakaz@adliya.uz"
                className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 cursor-pointer hover-scale"
              >
                uzmarkaz@adliya.uz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
