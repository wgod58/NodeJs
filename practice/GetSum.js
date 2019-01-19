var item = {
    exec(a, b) {
        if (a > b)
            return addSum(a, b)
        return addSum(b, a)
    },

};

function addSum(big, small) {
    return ((big + small) * (big - small + 1)) / 2;
}
module.exports = item