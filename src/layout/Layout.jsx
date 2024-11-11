import styles from "../layout/layout.module.css"
function Layout({children}) {
  return (
    <>
        <header>
            <h2>Library App</h2>
            <p><a href="#">KodeHero</a> || React Course</p>
        </header>
        {children}
        <footer>
            <p>Developed By Pooriya Hadizadeh</p>
        </footer>
    </>
)
}

export default Layout