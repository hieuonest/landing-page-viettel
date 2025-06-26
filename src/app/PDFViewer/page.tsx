import React from 'react'

export default function page() {
  return (
    <div style={{ height: '100vh' }}>
      <iframe
        src="/demo.pdf"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </div>
  )
}

