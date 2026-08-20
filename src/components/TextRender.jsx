export default function TextRender() {
  const backgroundImage =
    "https://media.istockphoto.com/id/2156157086/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B9%82%E0%B8%AD%E0%B8%9A%E0%B8%81%E0%B8%AD%E0%B8%94%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%99%E0%B9%80%E0%B8%AD%E0%B8%87-%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%AD%E0%B8%9A%E0%B9%80%E0%B8%A7%E0%B8%81%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%AB%E0%B8%8D%E0%B8%B4%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%AB%E0%B8%B1%E0%B8%A7%E0%B9%83%E0%B8%88.jpg?s=612x612&w=0&k=20&c=7iWleZ-mRtwjXF3KpegEqqYHmILKFMtg7eJF7CO54Vs=";

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-white drop-shadow-lg sm:text-3xl md:text-4xl">
            ╰(*°▽°*)╯ กินดี ขยับกาย พักผ่อนพอ ╰(*°▽°*)╯
          </p>

          <p className="mt-5 text-base text-white drop-shadow-lg sm:text-lg md:text-xl">
            คือของขวัญที่ให้ตัวเองได้ทุกวัน
            <br />
            โดยไม่ต้องรอโอกาสพิเศษ
          </p>
        </div>
      </div>
    </div>
  );
}