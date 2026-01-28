'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      setIsSuccess(true)
      reset()

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name & Email Row */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-semibold text-theme-primary">
            Name *
          </label>
          <Input
            id="name"
            placeholder="John Doe"
            {...register('name')}
            className={cn(
              'bg-white/5 border-white/10 text-white placeholder:text-white/40',
              'focus:bg-white/10 focus:border-electric-cyan/50 focus:ring-electric-cyan/20',
              'hover:border-white/20 transition-all duration-300',
              errors.name && 'border-red-500/50 focus:ring-red-500/20 focus:border-red-500'
            )}
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
              <span className="inline-block w-1 h-1 bg-red-400 rounded-full" />
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-semibold text-theme-primary">
            Email *
          </label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register('email')}
            className={cn(
              'bg-white/5 border-white/10 text-white placeholder:text-white/40',
              'focus:bg-white/10 focus:border-electric-cyan/50 focus:ring-electric-cyan/20',
              'hover:border-white/20 transition-all duration-300',
              errors.email && 'border-red-500/50 focus:ring-red-500/20 focus:border-red-500'
            )}
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
              <span className="inline-block w-1 h-1 bg-red-400 rounded-full" />
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Subject Field */}
      <div className="space-y-2">
        <label htmlFor="subject" className="block text-sm font-semibold text-theme-primary">
          Subject *
        </label>
        <Input
          id="subject"
          placeholder="What would you like to discuss?"
          {...register('subject')}
          className={cn(
            'bg-white/5 border-white/10 text-white placeholder:text-white/40',
            'focus:bg-white/10 focus:border-electric-cyan/50 focus:ring-electric-cyan/20',
            'hover:border-white/20 transition-all duration-300',
            errors.subject && 'border-red-500/50 focus:ring-red-500/20 focus:border-red-500'
          )}
        />
        {errors.subject && (
          <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
            <span className="inline-block w-1 h-1 bg-red-400 rounded-full" />
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-semibold text-theme-primary">
          Message *
        </label>
        <Textarea
          id="message"
          placeholder="Tell us more about your project, goals, timeline, and any specific requirements..."
          rows={6}
          {...register('message')}
          className={cn(
            'bg-white/5 border-white/10 text-white placeholder:text-white/40',
            'focus:bg-white/10 focus:border-electric-cyan/50 focus:ring-electric-cyan/20',
            'hover:border-white/20 transition-all duration-300',
            errors.message && 'border-red-500/50 focus:ring-red-500/20 focus:border-red-500'
          )}
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
            <span className="inline-block w-1 h-1 bg-red-400 rounded-full" />
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className={cn(
          'w-full relative overflow-hidden group',
          'bg-gradient-to-r from-electric-cyan to-electric-cyan/80',
          'hover:shadow-[0_0_30px_rgba(0,163,255,0.4)]',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          isSuccess && 'bg-gradient-to-r from-green-500 to-green-600'
        )}
        disabled={isSubmitting || isSuccess}
      >
        <span className="relative z-10 font-semibold">
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </span>
          ) : isSuccess ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Message Sent!
            </span>
          ) : (
            'Send Message'
          )}
        </span>
      </Button>

      {/* Success Message */}
      {isSuccess && (
        <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-electric-cyan/10 border border-green-500/30 backdrop-blur-sm">
          <p className="text-green-400 font-medium text-center text-sm">
            🎉 Thank you for reaching out! We&apos;ll get back to you within 24 hours.
          </p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="p-4 rounded-xl bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/30 backdrop-blur-sm">
          <p className="text-red-400 font-medium text-center text-sm">
            ⚠️ {error}. Please try again or email us directly at kauser@velocrux.com
          </p>
        </div>
      )}
    </form>
  )
}
