import { ReactElement, ReactNode } from "react"

interface SectionType {
  children: ReactNode | ReactElement
}

const Section = ({ children }: SectionType) => {
  return <section className="tex-white p-24 pt-32">{children}</section>
}

export default Section
