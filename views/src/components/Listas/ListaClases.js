import React from 'react';
import ClaseItem from '../Items/ClaseItem';
import { FaSearch } from 'react-icons/fa';

function useBuscarClases(clases) {
    
    const [ query, setQuery ] = React.useState('');
    const [ clasesFiltradas, setClasesFiltradas ] =  React.useState(clases);
    
    React.useMemo(() => {
        const resultado = clases.filter(clase => {
            return `${clase.tema} ${clase.id} ${clase.salon} ${clase.observacion} ${clase.fecha} ${clase.horario}`
            .toLowerCase()
            .includes(query.toLowerCase());
        });

        setClasesFiltradas(resultado);

    }, [ clases, query ]);

    return { query, setQuery, clasesFiltradas }
}

function ListaClases (props) {

    const { query, setQuery, clasesFiltradas } = useBuscarClases(props.clases);

    if(clasesFiltradas.length === 0)
    {
        return(
            <React.Fragment>
                <div className="row">
                    <div className="input-field col s12">
                        <FaSearch className="prefix"/>
                        <input type="text" className="form-control" 
                            value={query}
                            onChange={(e) => {
                                setQuery(e.target.value);
                            }}
                        />
                        <label >Buscar por N° de clase, tema, grupo, salon, observacion, horario o fecha</label>
                    </div>
                </div>
                <div className="row">
                    <h3>Ups!, no se encontraron clases actualmente</h3>
                </div>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="input-field col s12">
                    <FaSearch className="prefix"/>
                    <input type="text" className="form-control" 
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                        }}
                    />
                    <label >Buscar por N° de clase, tema, grupo, salon, observacion, horario o fecha</label>
                </div>
            </div>
            <div className="row">
                {clasesFiltradas.map(clase => {
                    return (
                        <ClaseItem key={clase.id} clase={clase} borrar = {props.borrar} tipo_usuario={props.tipo_usuario}/>
                    );
                })}
            </div>
        </React.Fragment>
    );

}

export default ListaClases;