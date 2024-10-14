import React from 'react'
import CourseItems from './CourseItems'

function CourseList() {
  return (
    <div className="p-5 bg-white dark:bg-slate-900 rounded-lg mt-5">
        <div>
            <h2 className="text-[20px] font-bold text-primary">Apps</h2>
        </div>
        <div className="mt-5">
            <div>
                <CourseItems />
            </div>
        </div>
    </div>
  )
}

export default CourseList