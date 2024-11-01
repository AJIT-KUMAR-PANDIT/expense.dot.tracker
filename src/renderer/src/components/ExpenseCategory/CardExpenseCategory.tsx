export default function CardExpenseCategory(): JSX.Element {
  return (
    <div className="w-[261px] h-60 relative">
      <div className="w-[260px] h-60 absolute left-[0.24px] top-[-0.76px] rounded-2xl bg-white" />
      <p className="absolute left-[21px] top-[113px] text-[26px] text-left text-black">
        Bills &amp; Utilities
      </p>
      <p className="absolute left-[21px] top-[167px] text-left text-[#5d5d5d]">
        <span className="text-[22px] font-semibold italic text-left text-[#5d5d5d]">$3,600</span>
        <span className="text-lg italic text-left text-[#5d5d5d]"> </span>
        <span className="text-xl italic text-left text-[#5d5d5d]">of $3,200</span>
      </p>
      <div className="flex flex-col justify-start items-start w-[220px] h-[13px] absolute left-[21px] top-[196px] gap-2.5 pr-5 rounded-[9.89px] bg-[#d5edff]">
        <div className="self-stretch flex-grow rounded-[9.89px] bg-[#008ee4]" />
      </div>
      <div className="w-[88px] h-[88px]">
        <div className="w-[88px] h-[88px] absolute left-[20.62px] top-[12.62px] rounded-[44px] bg-[#ecf4f7]" />
        <img
          src="home.png"
          className="w-16 h-16 absolute left-[32.62px] top-[24.62px] object-contain"
        />
      </div>
    </div>
  )
}
