import styles from "../App.module.css"

const ButtonLists = ['AC', '7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '/', '0', '00', 'DEL', '%', '+/-', '.', '=']
const ButtonsContainer = ({onButtonClick}) =>{
    return (
        <div className={styles.buttonsContainer}>
            {ButtonLists.map((ButtonList) => (
                <button className={styles.button} onClick={() => onButtonClick(ButtonList)}>{ButtonList}</button>
            ))}
        </div>
    );
}
export default ButtonsContainer;