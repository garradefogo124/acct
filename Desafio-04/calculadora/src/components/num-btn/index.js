import './styles.css'

function Btn({ value, add}){
    return(
        <input type="button" value={value} class="btn" onClick={() => add(value)}/>
    );
}

export default Btn;