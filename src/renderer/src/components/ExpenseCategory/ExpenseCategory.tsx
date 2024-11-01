import CardExpenseCategory from './CardExpenseCategory'

export default function ExpenseCategory(): JSX.Element {
  return (
    <div className="w-[1080.78px] h-[546.25px] relative overflow-hidden">
      <p className="absolute left-px  text-[26px] font-bold text-left text-black">
        Category wise Expenses
      </p>
      <br />
      <br />
      <div className="w-[1080.78px] h-[500.25px] relative overflow-auto flex flex-wrap">
        <CardExpenseCategory />
        <CardExpenseCategory />
        <CardExpenseCategory />
        <CardExpenseCategory />
        <CardExpenseCategory />
        <CardExpenseCategory />
        <CardExpenseCategory />
        <CardExpenseCategory />
        <CardExpenseCategory />
        <CardExpenseCategory />
      </div>
    </div>
  )
}
