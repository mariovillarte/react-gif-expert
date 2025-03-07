/* eslint-disable no-unused-vars */
import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

	const [ categories, setCategories ]    = useState([]);

	

	const OnAddCategory = (newCategory) => {
		if( categories.includes(newCategory) ) return;//si la nueva cat a incluir ya esta en el arreglo con el return se sale de la fc y no la agrega
		setCategories( [...categories, newCategory] );
	}

	return (
		<>

			<h1> GifExpertApp </h1>

			<AddCategory onNewCategory = { OnAddCategory } /> {/* le pasamos como prop la fc onAddCategory al componente pero con el npombre de onNewCategory, entonces como onAddCategory recibe por parametro la categoria para luego con el set agregarla al estado(array de categorias), dentro del componente AddCategory dentro del submit onNewCategory pasa como argumento la nueva categoria escrita en el input(que se habia guardado ene el estado) */}

			

			
				{categories.map( ( category ) => {
					return (
						<GifGrid 
						key={ category}
						category={ category } />
					) //no se puede usar el indice como key xq react da error, entonces usamos la misma cat como key
				})}
			

		</>
	)
}


