import smallLogo from "../public/logo/logo-no-background.png";

function Banner() {
  return (
    <div className="flex justify-between items-center bg-blue-300 border-y lg:border-x border-black py-10 lg:py-5">
      <div className="px-10 space-y-5">
        <h1 className="text-6xl max-w-xl font-serif">
          A simple blog website created using NextJS + Sanity
        </h1>
        <h2>Feel free to leave a comment.</h2>
      </div>

      <img
        className="hidden md:inline-flex h-32 lg:h-52 px-10"
        src={smallLogo.src}
        alt=""
      />
    </div>
  );
}

export default Banner;
