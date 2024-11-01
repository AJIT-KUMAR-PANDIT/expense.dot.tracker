import React from 'react'

const BudgetVsExpense: React.FC = (): JSX.Element => {
  return (
    <div className="w-[476px] h-[350px] relative">
      <div className="w-[476px] h-[350px] absolute left-[-1px] top-[-1px] rounded-2xl bg-white" />
      <svg
        width={422}
        height={422}
        viewBox="0 0 422 422"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[422px] h-[422px]"
        preserveAspectRatio="none"
      >
        <path
          d="M411.45 211C417.277 211 422.028 206.274 421.736 200.454C420.53 176.348 415.195 152.601 405.939 130.254C395.335 104.654 379.793 81.3936 360.2 61.8005C340.606 42.2073 317.346 26.6652 291.746 16.0614C266.146 5.45767 238.709 -1.2112e-06 211 0C183.291 1.2112e-06 155.853 5.45768 130.254 16.0614C104.654 26.6652 81.3936 42.2073 61.8005 61.8005C42.2073 81.3936 26.6652 104.654 16.0614 130.254C6.80498 152.601 1.46998 176.348 0.263689 200.454C-0.0275165 206.274 4.7234 211 10.55 211C16.3766 211 21.0695 206.273 21.393 200.455C22.5794 179.122 27.3594 158.115 35.5553 138.328C45.0986 115.289 59.0866 94.3543 76.7204 76.7204C94.3543 59.0866 115.289 45.0987 138.328 35.5553C161.368 26.0119 186.062 21.1 211 21.1C235.938 21.1 260.632 26.0119 283.672 35.5553C306.711 45.0986 327.646 59.0866 345.28 76.7204C362.913 94.3543 376.901 115.289 386.445 138.328C394.641 158.115 399.421 179.122 400.607 200.455C400.931 206.273 405.623 211 411.45 211Z"
          fill="#D5EDFF"
        />
        <path
          d="M10.55 211C4.72339 211 -0.0275269 206.273 0.263672 200.454C2.05374 164.678 12.9279 129.884 31.9371 99.3869C52.8097 65.9006 82.6539 38.9382 118.08 21.5615C153.507 4.18473 193.096 -2.90992 232.353 1.08319C268.104 4.71981 302.275 17.4201 331.66 37.9042C336.44 41.2362 337.269 47.8863 333.703 52.4937C330.136 57.1011 323.525 57.9182 318.727 54.6129C292.476 36.5297 262.043 25.3121 230.217 22.0749C194.887 18.4811 159.256 24.8663 127.372 40.5053C95.4885 56.1444 68.6288 80.4106 49.8434 110.548C32.9218 137.696 23.1628 168.628 21.3929 200.455C21.0695 206.273 16.3766 211 10.55 211Z"
          fill="#008EE4"
        />
        <g filter="url(#filter0_d_33_400)">
          <circle cx={333} cy={54} r={18} fill="#008EE4" />
          <circle cx={333} cy={54} r={15} stroke="white" strokeWidth={6} />
        </g>
        <defs>
          <filter
            id="filter0_d_33_400"
            x={311}
            y={32}
            width={44}
            height={44}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation={2} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_33_400" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_33_400"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <p className="absolute left-[173px] top-[207px] text-center text-[#5d5d5d]">
        <span className="text-[38px] font-semibold italic text-center text-[#5d5d5d]">$8,630</span>
        <br />
        <span className="text-2xl italic text-center text-[#5d5d5d]">of $12,000</span>
      </p>
      <div className="w-[264px] h-14">
        <p className="absolute left-[19px] top-2.5 text-[26px] font-bold text-left text-black">
          Budget Vs Expense
        </p>
        <p className="absolute left-[19px] top-[46px] text-base italic text-left text-[#5d5d5d]">
          From 01 - 22 August
        </p>
      </div>
    </div>
  )
}

export default BudgetVsExpense
