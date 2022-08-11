import Layout from "../components/Layout"
import ListadoBlog from "../components/ListadoBlog"
import Entrada from "../components/Entrada"
import styles from '../styles/Blog.module.css'

const Blog = ({entradas}) => {

  return (
   <Layout  
    pagina='Blog'>
      <main className="contenedor">
        <ListadoBlog
          entradas={entradas}
        />
      </main>
   </Layout>    
  )
}

export async function getServerSideProps(){
  {/* Si se pretende cargar una vez sin esperar movientos, es mejor utilizar getStaticSideProps, esto va a generar un archivo statico en el npm run build*/}
  const url = `${process.env.API_URL}/blogs`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()
  return {
    props:{
        entradas
    }
  }
}

export default Blog