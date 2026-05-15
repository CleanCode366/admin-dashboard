import { useState } from 'react'
import { ChipGroup } from './Chip'
import BaseCard from './shared/primitives/BaseCard'
// import { ProgressBar } from './shared/primitives/Progressbar'

function LoginCard() {
  const handleGoogleLogin = () => {
    // Replace with your actual backend OAuth endpoint
    window.location.href = 'http://localhost:8080/oauth2/authorization/google'
  }
  const [selected, setSelected] = useState('all')

  return (
    <div className="bg-bg-primary fixed inset-0 flex items-center justify-center">
      <BaseCard
        variant="success"
        className="bg-bg-secondary border-border-primary w-full max-w-sm space-y-6 rounded-lg border p-6 shadow-md"
      >
        <ChipGroup
          selected={selected}
          onChange={(value) => {
            setSelected(value)

            console.log('Selected:', value)
          }}
          options={[
            {
              label: 'All',
              value: 'all',
            },

            {
              label: 'Escalated',
              value: 'escalated',
              count: 1,
            },

            {
              label: 'Spam',
              value: 'spam',
            },

            {
              label: 'Hate speech',
              value: 'hate-speech',
            },

            {
              label: 'Misinformation',
              value: 'misinformation',
            },
          ]}
        />
        {/* Heading */}
        <div className="space-y-1">
          <h2 className="text-text-primary text-center text-2xl font-semibold">Welcome</h2>

          <p className="text-text-secondary my-3 text-center text-sm">
            Sign in using your Google account
          </p>
        </div>

        {/* Google OAuth Button */}
        <button
          onClick={handleGoogleLogin}
          className="bg-bg-tertiary text-text-primary border-border-secondary hover:bg-bg-primary flex w-full cursor-pointer items-center justify-center gap-3 rounded-md border py-3 transition"
        >
          {/* Google Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-5 w-5">
            <path
              fill="#FFC107"
              d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
            />
            <path
              fill="#FF3D00"
              d="M6.3 14.7l6.6 4.8C14.7 15.1 18.9 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c5.2 0 10-2 13.5-5.3l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.5 16.2 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.3 5.5-6.2 7.1l6.2 5.2C39.1 36.7 44 31 44 24c0-1.3-.1-2.3-.4-3.5z"
            />
          </svg>
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-text-tertiary text-center text-xs">
          By continuing, you agree to our{' '}
          <a href="/terms" className="text-blue-500 hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/privacy" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>
        </p>
        {/* <ProgressBar value={0.5} variant="danger" scoreLabel="AI conf." /> */}
      </BaseCard>
    </div>
  )
}

export default LoginCard
