import './Tecnologias.css'


const Tecnologias = ({objeto}) => {
    const tecnologia = objeto.map(elemento => {
        return (
            <div key = {elemento.id}>               
            <img className = 'logo' src={elemento.img} alt={elemento.nombre} />
            </div>
            )
    })
    return (          
        <div className = 'tecnologia'>{tecnologia}
        <p className = 'title'>BESTIAS CAZADAS</p>
        </div>        
      )
}

export default Tecnologias