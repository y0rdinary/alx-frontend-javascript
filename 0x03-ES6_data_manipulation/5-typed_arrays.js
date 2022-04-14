export default function createInt8TypedArray(length, positon, value) {
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);

  if (positon >= length) throw new Error('Position is outside range');
    dataView.setInt8(positon, value);

  return dataView;
}
