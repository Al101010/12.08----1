export default class Validator {
    constructor(name) {
        this.validateUsername = () => {
            const pravilo1 = /[a-zA-Z0-9_-]+/i; // символы "a-zA-Z0-9_-" в имени и их > 0   [a-zA-Z0-9_-]+
            const pravilo2 = /^[^-_0-9]/ // символ в начале не может быть // ^[^-_0-9]
            const pravilo3 = /[^0-9_-]$/; // символ в конце не может быть // ^[^-_0-9]
            const pravilo4 = /[\d]{3}/; // три цифры подряд // ^[^-_0-9]

            if (pravilo1.test(name) !== true) {
                return false;
            }
            
            if(pravilo2.test(name) !== true) {
                return false;
            }

            if(pravilo3.test(name) !== true) {
                return false;
            }
            
            if(pravilo4.test(name) !== false) {
                return false;
            }
            
            console.log('Проверка закончена. Имя соответствует правилам');
            return true;
        }
    }
}