import CardUpCommingExpenses from './CardUpCommingExpenses'

export default function UpCommingExpenses(): JSX.Element {
  return (
    <div className="w-[770px] h-[350px] relative">
      <p className="absolute left-0 top-0 text-[26px] font-bold text-left text-black">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Upcoming Expenses
      </p>
      <br />
      <br />
      <div className=" flex flex-wrap w-[770px] h-[300px] overflow-auto justify-center items-center">
        <CardUpCommingExpenses />
        <CardUpCommingExpenses />
        <CardUpCommingExpenses />
        <CardUpCommingExpenses />
        <CardUpCommingExpenses />
        <CardUpCommingExpenses />
        <CardUpCommingExpenses />
        <CardUpCommingExpenses />
      </div>
    </div>
  )
}
