type ValidateInputProps = {
    number:  string
    success: () => void,
    condition: (number: number) => boolean,
    error: (text: string[]) => void
}

export module Utils {
    
    /**
     * Checks if the input string is a numeric value.
     *
     * @param {string} number - The string to be checked for numeric value.
     * @return {boolean} True if the input is a numeric value, false otherwise.
    */
    export function isNumeric(number: string): boolean {
        return /^\d+$/.test(number);
    
    }

    /**
     * Validates the input number and calls the appropriate success or error callback.
     *
     * @param {ValidateInputProps} input - An object containing the number, success, and error callbacks.
     * @param {string} input.number - The number to be validated.
     * @param {() => void} input.success - The callback to be called if the number is valid.
     * @param {(text: string[]) => void} input.error - The callback to be called if the number is invalid.
     * @param {(number: number) => boolean} input.condition - The condition to check if the number is valid.
     * @return {void}
     */
   
    export function validateInput({number, condition, success, error}: ValidateInputProps): void {
        if(number === '') {
            error(['Invalid Number!', 'Please enter a number'])
            return
        }
        if(isNaN(+number) || condition(+number)) {
            error(['Invalid Number!', 'Value has to be a number between 1 and 99'])
            return
        }

        success()

    }
}

