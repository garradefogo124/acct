import React from 'react'

class Welcome extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        console.log("O componente foi montado!")
        // USADO PARA REQUISIÇÕES HTTP - REQUEST
    }

    componentWillUnmount(){
        console.log("O componente foi desmontado!")
    }

    render() {
        return <h1>Hello, {this.props.name}</h1>
    }

    
}

export default Welcome
