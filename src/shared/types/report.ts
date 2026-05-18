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
