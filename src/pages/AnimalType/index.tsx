import { useParams } from "react-router-dom"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { animalsData } from "@/consts/mock"
import { useEffect, useState } from "react"
import AnimalDialog from "@/components/DetailsDialog"

const AnimalType = () => {
  const params = useParams()
  const matchObj = animalsData[params.id]

  const tabs = Object.keys(matchObj || [])
  const tabsContent = Object.values(matchObj || [])

  const [tab, setTab] = useState(tabs[0])
  const [bgImage, setBgImage] = useState("")

  const onTabChange = (value) => {
    setTab(value)
  }

  useEffect(() => {
    setTab(Object.keys(matchObj || [])[0])
    const nameOfImage = params.id?.toLowerCase()
    setBgImage(nameOfImage)
  }, [params.id])

  return (
    <div
      style={{ "--image-url": `url('/src/assets/${bgImage}.jpg')` }}
      className={`w-full
   h-100vhCalc
    p-5
    relative
    overflow-hidden
    block
    z-10 bg-[image:var(--image-url)]

    bg-${bgImage}-bg
   
    bg-cover
    bg-no-repeat
    bg-center

    before:content-['']
    before:absolute
    before:inset-0
    before:block
    before:bg-black
    before:opacity-50
    before:z-[-5]`}
    >
      <h1 className="text-white">Animal Type: {params.id}</h1>

      <Tabs
        value={tab}
        onValueChange={onTabChange}
        defaultValue={tabs[0]}
        className="w-6/12"
      >
        <TabsList className=" mb-5">
          {tabs?.map((tab) => (
            <TabsTrigger value={`${tab}`}>{tab}</TabsTrigger>
          ))}
        </TabsList>
        {tabsContent?.map((content, index) => (
          <TabsContent
            className="flex flex-col gap-5 m-0"
            value={`${tabs[index]}`}
          >
            {content?.map((animal) => {
              return (
                <>
                  <AnimalDialog type="type" animalData={animal} />
                  <div className="flex gap-5 flex-wrap">
                    {animal?.subType &&
                      animal?.subType.map((subtype) => {
                        return (
                          <AnimalDialog type="subType" animalData={subtype} />
                        )
                      })}
                  </div>
                </>
              )
            })}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default AnimalType
