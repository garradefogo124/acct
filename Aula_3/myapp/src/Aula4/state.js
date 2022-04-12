class Exemplo extends React.Component {
    constructor(props) {  
        super(props)
        
        this.state = {
            showButton: false,          // Boolean
            category: 'Smartphones',    // String
            price: 1499.99,             // Float
            product: {                  // Object
                name: 'Samsung S10'
            }
        }
    }

    // ...
}
