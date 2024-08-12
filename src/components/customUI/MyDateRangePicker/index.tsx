'use client'

import { useState, useEffect } from 'react'
import { Button, DateRangePicker, Radio, RadioGroup, RadioProps } from '@nextui-org/react'
import {
    DateValue,
    startOfWeek,
    endOfWeek,
    startOfMonth,
    endOfMonth,
    now,
    getLocalTimeZone,
    toCalendarDateTime,
    today,
} from '@internationalized/date'
import { useDateFormatter } from '@react-aria/i18n'
import { RangeValue } from '@react-types/shared'
import { cn } from '@/lib/utils'
import type { FetchSettlsAction } from '@/actions/fetchSettlsAction'
import { fetchSettlsAction } from '@/actions/fetchSettlsAction'
import { MyDateRange } from '@/lib/types'
import toast from 'react-hot-toast'

type TPresetDate = 'today' | 'yesterday' | 'cur_week' | 'last_week' | 'cur_month' | 'last_month'

function toJsDate(value: RangeValue<DateValue> | undefined, localTZ: string) {
    if (!value) {
        return undefined
    }
    return {
        start: value.start.toDate(localTZ).getTime(),
        end: value.end.toDate(localTZ).getTime(),
    }
}

export function MyDateRangePicker() {
    let locale = 'vi-VN'
    const localTZ = getLocalTimeZone()
    const [value, setValue] = useState<RangeValue<DateValue> | undefined>({
        start: today(localTZ),
        end: today(localTZ),
    })
    let formatter = useDateFormatter({ dateStyle: 'full' })

    const handlePresetDay = (selected: TPresetDate) => {
        let startDay = today(localTZ)
        let endDay = startDay
        if (selected == 'today') {
            setValue({
                start: startDay,
                end: endDay,
            })
        } else if (selected == 'yesterday') {
            setValue({
                start: startDay.subtract({ days: 1 }),
                end: endDay.subtract({ days: 1 }),
            })
        } else if (selected == 'cur_week') {
            startDay = startOfWeek(startDay, locale)
            endDay = endOfWeek(startDay, locale)
            setValue({
                start: startDay,
                end: endDay,
            })
        } else if (selected == 'last_week') {
            startDay = startOfWeek(startDay.subtract({ weeks: 1 }), locale)
            endDay = endOfWeek(startDay, locale)
            setValue({
                start: startDay,
                end: endDay,
            })
        } else if (selected == 'cur_month') {
            startDay = startOfMonth(startDay)
            endDay = endOfMonth(startDay)
            setValue({
                start: startDay,
                end: endDay,
            })
        } else if (selected == 'last_month') {
            startDay = startOfMonth(startDay.subtract({ months: 1 }))
            endDay = endOfMonth(startDay)
            setValue({
                start: startDay,
                end: endDay,
            })
        }
    }

    const clientFetchSettlsAction = async () => {
        const dateRange = toJsDate(value, localTZ) as MyDateRange
        const res = await fetchSettlsAction(dateRange)
        if (res.error) {
            toast.error(res.error)
            return
        }
        console.log(res)
    }

    return (
        <div className="flex flex-row gap-2">
            <form action={clientFetchSettlsAction} className="w-full flex flex-col gap-y-2">
                <div className="flex justify-between items-center">
                    <p className="text-default-500 text-sm">
                        Selected date:{' '}
                        {value
                            ? `${formatter.format(value.start.toDate(localTZ))}-${formatter.format(
                                  value.end.toDate(localTZ)
                              )}`
                            : '--'}
                    </p>
                    <div className="flex gap-x-2">
                        <Button onClick={() => setValue(undefined)} variant="bordered">
                            Clear
                        </Button>
                        <Button type="submit">Get data</Button>
                    </div>
                </div>

                <DateRangePicker
                    label="Date range"
                    value={value ? value : null}
                    onChange={setValue}
                    granularity={'day'}
                    visibleMonths={2}
                    pageBehavior="single"
                    // maxValue={now(getLocalTimeZone())}
                    CalendarBottomContent={
                        <RadioGroup
                            aria-label="Date precision"
                            classNames={{
                                base: 'w-full py-2 text-sm',
                                wrapper:
                                    'px-20 gap-1 overflow-hidden overflow-x-auto justify-center',
                            }}
                            onChange={({ target }) => handlePresetDay(target.value as TPresetDate)}
                            orientation="horizontal">
                            <CustomRadio value="today">Today</CustomRadio>
                            <CustomRadio value="yesterday">Yesterday</CustomRadio>
                            <CustomRadio value="cur_week">This week</CustomRadio>
                            <CustomRadio value="last_week">Last week</CustomRadio>
                            <CustomRadio value="cur_month">This month</CustomRadio>
                            <CustomRadio value="last_month">Last month</CustomRadio>
                        </RadioGroup>
                    }
                />
            </form>
        </div>
    )
}

const CustomRadio = (props: RadioProps) => {
    const { children, ...otherProps } = props

    return (
        <Radio
            {...otherProps}
            classNames={{
                base: cn(
                    'flex-none m-0 h-8 bg-content1 hover:bg-content2 items-center justify-between',
                    'cursor-pointer rounded-full border-2 border-default-200/60',
                    'data-[selected=true]:border-primary'
                ),
                label: 'text-tiny text-default-500',
                labelWrapper: 'px-1 m-0',
                wrapper: 'hidden',
            }}>
            {children}
        </Radio>
    )
}