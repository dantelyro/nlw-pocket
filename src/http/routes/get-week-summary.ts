import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getWeekPendingGoals } from '../../functions/get-week-pending-goals'
import { getWeekSummay } from '../../functions/get-week-summary'

export const getWeekSummaryRoute: FastifyPluginAsyncZod = async app => {
  app.get('/pending-goals', async request => {
    const { summary } = await getWeekSummay()

    return { summary }
  })
}
