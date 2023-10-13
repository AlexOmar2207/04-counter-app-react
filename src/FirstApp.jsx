import PropTypes  from "prop-types";

const newMessage = {
    message: 'Hola', 
    title: 'Alexis'
};
// Se recomienda que esten fuera del componente!!!
    const saludo = (name) => {
        return `Hola ${name}, esto es el primer paso para aprender React!!`
    }

export const FirstApp = ({title, subTitle}) => {

    // Las props son propiedades que vienen desde el componente padre al hijo...!
    // console.log(props);


    return (
        // Un nodo padre <> == a Fragment para renderizar mas de una etiqueta al mismo nivel
        <>
        <h1> { title } </h1>
        <h1> { subTitle } </h1>
            {/* <code> { JSON.stringify(newMessage) } </code> */}
            {/* <p>Soy un subtitulo</p> */}
        </>
    )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}


FirstApp.defaultProps = {
    title: 'No hay titulo', 
    subTitle: 'No hay subtitulo'
}