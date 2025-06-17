/** Styling imports */
import styles from './Drawer.module.css'
import drawerImg from '../images/drawers.jpg'

const Drawer = () => {
  return (
    <div className={styles['drawer']}>
      <img src={drawerImg} alt="Drawers"/>
    </div>
  )
}

export default Drawer