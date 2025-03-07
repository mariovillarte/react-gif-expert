import { useState } from "react"
import React from "react";



export const AddCategory = ( {onNewCategory} ) => {

    const [ inputValue, setInputValue] = useState('')

		const onInputChange = (event) => {//aca podemos desestructurar el target del event usar target.value en vez de escribir event.target.value, tmb podemos usar la "e" sola para referirnos al evento
			setInputValue( event.target.value );
};


const onChangeSubmit = (event) => {
	event.preventDefault();
	if(inputValue.trim().length <= 1 )return;

	onNewCategory( inputValue.trim());/* esta seria la fc onAddCategory que recibe por parametro la nueva categoria, seria asi:  OnAddCategory = (inputValue.trim()) => {
		setCategories( [...categories, newCategory] );
	}, pero se ejecuta con el nombre de la prop, onNewCategory. */
	
	setInputValue('');
	}


    return (

			<form onSubmit={ onChangeSubmit }>

        <input 
            type= "text"
         		placeholder="Buscar gifs"
						value= { inputValue }
						onChange={ onInputChange }//aca tmb puede ser una fc anonima, que se ejecute directamente aca, o asi, pasandole el evente al handler,{(event) => onInptChange(value)}. El onChange y todos los eventos, pasan el objeto event a la funcion que usemos como handler de ese evento, ese event esta cargado con informacion que puedo usar en mi funcion handler, tambien podemos hacer asi {inputValue}  sin pasarle el event, y la fc handle lo va aricibir igual, pero cdo declaremos la fc hay que especificar que recive el event como parametro. NUNCA lllamar la fc conparentecis en onChange xq si no el handle se ejecuta auomaicamente y no cdo el usuario interactua con el input.

        />

</form>
        
        
    )
}