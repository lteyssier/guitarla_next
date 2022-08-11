import Link from "next/link"
import styles from "../styles/NoEncontrado.module.css"

const NoEcontrado = () => {
  return (

      <div className={styles.no_encontrado}>
        <h1 className="heading">Página no encontrada</h1>
        <Link href="/">
            Volver al inicio
        </Link>
       </div>
        
   
  )
}

export default NoEcontrado