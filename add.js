

let bytes;
const base64 = "AGFzbQEAAAABBwFgAn9/AX8DAgEABwcBA2FkZAAACgkBBwAgACABags=";
if (typeof Buffer === 'undefined') {
    bytes = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
} else {
    bytes = Buffer.from(base64, 'base64');
}

export const booted =
    WebAssembly.instantiate(bytes, {})
        .then(obj => {
            const wasm = obj.instance;
            add = wasm.exports.add;

        })
    ;
export let add;

