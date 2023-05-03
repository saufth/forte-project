// Components
import CallToAction from '../navigation/LinkToAction'
import Image from 'next/image'
import LinkEmail from '../navigation/LinkEmail'
import NextLink from 'next/link'
// Config
import { logoAlt } from '@/modules/data-display/config'
import { NAV_LIST } from '@/modules/navigation/config'
import { copyright } from '@/modules/app/config'

/**
 * The footer section of application
 * @returns Footer section component
 */
export default function Footer () {
  return (
    <footer className='max-w-8xl px-5 md:px-10 pt-8 pb-12 mx-auto flex flex-col-reverse md:flex-col gap-y-8 border-t border-stone-300'>
      <div className='w-full mx-auto flex flex-col md:flex-row-reverse justify-center md:justify-between items-center gap-y-8'>
        <div className='md:text-xl'>
          <LinkEmail />
        </div>
        <div className='md:hidden'>
          <CallToAction />
        </div>
        <div className='flex flex-col md:flex-row items-center gap-4 text-xs md:text-sm text-center md:text-left text-secondary'>
          <NextLink href='/'>
            <Image
              src='/images/logomark.svg'
              alt={logoAlt}
              width={36}
              height={33}
            />
          </NextLink>
          {copyright}
        </div>
      </div>
      <nav className='w-full flex flex-col md:flex-row justify-between gap-4 text-sm text-center text-stone-600'>
        {NAV_LIST.map((navItem, key) => (
          <NextLink
            className='last:hidden last:md:block'
            href={navItem.href}
            key={key}
          >
            {navItem.children}
          </NextLink>
        ))}
      </nav>
    </footer>
  )
}
