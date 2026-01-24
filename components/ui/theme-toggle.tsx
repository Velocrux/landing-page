'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/contexts/theme-context'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  className?: string
  variant?: 'default' | 'icon' | 'minimal'
}

export function ThemeToggle({ className, variant = 'default' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()

  if (variant === 'icon') {
    return (
      <button
        onClick={toggleTheme}
        className={cn(
          'p-2 rounded-lg transition-all duration-200',
          'hover:bg-white/10 active:scale-95',
          'text-current',
          className
        )}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      >
        {theme === 'dark' ? (
          <Sun size={20} className="text-accent-orange" />
        ) : (
          <Moon size={20} className="text-primary-cyan" />
        )}
      </button>
    )
  }

  if (variant === 'minimal') {
    return (
      <button
        onClick={toggleTheme}
        className={cn(
          'px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200',
          'border border-current/20 hover:border-current/40',
          'bg-transparent hover:bg-current/5',
          'text-current',
          className
        )}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      >
        {theme === 'dark' ? (
          <span className="flex items-center gap-2">
            <Sun size={16} />
            Light
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Moon size={16} />
            Dark
          </span>
        )}
      </button>
    )
  }

  return (
    <Button
      onClick={toggleTheme}
      variant="secondary"
      size="md"
      className={cn('gap-2', className)}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? (
        <>
          <Sun size={18} />
          <span className="hidden sm:inline">Light Mode</span>
        </>
      ) : (
        <>
          <Moon size={18} />
          <span className="hidden sm:inline">Dark Mode</span>
        </>
      )}
    </Button>
  )
}
