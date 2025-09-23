import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          <main className="flex flex-1 flex-col pt-20">
            <div className="container">
              <div className="flex flex-col gap-12 lg:gap-16">
                <div className="@container">
                  <div className="relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat p-6 text-center shadow-lg">
                    <div
                      className={`flex max-w-3xl flex-col gap-4 ${styles.hero}`}
                    >
                      <h1 className="text-4xl font-black text-white sm:text-5xl md:text-6xl">
                        Craft a Resume That Gets You Hired
                      </h1>
                      <h2 className="text-base font-normal text-white/80 sm:text-lg">
                        Our intuitive platform helps you create a professional
                        resume that highlights your skills and experience,
                        making you stand out to potential employers.
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="mx-auto">
                  <div className="w-full max-w-xl flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                      <button
                        className="h-12 rounded-xl bg-[#f0f2f4] font-semibold text-[#111418] w-full cursor-pointer"
                        onClick={}
                      >
                        Step 1: Upload old resume (PDF/Word)
                      </button>
                      <label className="text-sm font-medium text-[#111418]">
                        Step 2: Paste job description (copy from job listing and
                        paste below)
                      </label>
                      <textarea
                        placeholder="Paste the job description here..."
                        className="w-full min-h-[120px] rounded-xl border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#111418]/40"
                      />
                      <p className="text-xs text-gray-500">
                        Adding a job description helps us tailor your resume for
                        better relevance.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
                    Step 3: Choose Template
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    {[
                      {
                        name: "Modern",
                        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0GIey4LtbSzXK3BwS_oi4fVOgSDlDFXznDZMgytd4C39iBnhTXODtrXLTqwK4cPr9Cskf7Ti5nFJKkLAnFwuteBCQgzhzOQzvd3XslKJxZT4cJ43b4cS3he0oP_bNphz74q5iXRV3h4wq_roUppPc5gNUYFlB5jQbwGqWv9rR0fo-FpBBIVPK8hE7b9Zbn2zjjxaOKoJ6q9UQEH0LuoEcAPKtGNPfQmCuFXRJ9K3NTvDZy0pen_I1kTeE7VcQtaiKCpO10LwQ3jI",
                      },
                      {
                        name: "Classic",
                        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkmJJPEiW4V4llfdsPyUaRpeW1byqD-iJ3JKSP_HCKDJsaAR3KC6L42kKFGmhS-5OWN64iML8bpnvPYAYSCgAd4Qu4Ef-FB1F9jfua0MGhIlIzf4GNKFFWPU01KEr9-2uVzEYX1TJWXfObGGtO8lgMru3w0d921zKtE4aV4IhXiW1Zu9w5ncFaU08oZy4PbGAa1GYK4W5qkjsyg8Q1hxo21SCnj80i1Hl7uwCgf0yW3d01R5oaH7OWv1NDvSlXlkXdsoN0Mi1WxYE",
                      },
                      {
                        name: "Creative",
                        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJNVOiMTzFAI4YU-vbzGn1E2h_j5HuY7SwPoGLiHvF4zNKxwqJhemvTEDZMD_BPSCXL9yBcV4B5ZR5OYRcbEtrTHReRbytoARXcnoRglHg4qampB0zL7mPDkQkRksEo3xEmJCOvMrQo7uSpCLHXSAmHBdxKflVrFybAj57N4cXmxxBLYUa7lPo4DdxKykueGkWx89IW3Y0mGU2gLqca23wVbvMTAb2OL4BYZY_lb3ganOWc16B4_tZwT--fEE556RjClgUTsvD1ko",
                      },
                      {
                        name: "Minimalist",
                        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlotObZz6UNDwvbqdEtYhvabYQPLRBbmtaIMPyiGGWNPlu3jzC01j49ZttIXYRMzIz9ypSvmFsj2ItVdG98X4LSLOQwQsUSugBdskLt4xzjxQ-Cme2K43TSBxGjejkEIyhhy9wd4-yTkHuWejEthkmKadIIpJHayfQz54SFUfzeTja8GrRRuxrnFc3gV9xGQpEzCUROAK3mlO7Yy00rI5XaJqfBvZ-9Q2t1z0uv59r87R6uYH323mti4bOKLssKjf0PCWI638gFG0",
                      },
                      {
                        name: "Professional",
                        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCs0ngHCj4-DefTLpjLFI8NqLutzKz_V__bvcdWIao70mzu1gDL9PzrWAo4rLDSpPM6RKBuoaZ-zBJ17Xwe5FNG45ica4ySiGkYMJtI15OTRBGSIgFLbWdyWFl73icuGmy1-wz3j7vi1WNPhSE-y8KjIJthHbvELH8A7qKs7w8EKJxph3_Z-dl20HW90w6_TGGMxbtOGs4coHPKT20twF_4kKNLThO3iA5t13eEkRSmY-5luxHwhJ7XUhowbhGwhFvdqmJnVFyzHtw",
                      },
                      {
                        name: "Technical",
                        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6Njw2h_ecgk_gvW-G56W4AqQw6zPaj0-d0Lh8gJxMJkcu16tJJcrHpZEyKfiXK8zgY7gCevet4gNyO-2LbdfH9PY_Y6ABjpE7UTgoRRMwBj9YQH3zxMAKsKAVan0ZwQGrXrnXuOHmP_UwQWckSxqMEzI4kr9bxMbxQiUkMsgQXL8DlizSRE8NbwNMpL-JsaoRPpIdwyki92u3h266OgyK5CCo8AkFzjJRpj_1VwFQe-HqfUEZ77HdkZxUc8oAEBKi_ZTEimjQyDE",
                      },
                    ].map((t, i) => (
                      <div key={i} className="group flex flex-col gap-3">
                        <div className="relative w-full overflow-hidden rounded-lg shadow-md transition-shadow duration-300 group-hover:shadow-xl">
                          <div
                            className="w-full aspect-[3/4] bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
                            style={{ backgroundImage: `url("${t.url}")` }}
                          ></div>
                        </div>
                        <p className="text-base font-medium text-gray-800 dark:text-gray-200">
                          {t.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
