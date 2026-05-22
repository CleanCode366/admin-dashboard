import { useState } from 'react'

import { ChipGroup } from '@/Chip'

import ReportCard from '@/shared/composites/ReportCard'

import { reports } from '@/shared/composites/ReportCard/dummyData'
import MetricCard from '@/shared/composites/MetricCard'
import EmptyState from '@/shared/composites/EmptyState'

import { SearchWindowIcon } from '@/shared/illustrations/NoResutsFoundIcon'
const LoginPage = () => {
  const [selected, setSelected] = useState('all')

  const [expandedId, setExpandedId] = useState<string | null>(null)
  const metricCardData = [
    {
      idx: 1,
      label: 'Pending',
      value: 3,
      subLabel: 'awaiting action',
      valueColor: 'warning',
    },
    {
      idx: 2,
      label: 'Escalated',
      value: 1,
      subLabel: 'needs review',
      valueColor: 'danger',
    },
    {
      idx: 3,
      label: 'AI Auto-resolved',
      value: 8,
      subLabel: 'this week',
      valueColor: 'success',
    },
    {
      idx: 4,
      label: 'Escalation Rate',
      value: '34%',
      subLabel: 'of all reports',
      valueColor: 'default',
    },
  ] as const

  // To test the EmptyState icon interchange the commented filteredReports
  // const filteredReports = []
  const filteredReports = reports
  return (
    <div className="min-h-screen space-y-6">
      {/* Header */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {metricCardData.map((item) => {
          return (
            <MetricCard
              key={item.idx}
              label={item.label}
              value={item.value}
              subLabel={item.subLabel}
              valueColor={item.valueColor}
            />
          )
        })}
      </div>
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
        {filteredReports.length === 0 ? (
          <EmptyState
            icon={<SearchWindowIcon size={72} className="text-text-tertiary" />}
            title="No results found."
            description="
        Try adjusting your filters
        or search query.
      "
            // action={{
            //   label: 'Clear filters',

            //   onClick: () => {
            //     setSelected('all')
            //   },
            // }}
          />
        ) : (
          filteredReports.map((report) => (
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
              className="bg-bg-secondary cursor-pointer"
            />
          ))
        )}
      </div>
    </div>
  )
}

export default LoginPage
