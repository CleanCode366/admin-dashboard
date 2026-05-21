# Orval API Code Generation

## Overview

This project uses [Orval](https://orval.dev) to auto-generate TypeScript types, Axios client functions, and TanStack Query hooks directly from the backend OpenAPI spec.

**The rule:** `src/api/` is owned entirely by Orval. Never edit files inside it manually — they are regenerated and overwritten every time `pnpm generate` runs.

---

## How It Fits Together

```
Backend Spring API
      ↓
OpenAPI spec  (/v3/api-docs)
      ↓
Orval reads spec → generates src/api/
      ↓
Generated hooks use TanStack Query internally
      ↓
Feature hooks (src/features/*/hooks/) wrap generated hooks
      ↓
Views consume feature hooks
```

| Tool                          | Role                                               |
| ----------------------------- | -------------------------------------------------- |
| **Orval**                     | Code generator — reads spec, writes TypeScript     |
| **TanStack Query**            | Runtime engine — caching, loading state, refetch   |
| **Axios (coreBackendClient)** | HTTP transport — auth headers, interceptors, retry |

---

## Folder Structure

```
src/
├── api/                              ← ORVAL OWNS THIS — never edit manually
│   ├── models/                       ← generated TypeScript interfaces + enums
│   │   ├── moderationReport.ts
│   │   ├── moderationReportStatus.ts
│   │   ├── createReportRequest.ts
│   │   ├── userProfile.ts
│   │   └── index.ts                  ← barrel export for all models
│   └── endpoints/                    ← generated hooks split by OpenAPI tag
│       ├── authentication/
│       │   └── authentication.ts
│       ├── reports/
│       │   └── reports.ts            ← useGetReports, useModerateReport
│       ├── posts/
│       │   └── posts.ts
│       └── users/
│           └── users.ts              ← useGetProfile, useUpdateProfile
│
└── features/
    └── moderation/
        └── hooks/                    ← YOU OWN THIS
            ├── useReports.ts         ← thin wrapper over useGetReports
            └── useModerateAction.ts  ← thin wrapper over useModerateReport
```

---

## Setup

### Prerequisites

- Backend running at `http://localhost:8080`
- Spec available at `http://localhost:8080/v3/api-docs`

### Install

```bash
pnpm add -D orval
pnpm add @tanstack/react-query
```

### Generate

```bash
pnpm generate
```

This command hits the backend spec URL, reads all endpoints, and regenerates everything inside `src/api/`.

---

## Configuration

```ts
// orval.config.ts — project root
import { defineConfig } from 'orval'

export default defineConfig({
  reportSystem: {
    input: {
      // Live backend URL. Falls back to static file if backend is not running.
      target: process.env.API_DOCS_URL ?? 'http://localhost:8080/v3/api-docs',
    },
    output: {
      target: 'src/api/endpoints',
      schemas: 'src/api/models',
      client: 'react-query',
      mode: 'tags-split', // one file per OpenAPI tag
      override: {
        mutator: {
          // All generated hooks use this Axios instance — inherits auth
          // interceptors, retry logic, and error handling automatically
          path: 'src/utils/http/clients/coreBackend.client.ts',
          name: 'coreBackendClient',
        },
        query: {
          useQuery: true,
          useMutation: true,
        },
        // Per-operation overrides — corrects query vs mutation assignment
        // that Orval gets wrong due to OpenAPI 3.1.0 compatibility gaps
        operations: {
          // GET endpoints forced to useQuery (cached, refetchable)
          getReports: { query: { useQuery: true, useMutation: false } },
          getProfile: { query: { useQuery: true, useMutation: false } },
          getDashboardCounts: { query: { useQuery: true, useMutation: false } },
          getImage: { query: { useQuery: true, useMutation: false } },
          getUserImage: { query: { useQuery: true, useMutation: false } },
          // POST write operations forced to useMutation (fire-and-forget)
          moderateReport: { query: { useQuery: false, useMutation: true } },
          createReport: { query: { useQuery: false, useMutation: true } },
          logoutAuth: { query: { useQuery: false, useMutation: true } },
          updateProfile: { query: { useQuery: false, useMutation: true } },
          uploadProfileImage: { query: { useQuery: false, useMutation: true } },
          uploadCoverImage: { query: { useQuery: false, useMutation: true } },
          updatePost: { query: { useQuery: false, useMutation: true } },
        },
      },
    },
  },
})
```

### Environment Variables

| Variable               | Description                             | Default                             |
| ---------------------- | --------------------------------------- | ----------------------------------- |
| `API_DOCS_URL`         | OpenAPI spec URL used during generation | `http://localhost:8080/v3/api-docs` |
| `VITE_BACKEND_API_URL` | Base URL used at runtime for API calls  | Set in `.env.local`                 |

```bash
# .env.local
VITE_BACKEND_API_URL=http://localhost:8080
API_DOCS_URL=http://localhost:8080/v3/api-docs
```

---

## The Mutator — coreBackendClient

Orval routes every generated API call through `coreBackendClient`. This means all generated hooks automatically inherit:

- Bearer token attachment (via `attachAuthToken` interceptor)
- Automatic token refresh on 401 (via `refreshTokenInterceptor`)
- Retry on network failure (via `retryInterceptor`)
- Standardised error handling (via `errorInterceptor`)

```ts
// src/utils/http/clients/coreBackend.client.ts
import type { AxiosRequestConfig } from 'axios'

const axiosInstance = createAxiosClient(backendApiUrl, [
  attachAuthToken,
  refreshTokenInterceptor,
  retryInterceptor,
  errorInterceptor,
])

// Orval calls this function for every generated request
// It must be a callable function — not the Axios instance directly
export const coreBackendClient = <T>(config: AxiosRequestConfig): Promise<T> => {
  return axiosInstance(config).then((response) => response.data)
}
```

> **Why a function and not the instance directly?**
> Orval calls `coreBackendClient(config)` for each request. An Axios instance is callable, but Orval's TypeScript type for a mutator expects `(config) => Promise<T>` — a plain function signature. The wrapper satisfies that contract.

---

## Generated Models

All backend DTOs are generated as TypeScript interfaces in `src/api/models/`.

### Key types for the moderation dashboard

```ts
// Moderation report — mirrors Java ModerationReport entity
import type { ModerationReport } from '@/api/models'

// Report status enum — mirrors Java ReportStatus
import type { ModerationReportStatus } from '@/api/models'
// Values: 'PENDING' | 'AI_SCREENING' | 'ESCALATED' | 'RESOLVED'

// Moderation action enum — mirrors Java ModerationAction
import type { ModerationReportActionTaken } from '@/api/models'
// Values: 'NONE' | 'WARN' | 'REMOVE_CONTENT' | 'BAN_REPORTER' | 'BAN_AUTHOR' | 'ESCALATE' | 'DISMISS'

// Filing a report
import type { CreateReportRequest } from '@/api/models'

// Moderator action request
import type { ModerateReportRequest } from '@/api/models'

// User profile
import type { UserProfile } from '@/api/models'
```

### Important note on `ApiSuccessResponse`

Your backend wraps most responses in an envelope:

```json
{
  "message": "Reports fetched",
  "http-status": "OK",
  "data": [ ...actual payload... ]
}
```

The generated `data` field is typed as `unknown` because the spec uses a generic `ApiSuccessResponse`. When consuming these endpoints, unwrap with:

```ts
const reports = (response.data as ModerationReport[]) ?? []
```

Endpoints that have specific response types (like `GET /reports → ModerationReport[]`) are correctly typed and don't need casting.

---

## Generated Hooks

### Query hooks (GET — cached, refetchable)

```ts
import { useGetReports } from '@/api/endpoints/reports/reports'
import { useGetProfile } from '@/api/endpoints/users/users'
import { useGetDashboardCounts } from '@/api/endpoints/posts/posts'

// Usage
const { data, isLoading, error, refetch } = useGetReports({ status: 'ESCALATED' })
```

### Mutation hooks (POST/write — fire-and-forget)

```ts
import { useModerateReport } from '@/api/endpoints/reports/reports'
import { useCreateReport } from '@/api/endpoints/reports/reports'
import { useLogoutAuth } from '@/api/endpoints/authentication/authentication'

// Usage
const mutation = useModerateReport()
mutation.mutateAsync({ id: 'RPT-001', moderateReportRequest: { action: 'BAN_AUTHOR' } })
```

---

## Feature Hook Pattern

Never use generated hooks directly in views. Always wrap them in a feature hook that adds app-specific logic.

### useReports

```ts
// src/features/moderation/hooks/useReports.ts
import { useGetReports } from '@/api/endpoints/reports/reports'
import type { ModerationReportStatus } from '@/api/models'

export function useReports(status?: ModerationReportStatus) {
  const { data, isLoading, error } = useGetReports(
    { status },
    { query: { staleTime: 10_000 } } // cache for 10s, refetch in background
  )

  return {
    reports: data?.data ?? [], // unwrap ApiSuccessResponse envelope
    isLoading,
    error: error?.message ?? null,
  }
}
```

### useModerateAction

```ts
// src/features/moderation/hooks/useModerateAction.ts
import { useModerateReport } from '@/api/endpoints/reports/reports'
import { useQueryClient } from '@tanstack/react-query'
import { getGetReportsQueryKey } from '@/api/endpoints/reports/reports'

export function useModerateAction() {
  const queryClient = useQueryClient()
  const mutation = useModerateReport()

  const moderate = async (id: string, action: string, note?: string) => {
    await mutation.mutateAsync({
      id,
      moderateReportRequest: { action, note },
    })
    // Invalidate cache so queue refetches automatically after action
    // Same concept as @CacheEvict in Spring
    queryClient.invalidateQueries({
      queryKey: getGetReportsQueryKey(),
    })
  }

  return {
    moderate,
    isProcessing: mutation.isPending,
    error: mutation.error?.message ?? null,
  }
}
```

### In a view

```ts
// features/moderation/views/ModerationQueue.tsx
import { useReports }       from '../hooks/useReports'
import { useModerateAction } from '../hooks/useModerateAction'

export default function ModerationQueue() {
  const { reports, isLoading } = useReports('PENDING')
  const { moderate, isProcessing } = useModerateAction()

  return (
    // ...
  )
}
```

---

## Query Key Management

Orval generates a query key function for every `useQuery` hook. Use these for cache invalidation — never hardcode strings.

```ts
import { getGetReportsQueryKey, getGetProfileQueryKey } from '@/api/endpoints/reports/reports'

// Invalidate after moderation action
queryClient.invalidateQueries({ queryKey: getGetReportsQueryKey() })

// Invalidate with filter params
queryClient.invalidateQueries({ queryKey: getGetReportsQueryKey({ status: 'PENDING' }) })
```

---

## When to Regenerate

Run `pnpm generate` whenever:

- Backend adds a new endpoint
- Backend changes a request or response shape
- Backend renames a field or enum value
- You pull new backend changes from Git

After regenerating, TypeScript will immediately highlight every place in the codebase that needs updating — same guarantee as a Java interface change propagating through all implementations.

---

## Adding a New Backend Endpoint — Workflow

```
1. Backend engineer adds endpoint + updates OpenAPI spec
2. Frontend engineer runs: pnpm generate
3. New hook appears in src/api/endpoints/<tag>/<tag>.ts
4. New types appear in src/api/models/
5. If the hook is GET → check it generated as useQuery, not useMutation
   If wrong → add an operations override in orval.config.ts
6. Create a feature hook wrapper in features/<domain>/hooks/
7. Consume in the view
```

---

## Known Issues & Workarounds

### OpenAPI 3.1.0 compatibility

The backend spec uses `openapi: 3.1.0`. Orval has incomplete support for 3.1.0 which causes some GET endpoints to be generated as `useMutation` instead of `useQuery`. This is corrected via the `operations` overrides in `orval.config.ts`. When adding new GET endpoints, verify the generated hook type and add an override if needed.

### Generic ApiSuccessResponse

Most endpoints return `ApiSuccessResponse` with `data: unknown`. Strongly-typed endpoints (like `GET /reports`) are correct. For weakly typed ones, cast the data field at the feature hook boundary — never in the view.

### POST endpoints used for fetching

Several backend endpoints use POST for data retrieval (`/post/getAllPost`, `/post/getUserProfile`). Orval generates these as `useQuery` with POST method. This is correct behaviour — TanStack Query is HTTP-method agnostic. Do not change these to mutations.

---

## Gitignore Decision

`src/api/` is **committed to Git** in this project. This means:

- Generated code is visible in PRs and code reviews
- No extra setup step required after cloning
- Diffs show exactly what changed when the spec updates

If you prefer to gitignore it, add `pnpm generate` as a `postinstall` script in `package.json` so it runs automatically after `pnpm install`.

```json
// package.json
"scripts": {
  "generate":    "orval",
  "postinstall": "orval"
}
```
