import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const HomePage = () => {
  return (
    <div>
      <h1 className="text-blue-800">Home page</h1>
      <Link to="about">About Us</Link>
      <Button>Click me</Button>
    </div>
  )
}

export default HomePage
