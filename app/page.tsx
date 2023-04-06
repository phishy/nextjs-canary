import { Inter } from "next/font/google"
import styles from "./page.module.css"
import Filters from "./Filters"

const inter = Inter({ subsets: ["latin"] })

export default function Home(props: any) {
  console.log(props);

  let cards = [
    {
      name: "Card 1",
      archived: "false",
    },
    {
      name: "Card 2",
      archived: "true",
    },
    {
      name: "Card 3",
      archived: "false",
    },
    {
      name: "Card 4",
      archived: "true",
    },
  ]

  let filteredCards = cards.filter(
    (card) => (card.archived == props.searchParams.archived)
  )

  return (
    <div className={styles.container}>
      <Filters />
      <div className={styles.cards}>
        {filteredCards.map((card) => (
          <div key={card.name}>{card.name}</div>
        ))}
      </div>
    </div>
  )
}
