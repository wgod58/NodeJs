var item = {
    exec(a, b) {
        return (a + b).toString(2);
    },

};
module.exports = item //這一部很重要，只要，模組(程式)要給別的模組(程式)使用，必須加這個！！