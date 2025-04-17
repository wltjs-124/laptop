import Image from "next/image";

export default function Home() {
  let name = "";

  return (
    <div className="flex min-h-screen">
      <div
        className="flex w-1/2 justify-center items-center"
        style={{ backgroundColor: "#E7FADB" }}
      >
        <Image
          src="/dashboard.png"
          alt="Dashboard"
          width={550}
          height={550}
          className="shadow-xl rounded-2xl"
        />
      </div>
      <div className="flex w-1/2 items-center justify-center">
        <div className="w-full max-w-md px-8 py-6">
          <h2 className="text-3xl font-bold text-white-800 mb-8 text-center">
            AI 가명처리 로그인
          </h2>

          <form>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm"
              />
            </div>

            <div className="mb-6">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm"
              />
            </div>

            <div className="mb-6 flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Keep me signed in
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full text-gray-800 font-semibold bg-[#E7FADB] hover:bg-[#7BB94D] transition"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
