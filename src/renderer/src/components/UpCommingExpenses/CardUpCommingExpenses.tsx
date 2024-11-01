export default function CardUpCommingExpenses(): JSX.Element {
  return (
    <div className="flex justify-start items-center w-[325px] h-[89px] relative gap-2.5 p-2.5 rounded-2xl bg-white">
      <img src="linkedin.png" className="flex-grow-0 flex-shrink-0 w-16 h-16 object-contain" />
      <div className="flex-grow h-[72px]">
        <p className="w-[100px] absolute left-[84px] top-[58.5px] text-lg text-left text-black">
          $30
        </p>
        <p className="w-[231px] h-[19px] absolute left-[84px] top-[33.5px] text-lg font-medium text-left text-black">
          LinkedIn Subscription
        </p>
        <p className="w-[231px] h-[19px] absolute left-[84px] top-[8.5px] text-base italic text-left text-[#5d5d5d]">
          28 August
        </p>
      </div>
    </div>
  )
}
