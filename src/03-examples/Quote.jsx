import React, { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({ author, quote }) => {

    const [ boxSize, setBoxSize ] = useState({ width: 0, height: 0})

    const pRef = useRef()

    useLayoutEffect(() => {
        const { width, height } = pRef.current.getBoundingClientRect()
        // console.log(height, '   ', width)
      setBoxSize({ width, height })
    }, [quote])


  return (
    <>
        <blockquote 
            className='blockquote text-end'
            style={{display: 'flex'}}
        >
            <p className='mb-1' ref={pRef}> { quote} </p>
            <footer className='blockquote-footer'>{ author }</footer>
        </blockquote>

        <code> { JSON.stringify(boxSize) }</code>
    </>
  )
}
