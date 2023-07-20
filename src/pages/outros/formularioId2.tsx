import InputComId from "../../components/formulario/InputComId";
import Pagina from "../../components/template/Pagina";

export default function () {
    return (
        <Pagina titulo="Usando o hook useID em um componente" subtitulo="reusando um componente com id ">
            <InputComId label="Nome"/>
            <InputComId label="Sobrenome"/>
        </Pagina>
    )
}