import { useState } from 'react'

import { ChipGroup } from '@/Chip'

import ReportCard from '@/shared/composites/ReportCard'

import { reports } from '@/shared/composites/ReportCard/dummyData'

const LoginPage = () => {
  const [selected, setSelected] = useState('all')

  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <div className="min-h-screen space-y-6">
      {/* Header */}

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="text-text-primary text-lg font-semibold">Active Reports</div>

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
      </div>

      {/* Report cards */}
      <div className="space-y-4">
        {reports.map((report) => (
          <ReportCard
            key={report.id}
            report={report}
            isExpanded={expandedId === report.id}
            onToggleExpand={() => {
              setExpandedId(expandedId === report.id ? null : report.id)
            }}
            onAction={(reportId, action) => {
              console.log('Action:', action, 'on', reportId)
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default LoginPage
