import React, { useEffect, useRef } from 'react'

export default function useCount() {
    const count = useRef(0);
    useEffect(() => {
        count.current = count.current + 1;
      })
    return (
    count.current
  )
}
