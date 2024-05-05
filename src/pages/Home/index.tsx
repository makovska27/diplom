import Footer from "@/components/Footer"
import Section from "@/components/Section"
import Slider from "@/components/Slider"

const HomePage = () => {
  return (
    <div>
      <div className="h-screen bg-hero-bg bg-cover relative">
        <div className="tex-white p-24 pt-32">
          <h1 className="text-white text-6xl mb-5">WebZoo</h1>
          <p className="text-white text-4xl">by Oleksandra Makovska</p>
        </div>
      </div>
      <Section>
        <h2 className="text-center text-6xl mb-5">Will be used for</h2>
        <p className="text-center mb-5">description for slider</p>
        <Slider />
      </Section>

      <div className=" bg-about bg-cover h-[600px] bg-center">
        <Section>
          <h2 className="text-center text-6xl mb-5 text-shadow-basic">
            Will be used for
          </h2>
        </Section>
      </div>

      <Section>
        <h2 className="text-center text-6xl mb-5">Comments</h2>
        <p className="text-center mb-5">what teachers think about this site</p>
        <Slider />
      </Section>
      <Footer />
    </div>
  )
}

export default HomePage
