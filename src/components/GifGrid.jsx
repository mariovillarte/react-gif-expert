/* eslint-disable react-hooks/exhaustive-deps */

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    
const { images, isLoading } = useFetchGifs( category );
    


    return(
        <>
            <h3>{ category }</h3>

            { isLoading && <h2>Cargando...</h2> }

            <div className="card-grid">
                {images.map( (image) => (//aca tmb se puede desestructurar las propiedades el obj img y enviarlas como props individuales
                    <GifItem key= { image.id }
                             {...image} />//aca con spread operartor creamos una copia del obj image, y de esa manera le mandamos el obj completo como prop al componente. Muy util ne el caso que el obj tenga muchas propiedades y tenemos que pasarle muchas al componente, no las tenemos que estar escribiendo, solo desesructuramos las necesarias en la declaracion del compnonte, tmb es mas comun pasar el image como prop image={image}, es lo mismo q hace el spread operator.
                ))}
                
            </div>

            
            
        </>
    )
}