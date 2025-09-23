export default function ResumeOptions() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white px-4 py-8 font-[Inter, Noto Sans, sans-serif]">
      <div className="w-full max-w-xl flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <button className="h-12 rounded-xl bg-[#f0f2f4] font-semibold text-[#111418] w-full">
            Step 1: Upload old resume (PDF/Word)
          </button>
          <label className="text-sm font-medium text-[#111418]">
            Step 2: Paste job description (copy from job listing and paste
            below)
          </label>
          <textarea
            placeholder="Paste the job description here..."
            className="w-full min-h-[120px] rounded-xl border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#111418]/40"
          />
          <p className="text-xs text-gray-500">
            Adding a job description helps us tailor your resume for better
            relevance.
          </p>
        </div>
      </div>
    </div>
  );
}
