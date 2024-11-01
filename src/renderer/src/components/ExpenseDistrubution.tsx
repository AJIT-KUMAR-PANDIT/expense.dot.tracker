export default function ExpenseDistrubution(): JSX.Element {
  return (
    <div className="w-[506px] h-[350px] relative">
      <div className="w-[506px] h-[350px] absolute left-[-1px] top-[-1px] rounded-2xl bg-white" />
      <svg
        width={286}
        height={286}
        viewBox="0 0 286 286"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[286px] h-[286px]"
        preserveAspectRatio="none"
      >
        <path
          d="M285.804 135.516C287.384 165.673 279.377 195.557 262.93 220.883L238.944 205.307C252.102 185.045 258.508 161.139 257.243 137.013L285.804 135.516Z"
          fill="#F73649"
        />
        <path
          d="M260.139 225.021C242.818 249.759 218.11 268.377 189.556 278.209L180.245 251.167C203.088 243.302 222.854 228.407 236.711 208.617L260.139 225.021Z"
          fill="#FFBFCA"
        />
        <path
          d="M30.3145 54.9604C50.8016 28.7381 79.7924 10.4816 112.293 3.33587L118.434 31.2687C92.4339 36.9852 69.2413 51.5904 52.8516 72.5683L30.3145 54.9604Z"
          fill="#D5EDFF"
        />
        <path
          d="M184.809 279.752C161.775 286.794 137.335 287.904 113.757 282.978L119.606 254.982C138.468 258.923 158.02 258.035 176.447 252.401L184.809 279.752Z"
          fill="#75E8C5"
        />
        <path
          d="M118.168 2.17249C137.656 -1.26364 157.644 -0.617955 176.869 4.06869C196.094 8.75533 214.137 17.3809 229.856 29.3998C245.576 41.4187 258.63 56.5692 268.193 73.8929C277.756 91.2167 283.619 110.337 285.412 130.043L256.929 132.634C255.495 116.869 250.804 101.573 243.154 87.7144C235.504 73.8553 225.061 61.7349 212.485 52.1198C199.909 42.5047 185.475 35.6043 170.095 31.8549C154.715 28.1056 138.724 27.5891 123.135 30.338L118.168 2.17249Z"
          fill="#008EE4"
        />
        <path
          d="M108.405 281.752C86.5086 276.293 66.215 265.729 49.1836 250.923C32.1521 236.118 18.8664 217.492 10.4127 196.569L36.9302 185.855C43.6931 202.594 54.3217 217.495 67.9468 229.339C81.572 241.183 97.8069 249.634 115.324 254.002L108.405 281.752Z"
          fill="#0CBF71"
        />
        <path
          d="M8.62396 191.909C3.49168 177.808 0.61081 162.987 0.0871127 147.991L28.6697 146.993C29.0886 158.99 31.3933 170.846 35.4992 182.127L8.62396 191.909Z"
          fill="#F0B035"
        />
        <path
          d="M0 143C2.64005e-06 112.801 9.56026 83.3779 27.3106 58.9467L50.4485 75.7574C36.2482 95.3023 28.6 118.841 28.6 143H0Z"
          fill="#FEE274"
        />
      </svg>
      <div className="w-[142.71px] h-[223px]">
        <div className="w-[142.71px] h-5">
          <p className="w-[120.12px] absolute left-[43.58px] top-[81px] text-base text-left text-black">
            Bills &amp; Utilities
          </p>
          <svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[20.5px] top-[83.5px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx={7} cy={7} r={7} fill="#008EE4" />
          </svg>
        </div>
        <div className="w-[66.17px] h-5">
          <p className="w-[43.58px] absolute left-[43.58px] top-[110px] text-base text-left text-black">
            Food
          </p>
          <svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[20.5px] top-[112.5px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx={7} cy={7} r={7} fill="#D5EDFF" />
          </svg>
        </div>
        <div className="w-[97px] h-5">
          <p className="w-[74.41px] absolute left-[43.58px] top-[139px] text-base text-left text-black">
            Personal
          </p>
          <svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[20.5px] top-[141.5px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx={7} cy={7} r={7} fill="#FEE274" />
          </svg>
        </div>
        <div className="w-[116.13px] h-5">
          <p className="w-[93.55px] absolute left-[43.58px] top-[168px] text-base text-left text-black">
            Healthcare
          </p>
          <svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[20.5px] top-[170.5px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx={7} cy={7} r={7} fill="#F0B035" />
          </svg>
        </div>
        <div className="w-[110.82px] h-5">
          <p className="w-[88.23px] absolute left-[43.58px] top-[197px] text-base text-left text-black">
            Education
          </p>
          <svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[20.5px] top-[199.5px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx={7} cy={7} r={7} fill="#0CBF71" />
          </svg>
        </div>
        <div className="w-[104.44px] h-5">
          <p className="w-[81.85px] absolute left-[43.58px] top-[226px] text-base text-left text-black">
            Transport
          </p>
          <svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[20.5px] top-[228.5px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx={7} cy={7} r={7} fill="#75E8C5" />
          </svg>
        </div>
        <div className="w-[120.38px] h-5">
          <p className="w-[97.8px] absolute left-[43.58px] top-[255px] text-base text-left text-black">
            Investment
          </p>
          <svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[20.5px] top-[257.5px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx={7} cy={7} r={7} fill="#FFBFCA" />
          </svg>
        </div>
        <div className="w-[72.55px] h-5">
          <p className="w-[49.96px] absolute left-[43.58px] top-[284px] text-base text-left text-black">
            Other
          </p>
          <svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[20.5px] top-[286.5px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx={7} cy={7} r={7} fill="#F73649" />
          </svg>
        </div>
      </div>
      <div className="w-[305.35px] h-14">
        <p className="w-[304.03px] absolute left-[22.32px] top-2.5 text-[26px] font-bold text-left text-black">
          Expense Distribution
        </p>
        <p className="absolute left-[21px] top-[46px] text-base italic text-left text-[#5d5d5d]">
          From 01 - 22 August
        </p>
      </div>
      <div className="w-[216px] h-[207px]">
        <p className="absolute left-[382px] top-28 text-lg text-left text-[#5d5d5d]">27%</p>
        <p className="absolute left-[415px] top-[204px] text-lg text-left text-[#5d5d5d]">10%</p>
        <p className="absolute left-[387px] top-[260px] text-lg text-left text-[#5d5d5d]">9%</p>
        <p className="absolute left-[333px] top-[282px] text-lg text-left text-[#5d5d5d]">8%</p>
        <p className="absolute left-[258px] top-[252px] text-lg text-left text-[#5d5d5d]">15%</p>
        <p className="absolute left-[233px] top-[199px] text-lg text-left text-[#5d5d5d]">5%</p>
        <p className="absolute left-[237px] top-[151px] text-lg text-left text-[#5d5d5d]">10%</p>
        <p className="absolute left-[281px] top-[97px] text-lg text-left text-[#5d5d5d]">12%</p>
      </div>
    </div>
  )
}
