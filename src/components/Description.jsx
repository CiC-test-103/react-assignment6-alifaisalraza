/** Styling imports */
import styles from './Description.module.css'
import AuthorImg from '../images/avatar-michelle.jpg'
import ShareImg from '../images/icon-share.svg'

const Description = () => {
  return (
    <div className={styles['desc']}>
      <div className={styles['heading']}>Shift the overall look and feel by adding these wonderful 
      touches to furniture in your home 
      </div>
      <div className={styles['para']}>
      Ever been in a room and felt like something was missing? Perhaps 
      it felt slightly bare and uninviting. I’ve got some simple tips 
      to help you make any room feel complete.
      </div>
      <div className={styles['author']}>
        <div className={styles['author-left']}>
          <img src={AuthorImg} alt="author"/>
          <div className={styles['author-date']}> 
            <div className={styles['name']}> Michelle Appleton </div>
            <div className={styles['date']}> 28 Jun 2020 </div>
          </div>
        </div>
        <div className={styles['author-right']}> 
          <div className={styles['empty']}></div>
          <div className={styles['share']}>
            <img src={ShareImg} alt="Share"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description