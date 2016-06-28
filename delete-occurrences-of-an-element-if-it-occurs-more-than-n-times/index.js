export function deleteNth(arr, x) {
    let cache = {};
    return arr.filter((cur) => (cache[cur] = ~~cache[cur] + 1) <= x);
}
