import { useState } from "react"
import { Utils } from "../utils/functions";
import { Alert } from "react-native";


/**
 * A custom React hook for handling the start game functionality.
 *
 * @return {Object} An object containing the entered number, a function to handle entered number, and a function to reset the entered number.
 * - `enteredNumber` (string): The currently entered number.
 * - `handleEnteredNumber` (function): A function to handle the entered number. It takes a string parameter `number` and updates the `enteredNumber` state if it is a numeric value or an empty string.
 * - `resetEnteredNumber` (function): A function to reset the `enteredNumber` state to an empty string.
 * - `confirmEnteredNumber` (function): A function to display an alert with the currently entered number.
 */

export const useStartGame = () => {
    const [enteredNumber, setEnteredNumber] = useState<string>('')


    const handleEnteredNumber = (number: string) => {
        
        if (Utils.isNumeric(number) || number === '') {
            setEnteredNumber(number);
        }
    }

    const resetEnteredNumber = () => {
        setEnteredNumber('');
    }

    const confirmEnteredNumber = () => {


        Utils.validateInput({
            number: enteredNumber,
            condition: (number) => (number <= 0) || (number > 99),
            success: () => {
                Alert.alert(`The number is ${enteredNumber}`)
            },
            error: ([title, errormsg]) => {
                Alert.alert(
                    title, errormsg, 
                    [{
                        text: 'Okay', 
                        style: 'destructive', 
                        onPress: resetEnteredNumber
                    }]
                )
            }
        })

    }

    return {
        enteredNumber,
        handleEnteredNumber,
        resetEnteredNumber,
        confirmEnteredNumber
    }
}

