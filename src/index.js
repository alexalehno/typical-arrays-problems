exports.min = function min(a) {
    if (!a || a.length === 0) return 0;
    return Math.min(...a);
};

exports.max = function max(a) {
    if (!a || a.length === 0) return 0;
    return Math.max(...a);
};

exports.avg = function avg(a) {
    if (!a || a.length === 0) return 0;
    return a.reduce((pre, cur) => pre + cur, 0) / a.length;
};
