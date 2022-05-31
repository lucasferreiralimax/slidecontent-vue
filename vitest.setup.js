import { vi } from 'vitest'

vi.mock('vue-i18n', () => {
  return {
    useI18n: () => ({
      t: key => key,
    }),
  }
})