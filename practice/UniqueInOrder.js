var item = {
    exec(iterable) {
        let ans = [];
        var last;
        for (const item of iterable) {
            if (last !== item) {
                last = item;
                ans.push(item);
            }
        }
        return ans;
    },

};
//var  = function setArray(object, arr) {
function setArray(object, arr) {
    if (Array.isArray(object)) {
        arr = object
        return arr;
    }
    arr = object.split('');
    return arr;
};
module.exports = item //這一部很重要，只要，模組(程式)要給別的模組(程式)使用，必須加這個！！