import imageFirst from "./image/concept-art.jpg"
import imageSecond from "./image/chara-design.jpg"
import imageThird from "./image/animation.jpg"
import imageFour from "./image/development.jpg"
import imageFive from "./image/content-creator.jpg"
import imageSix from "./image/illustration.jpg"

const images = [
    { id: "concept-art", src: imageFirst },
    { id: "chara-design", src: imageSecond },
    { id: "animation", src: imageThird },
    { id: "development", src: imageFour },
    { id: "content-creator", src: imageFive },
    { id: "illustration", src: imageSix },
]


export default [
    {
        id: 1,
        title: "Concept Art",
        description: "",
        coverImg: images.find((i) => i.id === "concept-art").src,
    },
    {
        id: 2,
        title: "Character Design",
        description: "",
        coverImg: images.find((i) => i.id === "chara-design").src,
    },
    {
        id: 3,
        title: "Animation",
        description: "",
        coverImg: images.find((i) => i.id === "animation").src,
    },
    {
        id: 4,
        title: "Web Development",
        description: "",
        coverImg: images.find((i) => i.id === "development").src,
    },
    {
        id: 5,
        title: "Content Creator",
        description: "",
        coverImg: images.find((i) => i.id === "content-creator").src,
    },
    {
        id: 6,
        title: "Illustration",
        description: "",
        coverImg: images.find((i) => i.id === "illustration").src,
    },
]