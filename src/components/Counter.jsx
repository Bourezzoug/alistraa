import React from 'react';
const  Counter = () => {
   return (
    <section className="relative overflow-hidden bg-secondary dark:bg-gray-800 rm px-20 py-10">
      <img src="images/shape-11.svg" alt="Shape" className="rotate-animation absolute left-[3%] bottom-[3%] w-[3.625rem]" />
      <img src="images/shape-07.svg" alt="Shape" className="absolute top-[6%] right-[2%] w-[5.25rem] jf" />
      <img src="images/shape-14.svg" alt="Shape" className="hidden absolute left-[35%] top-[1%]" />
      <img src="images/shape-15.svg" alt="Shape" className="absolute right-0 bottom-0" />

      <div className="mx-auto max-w-[86.875rem] relative z-10 px-4 md:px-8 br xl:px-[9.125rem]">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gg gap-8">
          <div className="animate_top w-[40%] md:w-auto text-center">
            <h2 className="font-bold text-[1.875rem] leading-[2.25rem] lg:text-[2.25rem] lg:leading-[2.5rem] xl:text-[50px] xl:leading-[62px] text-header-color  mb-[0.125rem] dark:text-white">+5</h2>
            <p className="font-[500] text-[1rem] leading-[1.5rem] lg:text-[19px] lg:leading-[35px] text-p-color">Experts</p>
          </div>
          <div className="animate_top w-[40%] md:w-auto text-center">
            <h2 className="font-bold text-[1.875rem] leading-[2.25rem] lg:text-[2.25rem] lg:leading-[2.5rem] xl:text-[50px] xl:leading-[62px] text-header-color  mb-[0.125rem] dark:text-white">+6</h2>
            <p className="font-[500] text-[1rem] leading-[1.5rem] lg:text-[19px] lg:leading-[35px] text-p-color">Projects</p>
          </div>
          <div className="animate_top w-[40%] md:w-auto text-center">
            <h2 className="font-bold text-[1.875rem] leading-[2.25rem] lg:text-[2.25rem] lg:leading-[2.5rem] xl:text-[50px] xl:leading-[62px] text-header-color  mb-[0.125rem] dark:text-white">+99%</h2>
            <p className="font-[500] text-[1rem] leading-[1.5rem] lg:text-[19px] lg:leading-[35px] text-p-color">Clients Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
   );
}
export default Counter;