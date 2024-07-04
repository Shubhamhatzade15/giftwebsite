import Image from 'next/image';

function ImageGrid() {
  return (
    <div className='cont'>
    <div className="image-grid-i">
      <Image src="/image 158.png" alt="Birthday" width={300} height={200} />
      <Image src="/image 160.png" alt="Flowers" width={300} height={200} />
      <Image src="/image 161.png" alt="Corporate" width={300} height={200} />
      <Image src="/image 159.png" alt="Weddings" width={300} height={200} />
      <Image src="/image 163.png" alt="Anniversary" width={300} height={200} />
    </div>
    </div>
  );
}

export default ImageGrid;
