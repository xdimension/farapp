import { useState } from 'react'

type TabsMenuProps = {
  activeTab: string
}

export function TabsMenu({activeTab}: TabsMenuProps) {

  return (
    <div className="md:flex m-10">
      <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
        <li>
          <a href="/profile" className={`inline-flex items-center px-4 py-3  bg-blue-700 rounded-lg  w-full ${activeTab === 'profile' ? 'bg-blue-700 text-white' : 'bg-gray-50 text-black'}`}>
            Profile
          </a>
        </li>
        <li>
          <a href="/settings" className={`inline-flex items-center px-4 py-3  bg-blue-700 rounded-lg  w-full ${activeTab === 'settings' ? 'bg-blue-700 text-white' : 'bg-gray-50 text-black'}`}>
            Settings
          </a>
        </li>
      </ul>
    </div>
  )
}
