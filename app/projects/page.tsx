import Circle from '@/components/elements/Circle'
import FooterPage from '@/components/elements/FooterPage'
import LogoSmall from '@/components/elements/LogoSmall'
import { projects } from '@/constans/data'
import React from 'react'

const ProjectsPage = () => {
  return (
    <section id='projects'>
      <div className='flex flex-col border'>
        <div className='grid grid-rows-2 grid-flow-col'>
          <div className='row-span-2 '>
            <LogoSmall />
          </div>
        </div>

        <div className='italic -translate-y-12 md:-translate-y-28 2xl:-translate-y-36'>
          <div className='mb-4'>
            <Circle
              circleClassName='col-start-2 2xl:col-start-3'
              pading='m-5 md:my-9 lg:my-14 lg:ml-3'
              text='Projects'
            />
          </div>
          <div className='container'>
            <p className='text-justify md:text-xl text-sm md:font-bold font-semibold mb-4'>
              Some of the Projects We Work on:
            </p>

            <div className='rounded-lg border border-gray-200 dark:border-gray-700 shadow-md sm:rounded-lg'>
              <div className='overflow-x-auto rounded-t-lg'>
                <table className='w-full divide-y-2 divide-gray-200 text-center text-sm md:text-xl dark:divide-gray-700 dark:bg-gray-900'>
                  <thead className='capitalize'>
                    <tr>
                      <th className='whitespace-nowrap p-4 font-bold'>
                        No.
                      </th>
                      <th className='whitespace-nowrap p-4 font-bold'>
                        customer
                      </th>
                      <th className='whitespace-nowrap p-4 font-bold'>
                        Year
                      </th>
                      <th className='whitespace-nowrap p-4 font-bold'>
                        Project
                      </th>
                      <th className='whitespace-nowrap p-4 font-bold'>
                        Project Value
                      </th>
                    </tr>
                  </thead>

                  <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                    {/* <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                      <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
                        1
                      </td>
                      <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                        Waskita - Cipali Toll Road
                      </td>
                      <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                        2014
                      </td>
                      <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                        Limestone & Basecourse Procurement
                      </td>
                      <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                        1.826.000.000
                      </td>
                    </tr>
                    <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                      <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
                        2
                      </td>
                      <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                        Waskita - Cipali Toll Road
                      </td>
                      <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                        2014
                      </td>
                      <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                        Limestone & Basecourse Procurement
                      </td>
                      <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                        1.826.000.000
                      </td>
                    </tr> */}

                    {projects.map((project, index) => (
                      <tr
                        key={index}
                        className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                        <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
                          {index + 1}
                        </td>
                        <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                          {project.customer}
                        </td>
                        <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                          {project.year}
                        </td>
                        <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                          {project.project}
                        </td>
                        <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                          {project.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className='rounded-b-lg border-t border-gray-200 px-4 py-2 dark:border-gray-700'>
                <ol className='flex justify-end gap-1 text-xs font-medium'>
                  <li>
                    <a
                      href='#'
                      className='inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 dark:border-gray-800 dark:bg-gray-900 dark:text-white'>
                      <span className='sr-only'>
                        Prev Page
                      </span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-3 w-3'
                        viewBox='0 0 20 20'
                        fill='currentColor'>
                        <path
                          fillRule='evenodd'
                          d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-white'>
                      1
                    </a>
                  </li>

                  <li className='block size-8 rounded border-blue-600 bg-oren text-center leading-8 dark:text-white'>
                    2
                  </li>

                  <li>
                    <a
                      href='#'
                      className='block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-white'>
                      3
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 dark:border-gray-800 dark:bg-gray-900 dark:text-white'>
                      <span className='sr-only'>
                        Next Page
                      </span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-3 w-3'
                        viewBox='0 0 20 20'
                        fill='currentColor'>
                        <path
                          fillRule='evenodd'
                          d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <FooterPage />
      </div>
    </section>
  )
}

export default ProjectsPage
