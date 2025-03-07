import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true )


    useEffect( () => {
        getGifs( category ).then(newImages => {setImages(newImages);
            setIsLoading( false )});
        }, [] )//1ra Forma de pasar las imagenes al useState: getGifs() es async, por lo cual retorna una promesa que se resuelve con un .then, el then recibe lo que retorno getGifs como argumento al setImages  

    
    
    // const getImages = async() => {
    //     const newImages = await getGifs( category );
    //     setImages( newImages );
    // }

    // useEffect(() => {
    //   getImages()// 2da Forma de pasar las img al state: haciendo una funcion externa al useEffect getImages, y ejecutandola dentro del useEffect
    // }, [])



  return {
    images: images,// aca puede ponerse images e isLoading solos xq el nombre de la propiedad y su valor se llaman iguales
    isLoading: isLoading
}


}