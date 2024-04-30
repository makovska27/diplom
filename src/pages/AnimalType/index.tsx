import { useParams } from "react-router-dom"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mammals } from "@/consts/mock"
import { Button } from "@/components/ui/button"

const AnimalType = () => {
  const params = useParams()
  const tabs = Object.keys(Mammals)
  const tabsContent = Object.values(Mammals)
  console.log("tabsContent", tabsContent)
  return (
    <div>
      <h1>Animal Type: {params.id}</h1>

      <Tabs defaultValue={tabs[0]} className="w-[400px]">
        <TabsList className=" mb-5">
          {tabs.map((tab) => (
            <TabsTrigger value={`${tab}`}>{tab}</TabsTrigger>
          ))}
        </TabsList>
        {tabsContent.map((content, index) => (
          <TabsContent
            className="flex flex-col gap-5 m-0"
            value={`${tabs[index]}`}
          >
            {content.map((animal) => (
              <Button>{animal}</Button>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default AnimalType
