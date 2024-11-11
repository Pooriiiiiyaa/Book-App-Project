import { IoIosSearch } from "react-icons/io";

import styles from "../components/SearchBox.module.css"

function SearchBox({search , setSearch , searchHandler}) {
  return (
    <div className={styles.search}>
        <input type="search" placeholder="Search Title" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase().trim())} />
        <button onClick={searchHandler}><IoIosSearch /></button>
    </div>

  )
}

export default SearchBox