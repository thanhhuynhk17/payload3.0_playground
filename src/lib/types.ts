import { z } from 'zod'

export const MyDateRangeSchema = z.object(
    {
        start: z.number({
            invalid_type_error: 'Start date not found',
        }),
        end: z.number({
            invalid_type_error: 'End date not found',
        }),
    },
    {
        message: 'Date range not found',
    }
)

export type MyDateRange = z.infer<typeof MyDateRangeSchema>
