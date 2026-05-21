// orval.config.ts
import { defineConfig } from 'orval'

export default defineConfig({
  reportSystem: {
    input: {
      target: process.env.API_DOCS_URL ?? 'http://localhost:8080/v3/api-docs',
    },
    output: {
      target: 'src/api/endpoints',
      schemas: 'src/api/models',
      client: 'react-query',
      mode: 'tags-split',
      override: {
        mutator: {
          path: 'src/utils/http/clients/coreBackend.client.ts',
          name: 'coreBackendClient',
        },
        query: {
          useQuery: true,
          useMutation: true,
        },
        // ── Fix GET endpoints that were generated as mutations ──
        operations: {
          getReports: {
            query: { useQuery: true, useMutation: false },
          },
          getProfile: {
            query: { useQuery: true, useMutation: false },
          },
          getDashboardCounts: {
            query: { useQuery: true, useMutation: false },
          },
          getImage: {
            query: { useQuery: true, useMutation: false },
          },
          getUserImage: {
            query: { useQuery: true, useMutation: false },
          },
          // ── Fix POST endpoints that should be mutations ──
          moderateReport: {
            query: { useQuery: false, useMutation: true },
          },
          createReport: {
            query: { useQuery: false, useMutation: true },
          },
          logoutAuth: {
            query: { useQuery: false, useMutation: true },
          },
          updateProfile: {
            query: { useQuery: false, useMutation: true },
          },
          uploadProfileImage: {
            query: { useQuery: false, useMutation: true },
          },
          uploadCoverImage: {
            query: { useQuery: false, useMutation: true },
          },
          updatePost: {
            query: { useQuery: false, useMutation: true },
          },
        },
      },
    },
  },
})
