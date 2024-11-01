// import MySideBar from '@renderer/components/MySideBar'
import BudgetVsExpense from '@renderer/components/BudgetVsExpense'
import ExpenseCategory from '@renderer/components/ExpenseCategory/ExpenseCategory'
import ExpenseDistrubution from '@renderer/components/ExpenseDistrubution'
import UpCommingExpenses from '@renderer/components/UpCommingExpenses/UpCommingExpenses'
import UserInfo from '@renderer/components/UserInfo'
export default function SideBar(): JSX.Element {
  return (
    <>
      <div>
        <div className="flex justify-center items-center h-[526px] flex-wrap">
          <div>
            {' '}
            <UserInfo />
          </div>
          <div>
            <BudgetVsExpense />
          </div>
        </div>
        <div className="flex justify-center items-center h-[526px] flex-wrap">
          <div>
            <ExpenseDistrubution />
          </div>
          <div>
            <UpCommingExpenses />
          </div>
        </div>
        <div className="flex justify-center items-center h-[526px] flex-wrap">
          <div>
            <ExpenseCategory />
          </div>
          <div>
            <UpCommingExpenses />
          </div>
        </div>
      </div>
    </>
  )
}
