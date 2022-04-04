import './styles.css'

function OpBtn(props){
    return(
        <input type="button" value={props.value} name={props.name} class="btn operation"/>
    );
}

export default OpBtn;