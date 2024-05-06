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
            link: "Cambridge Dictionary",
            image:
              "https://i.pinimg.com/564x/89/e1/a0/89e1a09e515a3bee850511bdcaf8d53c.jpg",
          },
          {
            id: 5,
            name: "chimpanzee",
            description:
              "a small intelligent African ape (= an animal like a large monkey without a tail)",
            link: "Oxford Dictionary",
            image:
              "https://i.pinimg.com/564x/f0/e8/a9/f0e8a95d6e2073de82c96cefd1bb2e04.jpg",
          },
          {
            id: 6,
            name: "gorilla",
            description: "a large ape that comes from western Africa",
            link: "Cambridge Dictionary",
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
            link: "Cambridge Dictionary",
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
            link: "Oxford Dictionary",
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
            link: "Cambridge Dictionary",
            image:
              "https://i.pinimg.com/564x/eb/69/a5/eb69a5185ead71790a44e6f557a9277c.jpg",
          },
        ],
      },
    ],
    rodents: [
      {
        id: 1,
        name: "agouti",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/6f/4e/7b/6f4e7b98738947a672b09f5d4c68b044.jpg",
      },
      {
        id: 2,
        name: "beaver",
        description:
          "either of two large semiaquatic herbivorous rodents, having webbed hind feet and a broad flat scaly tail, and constructing dams and partially submerged lodges",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/ae/f3/79/aef379594cec77cbd9c903a0caf4b5da.jpg",
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
        description: "a tailless semiaquatic South and Central American rodent often exceeding four feet (1.2 meters) in length",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/cb/b5/4a/cbb54aa690b30a8e5e7827b83f4abe87.jpg",
      },
      {
        id: 5,
        name: "chinchilla",
        description:
          "either of two small South American rodents of the high Andes that are the size of large squirrels, have very soft pearly-gray fur, and are extensively bred in captivity",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/c5/30/13/c5301332f1ad3f1f2a8bce6eaf9cf287.jpg",
      },
      {
        id: 6,
        name: "degu",
        description:
          "any of several small hystricomorphic rodents of western South America",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/ca/97/2e/ca972ea855e4829cccee9f69ef8d25db.jpg",
      },
      {
        id: 7,
        name: "guinea pig",
        description:
          "a small stout-bodied short-eared tailless domesticated rodent of South American origin often kept as a pet and widely used in biological research",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/a0/1b/6f/a01b6f8d3f60279a3a3b4967467b61a6.jpg",
      },
      {
        id: 8,
        name: "hamster",
        description:
          "any of a subfamily of small rodents having very large cheek pouches",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/f5/1f/65/f51f654a7380e1d2fc6763ad1bd93fe4.jpg",
      },
      {
        id: 9,
        name: "mara",
        description:
          "a long-legged long-eared rodent closely related to the cavies and widely distributed in southern South America",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/db/ef/c9/dbefc9e3963a2e8a7443f20715c86ce2.jpg",
      },
      {
        id: 10,
        name: "mouse",
        description:
          "any of numerous small rodents with pointed snout, rather small ears, elongated body, and slender tail",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/b2/2f/01/b22f017123a58d32322a369fef7bff24.jpg",
      },
      {
        id: 11,
        name: "nutria",
        description:
          "a large South American semiaquatic rodent  with webbed hind feet and a round nearly hairless tail that has been introduced into parts of Europe, Asia, and North America",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/11/16/7d/11167d0fd354fc5071e28e89585e0119.jpg",
      },
      {
        id: 12,
        name: "paca",
        description:
          "either of two large nocturnal chiefly Central and South American rodents",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/01/49/fd/0149fdf34f6dc7fdd8878b999b1942a6.jpg",
      },
      {
        id: 13,
        name: "rat",
        description:
          "a small rodent, larger than a mouse, that has a long tail and is considered to be harmful",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/2d/6e/85/2d6e856c98f6d2e201c52af207655e8c.jpg",
      },
      {
        id: 14,
        name: "squirrel",
        description:
          "any of various small or medium-sized rodents",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/54/b7/08/54b7089fc75ac9d781de55783ca50630.jpg",
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
        name: "bobcat",
        description:
          "a North American wild animal of the cat family with brown hair, pointed ears, and a short tail",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/28/ef/2a/28ef2a96f82eb13f8b82b6a9e1d9d8a5.jpg",
      },
      {
        id: 3,
        name: "caracal",
        description:
          "a long-legged reddish-brown nocturnal cat  of savannas in Africa and parts of Asia that has long pointed ears with a tuft of black hairs at the tip",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/d7/fe/9b/d7fe9b41150f9b98f530fb697ca40db8.jpg",
      },
      {
        id: 4,
        name: "cheetah",
        description:
          "a wild animal of the cat family that has black spots and that runs very fast",
        link: "Oxford Dictionary",
        image:
          "https://i.pinimg.com/564x/78/e7/8a/78e78a2ddb82065494ba12eacd8a99c0.jpg",
      },
      {
        id: 5,
        name: "cougar",
        description:
          "a large American wild animal of the cat family, with yellow-brown or grey fur",
        link: "Oxford Dictionary",
        image:
          "https://i.pinimg.com/564x/84/af/cb/84afcba84cbb7dc682268c0d059376a8.jpg",
      },
      {
        id: 6,
        name: "jaguar",
        description:
          "a large animal of the cat family, that has yellow-brown fur with black rings and spots. Jaguars live in parts of Central and South America",
        link: "Oxford Dictionary",
        image:
          "https://i.pinimg.com/564x/68/83/7c/68837c715b4ee45e3111b3bf0512da54.jpg",
      },
      {
        id: 7,
        name: "leopard",
        description:
          "a large wild cat that has yellow fur with black spots on it and lives in Africa and southern Asia",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/a8/bd/55/a8bd55743b25d2b7bb188c80ee3e236c.jpg",
      },
      {
        id: 8,
        name: "lion",
        description:
          "a large wild animal of the cat family with yellowish -brown fur that lives in Africa and southern Asia",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/736x/14/f2/1f/14f21feefad0a4a70d3fbb2d0577a22c.jpg",
      },
      {
        id: 9,
        name: "lynx",
        description:
          "a wild animal of the cat family that has brown hair, sometimes with dark spots on it, pointed ears, and a short tail",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/6b/b7/f6/6bb7f645e1f1a4ae041b2fbbc58f4695.jpg",
      },
      {
        id: 10,
        name: "margay",
        description:
          "a small American spotted cat resembling the ocelot and ranging from northern Mexico to Argentina",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/fc/ef/b8/fcefb8149321bdc2d5451c6f1af23dbd.jpg",
      },
      {
        id: 11,
        name: "ocelot",
        description:
          "a small wild cat that has yellow fur with black spots and lives in South America and Central America",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/fb/f7/2b/fbf72b267a82d8c80a4a9560db12c4bb.jpg",
      },
      {
        id: 12,
        name: "panther",
        description:
          "a black leopard (= large wild cat)",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/dd/79/4e/dd794e2b1e7af2d3a01c723a67d2d5e9.jpg",
      },
      {
        id: 13,
        name: "puma",
        description:
          "a large, brown wild cat that lives in North and South America",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/18/98/1a/18981ae6d1719b7c02f086f759daa1a8.jpg",
      },
      {
        id: 14,
        name: "serval",
        description:
          "a medium-sized African wild cat that has yellow-brown fur with black spots and stripes",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/99/ee/9a/99ee9a3433e8f489d5fb01e2c7dc61cb.jpg",
      },
      {
        id: 15,
        name: "tiger",
        description:
          "a large wild animal of the cat family that has orange fur with black stripes (= narrow lines) and lives in parts of Asia",
        link: "Oxford Dictionary",
        image:
          "https://i.pinimg.com/564x/5f/3b/4d/5f3b4d18e4c8b1ca2d05bce43706072f.jpg",
      },
    ],
    dog: [
      {
        id: 1,
        name: "coyote",
        description: "a small wild animal like a dog that lives in North America",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/b9/b8/0e/b9b80ebfd18cb953bd49fe6ac96f17b1.jpg",
      },
      {
        id: 2,
        name: "culpeo",
        description:
          " a South American mammal that was formerly considered a true dog ",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/8b/09/ee/8b09eef9fd2c62aa5a81f07f52926e85.jpg",
      },
      {
        id: 3,
        name: "dhole",
        description:
          "a wild dog occurring from India to southern Siberia that typically hunts in packs and often preys on large animals (such as deer and antelope)",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/736x/fd/ab/09/fdab094f285b712b35c17b13230e80eb.jpg",
      },
      {
        id: 4,
        name: "jackal",
        description:
          "a wild animal like a dog, that eats the meat of animals that are already dead and lives in Africa and Asia",
        link: "Oxford Dictionary",
        image:
          "https://i.pinimg.com/564x/b2/9f/b2/b29fb2ced415c791b3e9d5f7ac886a9f.jpg",
      },
      {
        id: 5,
        name: "wolf",
        description:
          "a wild animal of the dog family",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/e5/79/33/e579331d61e0b4ae62500d43488be871.jpg",
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
      {
        id: 2,
        name: "kangaroo",
        description:
          "a herbivorous leaping marsupial mammals of Australia, New Guinea, and adjacent islands with a small head, large ears, long powerful hind legs, a long thick tail used as a support and in balancing, and rather small forelegs not used in locomotion",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/85/64/72/85647200497ac46cdc052efda7b428c6.jpg",
      },
      {
        id: 3,
        name: "numbat",
        description:
          "a small Australian marsupial that has a reddish-brown coat with white stripes on the back, a pointed snout, and a long slender tongue used to feed chiefly on termites",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/db/76/67/db7667ffc432407425522735f1c6d563.jpg",
      },
      {
        id: 4,
        name: "opossum",
        description:
          "a small American marsupial that lives in trees and has thick fur, a long nose, and a tail without fur",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/5c/ae/3e/5cae3ee4afce9c28903693185e22128a.jpg",
      },
      {
        id: 5,
        name: "quokka",
        description:
          "a stocky herbivorous marsupial of southwestern Australia that has a short tail",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/736x/a1/6b/75/a16b752c3ce79ee2230d815ef0a3e138.jpg",
      },
      {
        id: 6,
        name: "tasmanian devil",
        description:
          "a heavily built carnivorous nocturnal Tasmanian marsupial that is about the size of a badger and has powerful jaws and teeth and a chiefly black coat marked with white on the chest",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/736x/1f/71/25/1f71253dc8f0aa241edce3e97cf0e228.jpg",
      },
      {
        id: 7,
        name: "tasmanian tiger",
        description:
          "a somewhat doglike carnivorous marsupial  that formerly inhabited Tasmania but is now considered extinct",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/736x/f7/d7/b4/f7d7b4055de4257e672274ebde2dcbfa.jpg",
      },
      {
        id: 8,
        name: "wombat",
        description:
          "a stocky burrowing Australian marsupials resembling small bears",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/a2/88/57/a28857afbc38688ed68a707988939cc7.jpg",
      },
    ],
  },
  Birds: {
    flightless: [
      {
        id: 1,
        name: "takahe",
        description:
          "a flightless bird of the rail family that occurs in New Zealand",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/aa/b4/ec/aab4ec475ad78206060e15f078a58fac.jpg",
      },
    ],
    songbirds: [
      {
        id: 1,
        name: "bulbul",
        description:
          "a songbird frequently mentioned in Persian poetry that is probably a nightingale",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/61/51/62/6151624e6e46910a3245ab2d0883f197.jpg",
      },
      {
        id: 2,
        name: "finch",
        description:
          "any of numerous passerine songbirds having a short stout usually conical bill adapted for crushing seeds",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/07/28/44/07284473d7b02a081636732aa0ddf3ea.jpg",
      },
      {
        id: 3,
        name: "lark",
        description:
          "a family  of chiefly Old World ground-dwelling songbirds that are usually brownish in color",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/736x/6b/e8/d7/6be8d7cbc46e389784f6c7ebe029d299.jpg",
      },
      {
        id: 4,
        name: "pipit",
        description: "small songbird",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/93/bc/50/93bc50a1fa2dd6dea8bbf10cba42b845.jpg",
      },
      {
        id: 5,
        name: "robin",
        description: "songbirds that are related to or resemble the European robin",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/e6/bb/67/e6bb674a27178f2e6a6ece1a4ff8bae0.jpg",
      },
      {
        id: 6,
        name: "wren",
        description: "small typically brownish oscine singing birds",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/1d/9a/39/1d9a39b1078c317599131cfdfc2fb21e.jpg",
      },
    ],
    waterbirds: [
      {
        id: 1,
        name: "cormorant",
        description:
          "any of various dark-colored web-footed waterbirds that have a long neck, hooked bill, and distensible throat pouch",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/e7/95/1e/e7951e25363e474ecfc03af10caea1d9.jpg",
      },
      {
        id: 2,
        name: "goose",
        description:
          "a large water bird similar to a duck but larger, or the meat from this bird",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/18/0e/0d/180e0d1d96a602b1cd104fa1ebc07956.jpg",
      },
      {
        id: 3,
        name: "grebe",
        description:
          "any of a family of grey or brown water birds that swim on or under surface of the water",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/fe/b3/41/feb34154cfbe5006f707fe579b9b6914.jpg",
      },
    ]
  },
  Insects: {
    hymenopterous: [
      {
        id: 1,
        name: "ant",
        description:
          "colonial hymenopterous insects with a complex social organization and various castes performing special duties",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/65/34/29/653429b91163c5c767c7a4a5a96fd86b.jpg",
      },
      {
        id: 2,
        name: "bee",
        description:
          "any of numerous hymenopterous insects that differ from the related wasps especially in the heavier hairier body and in having sucking as well as chewing mouthparts, that feed on pollen and nectar, and that store both and often also honey",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/04/7e/0b/047e0b76a13e26836c08b8b2d01533d2.jpg",
      },
      {
        id: 3,
        name: "horntail",
        description:
          "any of various hymenopterous insects related to the typical sawflies but having females with a stout hornlike ovipositor and larvae that burrow in woody plants",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/1a/e8/64/1ae86410cf2b3b51762e146803ff13fa.jpg",
      },
      {
        id: 4,
        name: "sawfly",
        description:
          "hymenopterous insects with the female usually having a sawlike ovipositor and with the larva resembling a plant-feeding caterpillar",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/4f/e2/50/4fe250026a0c4ffaae5ac3a473fefcce.jpg",
      },
      {
        id: 5,
        name: "wasp",
        description:
          "any of numerous social or solitary winged hymenopterous insects that usually have a slender smooth body with the abdomen attached by a narrow stalk, well-developed wings, biting mouthparts, and in the females and workers an often formidable sting",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/2b/bd/76/2bbd7623c133355567403b18da9dc315.jpg",
      },
    ],
    lepidopteran: [
      {
        id: 1,
        name: "butterfly",
        description:
          "any of numerous slender-bodied diurnal lepidopteran insects including one superfamily  with broad often brightly colored wings and usually another superfamily comprising the skippers",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/9c/48/7b/9c487b975706eed72540e1d586c92db9.jpg",
        subType: [
          {
            id: 2,
            name: "fritillary",
            description:
              "a butterfly with orange-brown and black wings",
            link: "Oxford Dictionary",
            image:
              "https://i.pinimg.com/564x/17/e8/62/17e8623432364b44471a73282ed939bc.jpg",
          },
          {
            id: 3,
            name: "metalmark",
            description:
              "any of a family of small or medium-sized usually brightly colored chiefly tropical butterflies that often have metallic coloration on the wings",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/564x/e7/a8/81/e7a88166e8e6d36a724d8dda0254af36.jpg",
          },
          {
            id: 4,
            name: "monarch butterfly",
            description:
              "a large butterfly (= a flying insect) with orange and black wings, found mainly in North America",
            link: "Oxford Dictionary",
            image:
              "https://i.pinimg.com/736x/71/3b/28/713b28297ae6ea55a5f341f0cfe0dec1.jpg",
          },
          {
            id: 5,
            name: "morpho",
            description:
              "any of a genus of large showy tropical American butterflies that typically have a brilliant blue metallic luster on the upper surface of the wings",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/564x/ec/e9/9c/ece99cbc1f2f438e55ff7ca3173aa1b8.jpg",
          },
          {
            id: 6,
            name: "painted lady",
            description:
              "a butterfly that has orange-brown wings with darker marks on them",
            link: "Oxford Dictionary",
            image:
              "https://i.pinimg.com/564x/b7/2c/f1/b72cf159badf5b5349e323060338cfe8.jpg",
          },
          {
            id: 7,
            name: "swallowtail",
            description:
              "large brightly marked butterflies with each hind wing typically having an elongated process",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/564x/9e/6e/bb/9e6ebb0cea555b3ed2d825a32b7484ae.jpg",
          },
        ],
      },
      {
        id: 8,
        name: "moth",
        description:
          "any of various usually nocturnal lepidopteran insects with antennae that are often feathery, with a stouter body, duller coloring, and proportionately smaller wings than the butterflies, and with larvae that are plant-eating caterpillars",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/e2/f1/59/e2f1596f356bb69f15b8d34f371a366b.jpg",
      },
      {
        id: 9,
        name: "skipper",
        description:
          "a superfamily of lepidopterous insects that have stout bodies, smaller wings, and usually hooked antennae",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/58/2b/11/582b113b49e78b47214bff8ca41c9d04.jpg",
      },
    ],
    orthopteran: [
      {
        id: 10,
        name: "cricket",
        description:
          "leaping orthopteran insects noted for the chirping notes produced by the male by rubbing together specially modified parts of the forewings",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/37/93/d8/3793d8df8047a651c0358f40746952b7.jpg",
      },
      {
        id: 11,
        name: "grasshopper",
        description:
          "orthopterous insects  having the hind legs adapted for leaping and sometimes engaging in migratory flights in which whole regions may be stripped of vegetation",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/7c/29/ed/7c29edf36c52cf5cabf00ff47dad1c5e.jpg",
      },
    ],
    homopterous: [
      {
        id: 12,
        name: "aphid",
        description:
          "very small soft-bodied homopterous insects that suck the juices of plants",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/ad/02/49/ad0249eba727c695ace0b476e9e13ff5.jpg",
      },
      {
        id: 13,
        name: "cicada",
        description:
          "homopterous insects which have a stout body, wide blunt head, and large transparent wings and the males of which produce a loud buzzing noise usually by stridulation",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/1f/a6/bf/1fa6bfc509d34cbb9fd2d3b07226afee.jpg",
      },
      {
        id: 14,
        name: "spittlebug",
        description:
          "homopterous insects whose nymphal larvae produce a frothy secretion",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/a1/4b/38/a14b388430029a7a37b20f543e626dee.jpg",
      },
      {
        id: 15,
        name: "leafhopper",
        description:
          "small leaping homopterous insects that suck the juices of plants",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/6c/cf/01/6ccf01dc28834f89a9b3627edb0786c6.jpg",
      },
      {
        id: 16,
        name: "treehopper",
        description:
          "small leaping homopterous insects that feed on the sap especially of shrubs and trees",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/51/5b/aa/515baa07a308b77bddeee33ccbedac59.jpg",
      },
      {
        id: 17,
        name: "whitefly",
        description:
          "small homopterous insects that are injurious plant pests",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/50/07/06/5007060b7222110ff71bfc6deb2d5c5a.jpg",
      },
    ],
    hemipteran: [
      {
        id: 18,
        name: "bedbug",
        description:
          "a wingless bloodsucking hemipterous bug  sometimes infesting houses and especially beds and feeding on human blood",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/80/0b/eb/800beb299dbeb414089951eff48bdc10.jpg",
      },
      {
        id: 19,
        name: "plant bug",
        description:
          "an insect of the hemipterous family Miridae including many that are destructive pests of plants",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/cd/02/ca/cd02ca147d7da53d2b8f39dd0647de59.jpg",
      },
      {
        id: 20,
        name: "lace bug",
        description:
          "small bugs that constitute the large hemipterous family, that have bodies and wings covered with a lacy network of raised lines, and that include many that suck plant juices and are serious pests",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/8d/f0/00/8df000a8e580cad5dd3e1d3d20579726.jpg",
      },
    ],
    flying: [
      {
        id: 21,
        name: "crane fly",
        description:
          "a flying insect with very long legs",
        link: "Oxford Dictionary",
        image:
          "https://i.pinimg.com/564x/40/6f/b7/406fb73ce4f336d7cde6acc118acce2b.jpg",
      },
      {
        id: 22,
        name: "fruit fly",
        description:
          "a small flying insect that feeds on plants and leaves its eggs on the leaves of plants",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/e4/8b/0a/e48b0a514730a9c118a69d0f138a5155.jpg",
      },
      {
        id: 23,
        name: "gnat",
        description:
          "a very small flying insect that bites animals and people",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/b7/3e/08/b73e08d2290601f051eec42ace71c1f2.jpg",
      },
      {
        id: 24,
        name: "hornet",
        description:
          "a large wasp (= a black and yellow flying insect) that has a very powerful sting",
        link: "Oxford Dictionary",
        image:
          "https://i.pinimg.com/564x/35/79/ad/3579adae5d733d729933ab30e7e364c8.jpg",
      },
      {
        id: 25,
        name: "horsefly",
        description:
          "any of various large flying insects that bite horses, cattle, and sometimes people",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/4d/a7/4e/4da74eea937840d132024dda0580a530.jpg",
      },
      {
        id: 26,
        name: "mosquito",
        description:
          "a small flying insect that bites people and animals and sucks their blood",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/c9/6d/a4/c96da487f166316152cd78934f2b3c44.jpg",
      },
    ],
    wingless: [
      {
        id: 27,
        name: "flea",
        description:
          "small wingless bloodsucking insects that have a hard laterally compressed body and legs adapted to leaping and that feed on warm-blooded animals",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/87/c0/f0/87c0f0d20a78d0777c2c20a07ca0ba57.jpg",
      },
      {
        id: 28,
        name: "louse",
        description:
          "any of various small wingless usually flattened insects parasitic on warm-blooded animals",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/83/d9/05/83d90537db246551af9cdb0ca077110b.jpg",
      },
    ],
    beetles: [
      {
        id: 29,
        name: "black beetle",
        description:
          "glossy black burrowing beetles that are very destructive to turf and certain cultivated plants in Australia",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/40/42/07/404207a2b855d3dff7e7d72f7743db2d.jpg",
      },
      {
        id: 30,
        name: "click beetle",
        description:
          "beetles able to right themselves with a click when inverted by flexing the articulation between the prothorax and mesothorax",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/4b/26/52/4b2652c78452b6a6c4cc1a8f05cc863e.jpg",
      },
      {
        id: 31,
        name: "diving beetle",
        description:
          "aquatic beetles that breathe while submerged using air trapped under their elytra",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/21/c9/56/21c9563b5461ced9a616227fc2302f5c.jpg",
      },
      {
        id: 32,
        name: "dung beetle",
        description:
          "a beetle that rolls balls of dung in which to lay eggs and on which the larvae feed",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/aa/56/73/aa56732f3b3b62eef2ac06ecf5217a5a.jpg",
      },
      {
        id: 33,
        name: "colorado beetle",
        description:
          "a type of beetle with black and yellow lines on its body that attacks potato plants",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/736x/9a/e6/7a/9ae67affce092575435b8a08d2479fd1.jpg",
      },
      {
        id: 34,
        name: "elm bark-beetle",
        description:
          "a small beetle (= an insect with a hard shell-like back) that moves under the bark (= hard outer covering) of elm trees, bringing a disease that often kills them ",
        link: "Cambridge dictionary",
        image:
          "https://i.pinimg.com/564x/d9/10/a1/d910a185ab95cd229bb333f33ed7ec02.jpg",
      },
      {
        id: 35,
        name: "ladybird",
        description:
          "a small, red beetle that is round and has black spots",
        link: "Cambridge dictionary",
        image:
          "https://i.pinimg.com/564x/9c/54/79/9c54796f8df65954df2c4ef9fe0a0aec.jpg",
      },
      {
        id: 36,
        name: "larder beetle",
        description:
          "a dark brown or nearly black beetle  that  has a bristly larva which feeds on dried animal products",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/d9/10/a1/d910a185ab95cd229bb333f33ed7ec02.jpg",
      },
      {
        id: 37,
        name: "melon beetle",
        description:
          "chrysomelid beetles injurious to melons",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/6f/1f/cd/6f1fcdd71de33886943108a77e21112f.jpg",
      },
      {
        id: 38,
        name: "rhinoceros beetle",
        description:
          "any of various large chiefly tropical scarab beetles having projecting horns on thorax and head",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/04/94/bb/0494bbeb1aba7fe8789e4a0733e0df3c.jpg",
      },
      {
        id: 39,
        name: "stag beetle",
        description:
          "mostly large beetles having males with long and often branched mandibles suggesting the antlers of a stag",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/72/7d/34/727d349e52db228766f58d54dc0f4d38.jpg",
      },
      {
        id: 40,
        name: "tiger beetle",
        description:
          "active carnivorous beetles having larvae that tunnel in the soil",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/e3/05/67/e305675a500ca1cd19cbf9624d4dc0d4.jpg",
      },
      {
        id: 41,
        name: "cone beetle",
        description:
          "small beetles having larvae that develop in and destroy the growing cones of conifers, especially pines",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/13/23/ab/1323abe7d4693d3b2a0abeb6c0e4dea2.jpg",
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
