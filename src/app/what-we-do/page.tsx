import React from 'react';
import Case from '@/components/case/page';
import { CaseData } from '@/components/case/constant';
import Feedback from '@/components/feedback';
import { FeedBackData } from '@/components/case/constant';
import ButtonWithQuestion from '@/components/buttonWithQuestion';

export default function WhatWeDo() {
  return (
    <>
      <div
        className="
        max-w-[1507px] font-manrope
        mt-[153.73px] mb-[150px] flex w-fit flex-row items-center
        gap-[130px] max-2xl:gap-[100px] max-xl:gap-[70px] max-lg:gap-[40px]
        mx-auto max-2xl:mx-[20px]">
        <h3
          className="font-bold whitespace-nowrap self-start
          bg-gradient-main from-deep-sky-blue to-rebecca-purple bg-clip-text text-transparent
          text-xl max-2xl:text-lg max-xl:base-24">
          Чем мы занимаемся
        </h3>
        <p
          className="
            flex w-fit flex-row font-normal
            max-w-[900px]  text-dark-as-night
            gap-[120px] max-2xl:gap-[80px] max-xl:gap-[60px] max-lg:gap-[40px]
            text-lg max-2xl:text-base-24 max-xl:text-base">
          Достичь развития и высокого результата в бизнесе уже невозможно без информационных
          технологий, сэкономьте свое время, позвольте нам стать вашим проводником в цифровой мир.
        </p>
      </div>
      {CaseData.map((info) => {
        return (
          <Case
            key={info.id}
            id={info.id}
            title={info.title}
            description={info.description}
            question={info.question}
            imageSrc={info.imageSrc}
            imageAlt={info.title}
          />
        );
      })}
      <Feedback
        children={
          <p className="flex max-w-[803px] mx-auto mt-[16px] mb-[150px] text-base text-center leading-[22.5px]">
            {FeedBackData[0].description}
          </p>
        }
      />
      <ButtonWithQuestion />
    </>
  );
}