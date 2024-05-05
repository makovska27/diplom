const ANIMALS = {
  MAMALS: "Mammals",
  BIRDS: "Birds",
  INSECTS: "Insects",
  FISH: "Fish",
  REPTILES: "Reptiles",
  AMPHIBIANS: "Amphibians",
}

const Mammals = {
  rodents: [
    "agouti",
    "beaver",
    "blesmol",
    "capybara",
    "chinchilla",
    "degu",
    "guinea pig",
    "hamster",
  ],
  dog: ["coyote", "culpeo", "dhole", "jackal", "wolf"],
}

const animalsData = {
  Mammals: {
    primates: [
      {
        id: 1,
        name: "ape",
        description:
          "any of various large tailless semi-erect primates of Africa and southeastern Asia",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/d2/11/6b/d2116ba1f417590947624c5f7fccd136.jpg",
        subType: [
          {
            id: 4,
            name: "bonobo",
            description:
              "a small, intelligent African ape with black or brown fur, similar to a chimpanzee",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/564x/89/e1/a0/89e1a09e515a3bee850511bdcaf8d53c.jpg",
          },
          {
            id: 5,
            name: "chimpanzee",
            description:
              "a small intelligent African ape (= an animal like a large monkey without a tail)",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/564x/f0/e8/a9/f0e8a95d6e2073de82c96cefd1bb2e04.jpg",
          },
          {
            id: 6,
            name: "gorilla",
            description: "a large ape that comes from western Africa",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/564x/51/b0/ba/51b0bae9702cbca03db8c7c19d078373.jpg",
          },
          {
            id: 7,
            name: "orangutan",
            description: "a largely herbivorous arboreal anthropoid ape",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/564x/f2/9a/2c/f29a2c834adbf25c81eb8818b014122f.jpg",
          },
          {
            id: 8,
            name: "gibbon",
            description:
              "a small ape with long arms that lives in trees in the forests of South Asia",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/564x/29/f4/49/29f4498d07c93ab720d884bc95b79f21.jpg",
          },
        ],
      },
      {
        id: 2,
        name: "lemur",
        description:
          "any of various arboreal diurnal or nocturnal, chiefly arboreal primates  of Madagascar and the Comoros Islands",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/3e/b0/c3/3eb0c36994b78489f3d2e20aef6c26c4.jpg",
        subType: [
          {
            id: 9,
            name: "indri",
            description:
              "a large diurnal black-and-white lemur of Madagascar that is about two feet long with a rudimentary tail",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/564x/b1/e7/2a/b1e72a30368cea9a086f97cdaea174a6.jpg",
          },
          {
            id: 10,
            name: "sifaka",
            description:
              "any of several diurnal mostly black-and-white lemurs (genus Propithecus) with a long tail and silky fur",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/564x/b0/0b/f4/b00bf4e9d94d1ded44c8193cbf1064f2.jpg",
          },
        ],
      },
      {
        id: 3,
        name: "monkey",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/d2/11/6b/d2116ba1f417590947624c5f7fccd136.jpg",
        subType: [
          {
            id: 1,
            name: "baboon",
            description:
              "a large African or Asian monkey with a long face like a dog’s",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/564x/bb/05/68/bb05684f8f5a48cf08e512bfdceb6084.jpg",
          },
          {
            id: 10,
            name: "colobus",
            description:
              "any of various slender, long-tailed monkeys  of equatorial African forests and grasslands that have the thumb absent or vestigial and are black usually with white encircling the face and long white fringes of silky hair on the sides of the body and the tail",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/564x/02/eb/26/02eb263f556d6f10c047744012bfe305.jpg",
          },
          {
            id: 10,
            name: "mandrill",
            description:
              "a large West African monkey that has a red and blue face and a very short tail",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/564x/eb/69/a5/eb69a5185ead71790a44e6f557a9277c.jpg",
          },
        ],
      },
    ],
    rodents: [
      {
        id: 3,
        name: "agouti",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/6f/4e/7b/6f4e7b98738947a672b09f5d4c68b044.jpg",
      },
      {
        id: 3,
        name: "blesmol",
        description:
          "any of several grayish burrowing southern African rodents of Bathyergus and related genera that are very destructive to root crops",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
      {
        id: 4,
        name: "capybara",
        description: "",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
      {
        id: 5,
        name: "chinchilla",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
    ],
    dog: [
      {
        id: 1,
        name: "doggy",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
      {
        id: 2,
        name: "beaver",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
      {
        id: 3,
        name: "blesmol",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
    ],
    cat: [
      {
        id: 1,
        name: "bay cat",
        description: "a wild cat of Borneo and adjacent regions",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/2d/28/e9/2d28e96d25b5d65c3b75c299efc60d75.jpg",
      },
      {
        id: 2,
        name: "beaver",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
      {
        id: 3,
        name: "blesmol",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
    ],
    marsupial: [
      {
        id: 1,
        name: "koala",
        description:
          "an Australian arboreal marsupial that has a broad head, large hairy ears, dense gray fur, and sharp claws and feeds on eucalyptus leaves",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/6e/6e/aa/6e6eaaef8189c45ada3e2431ebb2e876.jpg",
      },
    ],
  },
  Birds: {
    qwe: [
      {
        id: 1,
        name: "rrr",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
      {
        id: 2,
        name: "beaver",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
      {
        id: 3,
        name: "blesmol",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
      {
        id: 4,
        name: "capybara",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
      {
        id: 5,
        name: "chinchilla",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
    ],
    ptaha: [
      {
        id: 1,
        name: "ptiza",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
      {
        id: 2,
        name: "beaver",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
      {
        id: 3,
        name: "blesmol",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
      {
        id: 4,
        name: "Sasha",
        description: "about Sasha",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
    ],
  },
  Insects: {
    qwe: [
      {
        id: 1,
        name: "Жук",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
      {
        id: 2,
        name: "Джміль",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
      {
        id: 3,
        name: "blesmol",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
      {
        id: 4,
        name: "capybara",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
      {
        id: 5,
        name: "chinchilla",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
    ],
    bug: [
      {
        id: 1,
        name: "Оса",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
      {
        id: 2,
        name: "Жук-убивця",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
      {
        id: 3,
        name: "blesmol",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
      {
        id: 4,
        name: "Sasha",
        description: "about Sasha",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
    ],
  },
  Fish: {
    river: [
      {
        id: 1,
        name: "Окунь",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
      {
        id: 2,
        name: "Karas",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
    ],
    ocean: [
      {
        id: 1,
        name: "shark",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
    ],
  },
  Reptiles: {
    small: [
      {
        id: 1,
        name: "reptile",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
    ],
    big: [
      {
        id: 1,
        name: "big reptile",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
    ],
  },
  Amphibians: {
    aaa: [
      {
        id: 1,
        name: "amphibian",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
      {
        id: 2,
        name: "amphibian 2",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
    ],
    bbb: [
      {
        id: 1,
        name: "ccc",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://animals.net/wp-content/uploads/2019/09/Agouti-5-650x425.jpg",
      },
    ],
  },
}

export { ANIMALS, Mammals, animalsData }
