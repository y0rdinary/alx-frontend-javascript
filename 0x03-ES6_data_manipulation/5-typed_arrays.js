export default function createInt8TypedArray(length, positon, value) {
  const buffer = new ArrayBuffer(length);
  const dataview = new DataView(length);

  if(positon >= length) throw new Error('Position is outside range');
    dataview.setInt8(positon, value);

  return dataview;
}
