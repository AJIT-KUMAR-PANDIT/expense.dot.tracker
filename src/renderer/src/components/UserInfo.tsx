import profilePic from '@renderer/assets/resources/img/Profile Picture.svg'
import Time from './Time'

export default function UserInfo(): JSX.Element {
  return (
    <div className="w-[758px] h-[402px]">
      <div className="w-[612px] h-[350px] absolute left-[205.5px] top-[86.5px] rounded-2xl bg-white" />
      <img
        src={profilePic}
        className="w-[380px] h-[402px] absolute left-[59.5px] top-[46.5px] object-contain"
      />
      <p className="absolute left-[454px] top-[106px] text-[26px] text-left text-black">
        Good Morning,
      </p>
      <p className="absolute left-[454px] top-[140px] text-4xl font-medium text-left text-black">
        Sophie Campbell
      </p>
      <p className="absolute left-[454px] top-[186px] text-lg italic text-left text-[#5d5d5d]">
        <Time />
      </p>
      <div className="w-[350px] h-[185px]">
        <p className="absolute left-[454px] top-[344px] text-base italic text-left text-black">
          Remaining Days:{' '}
        </p>
        <div className="w-[350px] h-[74px]">
          <div className="flex flex-col justify-start items-start w-[350px] h-[74px] absolute left-[454px] top-[261px] gap-2.5 rounded-xl bg-[#d5edff]">
            <div className="flex-grow w-[246px] rounded-xl bg-[url('rectangle-8.png')] bg-[length:102.4px_auto] bg-repeat" />
          </div>
          <div className="w-[113px] h-[58px]">
            <p className="absolute left-[468px] top-[269px] text-[28px] font-bold text-left text-black">
              71%
            </p>
            <p className="absolute left-[468px] top-[303px] text-xl text-left text-black">
              Completed
            </p>
          </div>
          <p className="absolute left-[709px] top-[276px] text-right text-black">
            <span className="text-sm text-right text-black">Remaining</span>
            <br />
            <span className="text-xl text-right text-black">09 Days </span>
          </p>
        </div>
        <div className="w-[126px] h-5">
          <p className="absolute left-[474px] top-[372px] text-base text-left text-black">
            05 Weekdays
          </p>
          <svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[453.5px] top-[374.5px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx={7} cy={7} r={7} fill="#008EE4" />
          </svg>
        </div>
        <div className="w-[218px] h-5">
          <p className="absolute left-[474px] top-[397px] text-base text-left text-black">
            04 Weekends &amp; Holidays
          </p>
          <svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[453.5px] top-[399.5px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx={7} cy={7} r={7} fill="#0CBF71" />
          </svg>
        </div>
        <div className="w-[141px] h-5">
          <div className="flex flex-col justify-center items-center w-[18px] h-[18px] absolute left-[577px] top-[233px] gap-1.5 px-[3px] py-[7.199999809265137px] rounded-[5px] border-[1.35px] border-[#5d5d5d]">
            <svg
              width={12}
              height={8}
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path
                d="M1.19998 1.29999L5.99998 6.69999L10.8 1.29999"
                stroke="#5D5D5D"
                strokeWidth="1.35"
              />
            </svg>
          </div>
          <p className="absolute left-[454px] top-[232px] text-base italic text-left text-black">
            Month: August
          </p>
        </div>
      </div>
    </div>
  )
}
