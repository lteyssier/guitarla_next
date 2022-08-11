
import Layout from "../components/Layout"
import Image from "next/image"
import styles from "../styles/Nosotros.module.css"

const Nosotros = () => {
  return (
   <Layout  
    pagina='Nosotros'>
      <main className="contenedor">
          <h2 className="heading">Nosotros</h2>
          <div className={styles.contenido}>
            <Image
            layout="responsive"
            width={600} height={450}
             src="/img/nosotros.jpg"
             alt="imagen nosotros"
            />
              <div>
                  <p>Cras a facilisis turpis, id mollis ipsum. Phasellus faucibus dui sed aliquam elementum. Nullam in est nec sem facilisis pretium ut in ex. Etiam at volutpat enim, ut vestibulum magna. Maecenas nunc tellus, porttitor ut lacus eget, placerat ullamcorper leo. Mauris sed orci varius, laoreet neque et, blandit magna. Ut a orci tellus. Curabitur ac posuere arcu. Fusce consequat consequat nisi faucibus tincidunt. Donec nec tempor arcu, et ultrices sapien. Morbi condimentum nibh lectus, ac lobortis diam aliquam et. </p>
                  <p>Cras a facilisis turpis, id mollis ipsum. Phasellus faucibus dui sed aliquam elementum. Nullam in est nec sem facilisis pretium ut in ex. Etiam at volutpat enim, ut vestibulum magna. Maecenas nunc tellus, porttitor ut lacus eget, placerat ullamcorper leo. Mauris sed orci varius, laoreet neque et, blandit magna. Ut a orci tellus. Curabitur ac posuere arcu. Fusce consequat consequat nisi faucibus tincidunt. Donec nec tempor arcu, et ultrices sapien. Morbi condimentum nibh lectus, ac lobortis diam aliquam et. </p>
              </div>
          </div>
      </main>
   </Layout>    
  )
}

export default Nosotros