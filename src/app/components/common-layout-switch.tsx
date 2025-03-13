'use client'
import GridIcon from '@/components/icons/grid-icon'
import ListIcon from '@/components/icons/list-icon'
import React from 'react'

function CommonLayoutSwitch({ layout, setLayout }: {
  layout: "grid" | "list",
  setLayout: (layout: "grid" | "list") => void
}) {
  
  return (
    <div className='flex gap-4'>
      <button onClick={() => setLayout("grid")}>
        <GridIcon color={layout === "grid" ? "#858585" : "#C4C4C4"}/>
      </button>
      <button onClick={() => setLayout("list")}>
        <ListIcon color={layout === "list" ? "#858585" : "#C4C4C4"} />
      </button>
    </div>
  )
}

export default CommonLayoutSwitch