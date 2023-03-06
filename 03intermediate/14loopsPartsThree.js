// const names = ["Youtube", "Instagram", "facebook", "Amazon", "Netflix"]
// for (const n of names) {
// console.log(n);
// }

const symbols = {
    yt:"Youtube",
    ig:"Instagram",
    fb:"Facebook",
    lco:"learnCodeOnline.in",
};
for (const n in symbols) {
    console.log(`key is: ${n} and value is: ${symbols[n]}`);
}