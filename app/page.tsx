import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Courses from "@/components/courses"
import Specialists from "@/components/specialists"
import Statistics from "@/components/statistics"
import Partners from "@/components/partners"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Courses />
      <Specialists />
      <Statistics />
      <Partners />
      <FAQ />
      <Footer />
    </main>
  )
}
