import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

const TabsListComponent = ({ tabs, tabsContent }) => {
  return (
    <Tabs data-state defaultValue={tabs[0]} className="w-[400px]">
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
          {content?.map((animal) => (
            <Button>{animal.name}</Button>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default TabsListComponent
