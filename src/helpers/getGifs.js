/* eslint-disable no-unused-vars */


export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=WOwW0mP9d3g0rA2elocjM39ojM0iq7be&q=${ category }&limit=20`
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs =  data.map( img => ({//nuevo arreglo pero, igual al anterior de data, pero solo con las propiedades que ecesito
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    })
);

return gifs;

}