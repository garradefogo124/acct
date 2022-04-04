import './styles.css'

function Btn(props){
    return(
        <input type="button" value={props.value} name={props.name} class="btn"/>
    );
}

export default Btn;