import type { ModerationAction, Report } from '@/shared/types/report'

export const reports: Report[] = [
  {
    id: 'RPT-0001',

    title: 'Potential hate speech',

    description: 'These people should not exist.',

    status: 'ESCALATED_TO_HUMAN',

    targetType: 'COMMENT',

    reportReason: 'Hate speech',

    aiConfidenceScore: 0.94,

    createdAt: '2026-05-18T09:12:01Z',

    reporter: {
      id: 'u101',
      name: 'Alice',
    },

    author: {
      id: 'u201',
      name: 'Mark',
      priorReportCount: 5,
    },

    auditTrail: [
      {
        id: 'a1',
        actorId: 'u101',
        action: 'Report submitted',
        timestamp: '2026-05-18T09:12:01Z',
      },
    ],
  },

  {
    id: 'RPT-0002',

    title: 'Spam promotion',

    description: 'Click this link for free crypto rewards!',

    status: 'PENDING',

    targetType: 'POST',

    reportReason: 'Spam',

    aiConfidenceScore: 0.71,

    createdAt: '2026-05-18T10:00:11Z',

    reporter: {
      id: 'u102',
      name: 'Brian',
    },

    author: {
      id: 'u202',
      name: 'Jake',
      priorReportCount: 1,
    },

    auditTrail: [],
  },

  {
    id: 'RPT-0003',

    title: 'Potential misinformation',

    description: 'This is fake news, scam alert!',

    status: 'ESCALATED_TO_HUMAN',

    targetType: 'COMMENT',

    reportReason: 'Misinformation',

    aiConfidenceScore: 0.65,

    createdAt: '2026-05-18T14:02:01Z',

    reporter: {
      id: 'u003',
      name: 'Carol',
    },

    author: {
      id: 'u002',
      name: 'Bob',
      priorReportCount: 2,
    },

    auditTrail: [
      {
        id: 'a3',
        actorId: 'u003',
        action: 'Report submitted',
        timestamp: '2026-05-18T14:02:01Z',
      },
    ],
  },

  {
    id: 'RPT-0004',

    title: 'Harassment report',

    description: 'User repeatedly sending abusive DMs.',

    status: 'ESCALATED_TO_HUMAN',

    targetType: 'USER',

    reportReason: 'Harassment',

    aiConfidenceScore: 0.88,

    createdAt: '2026-05-18T11:22:41Z',

    reporter: {
      id: 'u104',
      name: 'Diana',
    },

    author: {
      id: 'u204',
      name: 'Chris',
      priorReportCount: 8,
    },

    auditTrail: [],
  },

  {
    id: 'RPT-0005',

    title: 'Resolved impersonation case',

    description: 'Fake account pretending to be a public figure.',

    status: 'RESOLVED',

    targetType: 'USER',

    reportReason: 'Impersonation',

    aiConfidenceScore: 0.92,

    createdAt: '2026-05-17T18:00:00Z',

    reporter: {
      id: 'u105',
      name: 'Emily',
    },

    author: {
      id: 'u205',
      name: 'FakeElon',
      priorReportCount: 12,
    },

    auditTrail: [],
  },

  {
    id: 'RPT-0006',

    title: 'Graphic violence content',

    description: 'Disturbing violent imagery uploaded.',

    status: 'PENDING',

    targetType: 'POST',

    reportReason: 'Violence',

    aiConfidenceScore: 0.84,

    createdAt: '2026-05-18T12:45:19Z',

    reporter: {
      id: 'u106',
      name: 'Frank',
    },

    author: {
      id: 'u206',
      name: 'Ron',
      priorReportCount: 0,
    },

    auditTrail: [],
  },

  {
    id: 'RPT-0007',

    title: 'Dismissed spam report',

    description: 'Repeated emojis in comments.',

    status: 'DISMISSED',

    targetType: 'COMMENT',

    reportReason: 'Spam',

    aiConfidenceScore: 0.22,

    createdAt: '2026-05-17T08:14:55Z',

    reporter: {
      id: 'u107',
      name: 'Grace',
    },

    author: {
      id: 'u207',
      name: 'Tom',
      priorReportCount: 0,
    },

    auditTrail: [],
  },

  {
    id: 'RPT-0008',

    title: 'Suspicious phishing attempt',

    description: 'Please login with your bank details here.',

    status: 'ESCALATED_TO_HUMAN',

    targetType: 'POST',

    reportReason: 'Phishing',

    aiConfidenceScore: 0.97,

    createdAt: '2026-05-18T15:05:41Z',

    reporter: {
      id: 'u108',
      name: 'Henry',
    },

    author: {
      id: 'u208',
      name: 'ScamKing',
      priorReportCount: 15,
    },

    auditTrail: [],
  },

  {
    id: 'RPT-0009',

    title: 'Self-harm concern',

    description: 'User expressing dangerous thoughts.',

    status: 'PENDING',

    targetType: 'POST',

    reportReason: 'Self-harm',

    aiConfidenceScore: 0.79,

    createdAt: '2026-05-18T16:22:11Z',

    reporter: {
      id: 'u109',
      name: 'Irene',
    },

    author: {
      id: 'u209',
      name: 'Sam',
      priorReportCount: 0,
    },

    auditTrail: [],
  },

  {
    id: 'RPT-0010',

    title: 'Unscreeened report',

    description: 'Unknown suspicious activity.',

    status: 'PENDING',

    targetType: 'COMMENT',

    reportReason: 'Suspicious activity',

    aiConfidenceScore: 0,

    createdAt: '2026-05-18T17:10:33Z',

    reporter: {
      id: 'u110',
      name: 'Kevin',
    },

    author: {
      id: 'u210',
      name: 'UnknownUser',
      priorReportCount: 0,
    },

    auditTrail: [],
  },

  {
    id: 'RPT-0011',

    title: 'Resolved nudity report',

    description: 'Explicit content uploaded publicly.',

    status: 'RESOLVED',

    targetType: 'POST',

    reportReason: 'Adult content',

    aiConfidenceScore: 0.89,

    createdAt: '2026-05-16T10:00:00Z',

    reporter: {
      id: 'u111',
      name: 'Laura',
    },

    author: {
      id: 'u211',
      name: 'NSFWPoster',
      priorReportCount: 6,
    },

    auditTrail: [],
  },

  {
    id: 'RPT-0012',

    title: 'Threatening language',

    description: 'I know where you live.',

    status: 'ESCALATED_TO_HUMAN',

    targetType: 'COMMENT',

    reportReason: 'Threats',

    aiConfidenceScore: 0.91,

    createdAt: '2026-05-18T19:20:14Z',

    reporter: {
      id: 'u112',
      name: 'Nathan',
    },

    author: {
      id: 'u212',
      name: 'ThreatGuy',
      priorReportCount: 11,
    },

    auditTrail: [],
  },

  {
    id: 'RPT-0013',

    title: 'False medical advice',

    description: 'Drink bleach to cure illness.',

    status: 'PENDING',

    targetType: 'POST',

    reportReason: 'Medical misinformation',

    aiConfidenceScore: 0.83,

    createdAt: '2026-05-18T20:11:07Z',

    reporter: {
      id: 'u113',
      name: 'Olivia',
    },

    author: {
      id: 'u213',
      name: 'FakeDoctor',
      priorReportCount: 4,
    },

    auditTrail: [],
  },
]

const ACTION_ORDER: ModerationAction[] = [
  'REMOVE_CONTENT',
  'BAN_AUTHOR',
  'WARN_AUTHOR',
  'DISMISS',
  'RUN_AI_SCREENING',
]

export function deriveAvailableActions(report: Report, isClaimed?: boolean): ModerationAction[] {
  if (isClaimed || report.status === 'RESOLVED' || report.status === 'DISMISSED') {
    return []
  }

  if (report.status === 'PENDING' && report.aiConfidenceScore === 0) {
    return ['RUN_AI_SCREENING']
  }

  const actions: ModerationAction[] = []

  if (report.status === 'PENDING' || report.status === 'ESCALATED_TO_HUMAN') {
    actions.push('WARN_AUTHOR', 'DISMISS')
  }

  if (
    (report.status === 'PENDING' || report.status === 'ESCALATED_TO_HUMAN') &&
    report.targetType !== 'USER'
  ) {
    actions.push('REMOVE_CONTENT')
  }

  if (report.status === 'ESCALATED_TO_HUMAN') {
    actions.push('BAN_AUTHOR')
  }

  return actions.sort((a, b) => ACTION_ORDER.indexOf(a) - ACTION_ORDER.indexOf(b))
}
