export default function LogoCircleR() {
  return (
    <>
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
        rel="stylesheet"
      />

      <div className="w-[300px] h-[300px] flex items-center justify-center">
        <div className="w-[260px] h-[260px] rounded-full border-[6px] border-black flex items-center justify-center pr-4">
          <span
            className="text-[100px] text-black"
            style={{ fontFamily: "Kaushan Script, cursive" }}
          >
            R
          </span>
        </div>
      </div>
    </>
  );
}