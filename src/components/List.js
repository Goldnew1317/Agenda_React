import React, { Component } from 'react';

export default class List extends Component {
    constructor(){
        super();
        this.state = { items: []};
    }
    
    componentDidMount(){
        fetch('http://www.raydelto.org/agenda.php')
        .then(result=>result.json())
        .then(items=>this.setState({items}))
    }
    render(){
        return (
            <div>
                <table>
                <tr>
                    <th></th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Telefono</th>
                </tr>
                    {
                        this.state.items.map((item) =>{
                            return(
                                <tbody>
                                    <tr><td>•</td><td>{item.nombre}</td><td>{item.apellido}</td><td>{item.telefono}</td></tr>
                                </tbody>
                            )
                        })
                    }
                </table>
            </div>
        );
    }
}
