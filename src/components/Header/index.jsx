import react from 'react'
import styles from './style.module.scss';
import Navbar from './NavBar/index'
import Content from "./Content/index"

const Header = () => {
  return (
    <div className={`${styles.background_header_img_container} p-4`}>
      <Navbar/>
      <Content/>
    </div>
  )
}

export default Header
