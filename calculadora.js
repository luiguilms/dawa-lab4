// calculadora.js
module.exports = {
    calcular: (numero1, numero2, operacion) => {
        const num1 = parseFloat(numero1);
        const num2 = parseFloat(numero2);

        switch (operacion) {
            case 'suma':
                return {
                    formato1: `${num1} + ${num2} = ${num1 + num2}`,
                    formato2: `El resultado de la suma es ${num1 + num2}`,
                    formato3: `Suma: ${num1 + num2}`,
                };
            case 'resta':
                return {
                    formato1: `${num1} - ${num2} = ${num1 - num2}`,
                    formato2: `El resultado de la resta es ${num1 - num2}`,
                    formato3: `Resta: ${num1 - num2}`,
                };
            case 'multiplicacion':
                return {
                    formato1: `${num1} * ${num2} = ${num1 * num2}`,
                    formato2: `El resultado de la multiplicación es ${num1 * num2}`,
                    formato3: `Multiplicación: ${num1 * num2}`,
                };
            case 'division':
                if (num2 !== 0) {
                    return {
                        formato1: `${num1} / ${num2} = ${num1 / num2}`,
                        formato2: `El resultado de la división es ${num1 / num2}`,
                        formato3: `División: ${num1 / num2}`,
                    };
                } else {
                    return {
                        formato1: 'Error: División por cero',
                        formato2: 'Error: División por cero',
                        formato3: 'Error: División por cero',
                    };
                }
            default:
                return {
                    formato1: 'Operación no válida',
                    formato2: 'Operación no válida',
                    formato3: 'Operación no válida',
                };
        }
    },
};
