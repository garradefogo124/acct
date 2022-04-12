import './styles.css'

function OpBtn({ value, add}){
    return(
        <input type="button" value={value} class="btn operation" onClick={() => add(value)}/>
    );
}

export default OpBtn;