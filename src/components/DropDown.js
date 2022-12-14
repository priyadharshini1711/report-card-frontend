/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDown(props) {

  const { title, options, onMenuItemClick, active } = props


  return (
    <Menu as="div" className="relative inline-block text-center">
      <div>
        <Menu.Button className="inline-flex rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          {title}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-96 justify-items-center rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none h-80 overflow-y-auto">
          <div className="py-1" />
          {options && options.map((item) => {
            return (
              <Menu.Item>
                <button
                  className={classNames(
                    active === item.id ? 'bg-gray-100 text-gray-900' : ' text-gray-700',
                    'block px-4 py-2 text-sm w-full'
                  )}
                  onClick={() => onMenuItemClick(item.id)}
                >
                  {item.name}
                </button>
              </Menu.Item>
            )
          })

          }

        </Menu.Items>


      </Transition>
    </Menu>
  )
}
