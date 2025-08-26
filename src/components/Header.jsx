import React from 'react'

export const Header = () => {
  return (
     <header className="w-full bg-primary-foreground text-black shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Task Tracker</h1>

        {/* Future actions (dark mode, profile, etc.) */}
        <nav>
          <ul className="flex gap-4 text-sm">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
