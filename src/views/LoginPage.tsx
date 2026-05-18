// import LoginCard from '@/LoginCard'
import MetricCard from '@/shared/composites/MetricCard'

// import { ChipGroup } from '@/Chip'

// import ReportCard from '@/shared/composites/ReportCard'

// import { reports } from '@/shared/composites/ReportCard/dummyData'

const LoginPage = () => {
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

  return (
    <div className="flex min-h-screen flex-col gap-6 sm:p-6">
      {' '}
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
      {/* <LoginCard /> */}
    </div>
  )
}

export default LoginPage
