import React from 'react'
import { SecondTop } from './SecondTop'
import { Publications } from './Publications'
import { NewsandEvents } from './NewsandEvents'

export const HomePage = () => {
    return (
        <div>
            <SecondTop />
            <Publications />
            <NewsandEvents />
        </div>
    )
}
