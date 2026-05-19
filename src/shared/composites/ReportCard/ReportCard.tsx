import React from 'react'

import { Badge } from '@/shared/primitives/Badge'

import { Button } from '@/shared/primitives/Button'

import { ProgressBar } from '@/shared/primitives/Progressbar'

import { ListCard } from '@/shared/composites/ListCard'

import { reports, deriveAvailableActions } from './dummyData'
import { LockClosedIcon } from '@heroicons/react/24/solid'

export type ReportStatus = 'PENDING' | 'ESCALATED_TO_HUMAN' | 'RESOLVED' | 'DISMISSED'

export type ReportTargetType = 'POST' | 'COMMENT' | 'USER'

export type ModerationAction =
  | 'RUN_AI_SCREENING'
  | 'REMOVE_CONTENT'
  | 'BAN_AUTHOR'
  | 'WARN_AUTHOR'
  | 'DISMISS'

export interface AuditTrailEntry {
  id: string

  actorId: string

  action: string

  timestamp: string
}

export interface Report {
  id: string

  title: string

  description: string

  status: ReportStatus

  targetType: ReportTargetType

  reportReason: string

  aiConfidenceScore: number

  createdAt: string

  reporter: {
    id: string
    name: string
  }

  author: {
    id: string
    name: string
    priorReportCount: number
  }

  auditTrail: AuditTrailEntry[]
}

export interface ReportCardProps {
  report?: Report

  isExpanded: boolean

  onToggleExpand: () => void

  onAction: (reportId: string, action: ModerationAction) => void

  isClaimed?: boolean

  claimedBy?: string

  useDummyData?: boolean

  className?: string
}

function getStatusBadgeVariant(status: ReportStatus): 'danger' | 'warning' | 'success' | 'default' {
  switch (status) {
    case 'ESCALATED_TO_HUMAN':
      return 'danger'

    case 'PENDING':
      return 'warning'

    case 'RESOLVED':
      return 'success'

    default:
      return 'default'
  }
}

function formatStatus(status: ReportStatus) {
  switch (status) {
    case 'ESCALATED_TO_HUMAN':
      return 'Escalated'

    case 'PENDING':
      return 'Pending'

    case 'RESOLVED':
      return 'Resolved'

    case 'DISMISSED':
      return 'Dismissed'

    default:
      return status
  }
}

function formatActionLabel(action: ModerationAction) {
  switch (action) {
    case 'RUN_AI_SCREENING':
      return 'Run AI screening'

    case 'REMOVE_CONTENT':
      return 'Remove content'

    case 'BAN_AUTHOR':
      return 'Ban author'

    case 'WARN_AUTHOR':
      return 'Warn author'

    case 'DISMISS':
      return 'Dismiss'

    default:
      return action
  }
}

function getButtonVariant(
  action: ModerationAction
): 'primary' | 'danger' | 'warning' | 'info' | 'secondary' {
  switch (action) {
    case 'REMOVE_CONTENT':
      return 'danger'

    case 'BAN_AUTHOR':
      return 'danger'

    case 'WARN_AUTHOR':
      return 'warning'

    case 'DISMISS':
      return 'secondary'

    case 'RUN_AI_SCREENING':
      return 'info'

    default:
      return 'primary'
  }
}
function StatusPipeline() {
  const stages = ['Pending', 'AI screening', 'Escalated', 'Resolved']

  return (
    <div className="flex flex-wrap items-center gap-2">
      {stages.map((stage) => (
        <React.Fragment key={stage}>
          <Badge
            variant={
              stage === 'Escalated' ? 'danger' : stage === 'Resolved' ? 'success' : 'warning'
            }
            size="sm"
          >
            {stage}
          </Badge>

          {stage !== 'Resolved' && <span className="text-text-tertiary text-xs">›</span>}
        </React.Fragment>
      ))}
    </div>
  )
}

export function ReportCard({
  report,

  isExpanded,

  onToggleExpand,

  onAction,

  isClaimed = false,

  claimedBy,

  useDummyData = false,
}: ReportCardProps) {
  const resolvedReport = useDummyData ? reports[0] : report

  if (!resolvedReport) {
    return null
  }

  const availableActions = deriveAvailableActions(resolvedReport, isClaimed)

  return (
    <ListCard
      isExpanded={isExpanded}
      isClickable
      onToggle={onToggleExpand}
      header={
        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-text-secondary text-xs font-medium">{resolvedReport.id}</span>

                <Badge variant={getStatusBadgeVariant(resolvedReport.status)}>
                  {formatStatus(resolvedReport.status)}
                </Badge>

                <Badge variant="info">{resolvedReport.targetType}</Badge>
              </div>
              <div>
                {' '}
                <span className="text-text-primary text-sm font-medium">
                  {resolvedReport.reportReason}
                </span>
              </div>
              <div className="text-text-secondary text-xs">
                Reported by {resolvedReport.reporter.name} · AI score:{' '}
                {resolvedReport.aiConfidenceScore}
              </div>
            </div>

            <div className="w-40">
              <ProgressBar
                value={resolvedReport.aiConfidenceScore}
                size="sm"
                variant="auto"
                scoreLabel="AI conf."
              />
            </div>
          </div>
          <div
            className={`absolute flex w-full items-center justify-center ${isExpanded ? 'top-19' : 'top-23'} text-text-secondary text-xs`}
          >
            <span className="cursor-pointer">
              Click to view {isExpanded ? 'report summary' : 'detailed report'}
            </span>
          </div>
        </div>
      }
      footer={
        isClaimed ? (
          <div className="text-text-warning flex flex-1 items-center gap-2 text-sm">
            <LockClosedIcon className="h-4 w-4" /> Being reviewed by {claimedBy}
          </div>
        ) : (
          <>
            {availableActions.map((action) => (
              <Button
                key={action}
                variant={getButtonVariant(action)}
                size="sm"
                onClick={() => {
                  onAction(resolvedReport.id, action)
                }}
              >
                {formatActionLabel(action)}
              </Button>
            ))}
          </>
        )
      }
    >
      <div className="space-y-6">
        <StatusPipeline />

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <div>
            Reporter: <span className="text-text-primary">{resolvedReport.reporter.name}</span>
          </div>

          <div>
            Author: <span className="text-text-primary">{resolvedReport.author.name}</span>
          </div>

          <div>
            Prior reports:{' '}
            <span className="text-text-danger">{resolvedReport.author.priorReportCount}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-text-secondary text-xs tracking-wider uppercase">Content</div>

          <div className="bg-bg-tertiary text-text-primary rounded-lg p-4 text-sm">
            "{resolvedReport.description}"
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-text-secondary text-xs tracking-wider uppercase">Audit Trail</div>

          <div className="bg-bg-tertiary text-text-secondary space-y-2 rounded-lg p-4 text-xs">
            {resolvedReport.auditTrail.map((entry) => (
              <div key={entry.id}>
                {entry.timestamp} · {entry.action}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ListCard>
  )
}

export default ReportCard
