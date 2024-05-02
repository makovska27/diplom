import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const AnimalDialog = ({ animalData, type }) => {
  console.log("animalData.image", animalData.image)
  return (
    <Dialog>
      <DialogTrigger
        className={`${
          type === "type" ? "bg-green-900" : "bg-green-600"
        } p-5 rounded-3xl text-white`}
      >
        {animalData.name}
      </DialogTrigger>
      <DialogContent className="flex p-5  max-w-[600px]">
        <div className="max-w-64 w-64 min-w-64 h-[450px] min-h-[450px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={animalData.image}
            alt="animal"
          />
        </div>

        <DialogHeader className="flex flex-col pt-20">
          <DialogTitle className="text-4xl">{animalData.name}</DialogTitle>
          <DialogDescription className="text-xl">
            {animalData.description}
          </DialogDescription>
          <DialogDescription className="underline underline-offset-1">
            link: {animalData.link}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default AnimalDialog
