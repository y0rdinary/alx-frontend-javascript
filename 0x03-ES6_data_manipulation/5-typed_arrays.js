export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const datav = new DataView(buffer);

  if (position >= length) throw new Error('Position outside range');
  datav.setInt8(position, value);

  return datav;
}
