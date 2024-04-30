import { Link } from "react-router-dom"
import { ANIMALS } from "@/consts/mock"
import Logo from "@/assets/logo.png"

const Navbar = () => {
  const navArray = Object.values(ANIMALS)

  console.log(navArray)
  return (
    <nav className="flex w-full p-4 bg-gradient-to-r from-dark-gradient to-dark-green">
      <Link to="/" className="w-10 h-10">
        <img src={Logo} />
      </Link>

      <section className="w-10/12 m-auto text-white flex gap-5 justify-center">
        {navArray.map((animal, index) => (
          <Link key={`${index}:${animal}`} to={`/animal/${animal}`}>
            {animal}
          </Link>
        ))}
      </section>
    </nav>
  )
}

export default Navbar
