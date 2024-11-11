import {books as bookData} from "../constants/mockData"
import BookCard from "../components/BookCard"
import { useState } from "react"
import SideCard from "./SideCard";
import styles from "../components/Books.module.css"
import SearchBox from "./SearchBox";




function Books() {
    const [liked , setLiked] = useState([]);
    const [search , setSearch] = useState([]);
    const [books , setBooks] = useState(bookData)
    const handleLikedList = (book , status) => {
        if(status){
            const newLikeList = liked.filter(i => i.id !== book.id)
            setLiked(newLikeList)
        }else {
            setLiked((like) => [...like , book])
        }
    }

    const searchHandler = () => {
        if(search) {
            const newSearch = bookData.filter((book) => book.title.toLowerCase().includes(search));
            setBooks(newSearch)
        }else {
            setBooks(bookData)
        }
    }

  return (
    <>
    <SearchBox search={search} setSearch={setSearch} searchHandler={searchHandler}/>
    <div className={styles.container} >
        <div className={styles.cards} >
            {books.map(book => (
                <BookCard key={book.id} data ={book} handleLikedList={handleLikedList} />
            ))}
        </div>
            {!!liked.length && <div className={styles.favorite}>
                <h4>Favorites</h4>
                {liked.map((book) => <SideCard key={book.id} data={book} />)}
                </div>}
    </div>
    </>
  )
}

export default Books