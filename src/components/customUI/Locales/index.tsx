'use client'
import * as React from 'react'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

export default function Locales() {
    return (
        <Select>
            <SelectTrigger className="max-w-max px-2">
                <SelectValue className='text-muted-foreground ' placeholder="Choose your language" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
