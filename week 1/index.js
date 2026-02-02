const b1 = Buffer.from('A Hello')
console.log(b1)
console.log(b1.toString())
console.log(b1.length)

console.log(b1[0])
console.log(b1[0].toString(16))
console.log(b1[0].toString(8))

// b1[0] = 'B'
// b1[0] = 66
// b1[0] = 0x42
b1[0] = 'B'.charCodeAt(0)
console.log(b1.toString())

// const 🇨🇦 = "Canada"
const str = '🎁💐'
const b2 = Buffer.from(str)
console.log(b2)
console.log(b2.toString())
console.log(b2.length)
console.log(str.length)
// for (let i = 0; i < b2.length; i++) {
//   console.log(b2[i].toString(16))
// }

const b3 = Buffer.alloc(12).fill('A')
// const b3 = Buffer.allocUnsafe(10)

console.log(b3)
console.log(b3.toString())

b3[0] = 'G'.charCodeAt(0)
b3[1] = 'e'.charCodeAt(0)
b3[2] = 'o'.charCodeAt(0)
console.log(b3.toString())
b3.write('George Brown')
console.log(b3.toString())
// const b4 = new Buffer('Hello World')

console.log(b3.toJSON())

const b4 = Buffer.from([
     71, 101, 111, 114,
    103, 101,  32,  66,
    114, 111, 119, 110
  ])
console.log(b4.toString())

const a = Uint8Array.from([72, 101, 108, 108, 111])
const b5 = Buffer.from(a)
console.log(b5.toString())

const a1 = Buffer.from('x')
const a2 = Buffer.from('y')
const a3 = Buffer.from('z')

const b6 = Buffer.concat([a1, a2, a3])
console.log(b6.toString())

const x = Buffer.from('Hello')
const y = Buffer.from('World')

// console.log(x === y)
// console.log(x.equals(y))
console.log(x.compare(y))

y.forEach((byte,idx) => {
    console.log(idx, byte, String.fromCharCode(byte))
})
