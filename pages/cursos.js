import Layout from "../components/Layout"
import styles from "../styles/Curso.module.css"

const Cursos = () => {
  return (
    <Layout>
        <h2 className={styles.tituloprox}>Próximamente...</h2>
        <h3 className={styles.textoprox}>Manténte atento a nuestras actualizaciones</h3>
    </Layout>
  )
}

export default Cursos