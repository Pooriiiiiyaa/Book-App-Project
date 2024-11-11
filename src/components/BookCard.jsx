import { useState } from "react";
import { FaHeart } from "react-icons/fa";


import styles from "../components/BookCard.module.css"

function BookCard({data , handleLikedList}) {

    const [like , setLike] = useState(false)

    const likedHandler = () => {

        handleLikedList(data , like);

        setLike((like) => !like)
    }

    const {author, image , language , pages , title } = data
    console.log(data);
  return (
    <div className={styles.card} >
        <img src={image} alt={title} />
        <div className={styles.info} >
            <h3>{title}</h3>
            <p>{author}</p>
            <div>
                <span>{language}</span>
                <span>{pages} pages</span>
            </div>
        </div>
        <button onClick={likedHandler}>
            <FaHeart color={like ? "red" : "e0e0e0"} fontSize="1.8rem" />
        </button>
    </div>
  )
}

export default BookCard