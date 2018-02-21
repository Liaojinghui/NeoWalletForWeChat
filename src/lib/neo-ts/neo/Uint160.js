import { UintVariable } from './UintVariable';
let _zero;
export class Uint160 extends UintVariable {
    static get Zero() { return _zero || (_zero = new Uint160()); }
    constructor(value) {
        if (value == null)
            value = new ArrayBuffer(20);
        if (value.byteLength != 20)
            throw new RangeError();
        super(new Uint32Array(value));
    }
    static parse(str) {
        if (str.length != 40)
            throw new RangeError();
        let x = str.hexToBytes();
        let y = new Uint8Array(x.length);
        for (let i = 0; i < y.length; i++)
            y[i] = x[x.length - i - 1];
        return new Uint160(y.buffer);
    }
}
//# sourceMappingURL=Uint160.js.map