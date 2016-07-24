export const roundToSignificantFigures = (num, n) => {
    if(num == 0) {
        return 0;
    }

    const d = Math.ceil(Math.log10(num < 0 ? -num: num));
    const power = n - Math.floor(d);

    const magnitude = Math.pow(10, power);
    const shifted = Math.round(num*magnitude);
    return shifted/magnitude;
}