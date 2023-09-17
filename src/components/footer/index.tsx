'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '../../../assets/logo-footer.png';
import { NavLink } from '../nav-link';

function Footer() {
  const pathname = usePathname();
  return (
    <footer className="mt-auto flex flex-col pb-4 pt-16">
      <div className="mx-auto flex w-full justify-center gap-x-20 px-4 md:justify-between">
        <Link href="/" className="text-[1vw]">
          <Image
            src={logo}
            alt="логотип"
            width={136}
            height={68}
            className="duration-300 ease-in hover:opacity-50"
          />
        </Link>
        <div className="flex-column justify-end">
          <p
            className="text-[24px] font-medium 
            leading-[32px] hover:opacity-50">
            +7 (978) 93 444 96
          </p>
          <Link
            href="/briefing"
            className="flex justify-end bg-gradient-to-r from-[#0B96B4] 
            to-[#551DB0] bg-clip-text text-[16px] 
            font-medium leading-[21px] text-transparent hover:opacity-50">
            Заполнить бриф
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-10 flex w-full flex-col items-center justify-center gap-x-6 md:flex-row">
        <NavLink
          href={'/about'}
          styles={
            pathname === '/about'
              ? 'bg-gradient-main from-deep-sky-blue to-rebecca-purple bg-clip-text text-transparent'
              : ''
          }>
          Кто мы
        </NavLink>
        <NavLink
          href={'/what-we-do'}
          styles={
            pathname === '/what-we-do'
              ? 'bg-gradient-main from-deep-sky-blue to-rebecca-purple bg-clip-text text-transparent'
              : ''
          }>
          Чем занимаемся
        </NavLink>
        <NavLink
          href={'/blog'}
          styles={
            pathname === '/blog'
              ? 'bg-gradient-main from-deep-sky-blue to-rebecca-purple bg-clip-text text-transparent'
              : ''
          }>
          Блог
        </NavLink>
        <NavLink
          href={'/partners'}
          styles={
            pathname.includes('/partners')
              ? 'bg-gradient-main from-deep-sky-blue to-rebecca-purple bg-clip-text text-transparent'
              : ''
          }>
          Партнерам
        </NavLink>
        <NavLink
          href={'/contacts'}
          styles={
            pathname === '/contacts'
              ? 'bg-gradient-main from-deep-sky-blue to-rebecca-purple bg-clip-text text-transparent'
              : ''
          }>
          Контакты
        </NavLink>
        <NavLink
          href={'/team'}
          styles={
            pathname === '/team'
              ? 'bg-gradient-main from-deep-sky-blue to-rebecca-purple bg-clip-text text-transparent'
              : ''
          }>
          Команда
        </NavLink>
      </div>
      <div className="mt-[35px] flex w-full flex-row items-center justify-center gap-[45px]">
        <div className="w-full border-b-2 border-b-[#E5E5E580] duration-300 ease-in hover:border-black" />
        <div className="flex w-[182px] flex-col justify-center text-center text-[12px] font-normal text-[#B6B6B6] duration-300 ease-in hover:text-black">
          Softocean 2022 Privacy Policy
        </div>
        <div
          className="w-full border-b-2 border-b-[#E5E5E580] 
          duration-300 ease-in hover:border-black "
        />
      </div>
    </footer>
  );
}

export default Footer;
