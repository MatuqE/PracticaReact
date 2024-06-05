import React , { memo } from 'react'

// se puede usar memo o React.memo


// asi se usa segun la doc


export const Small = memo( function Small({ value }) {

    console.log('Me volvi a dibujar')

  return (
    <>
        <small>{ value }</small>
    </>
  )
})

// asi lo explico en el video

// export const Small = React.memo(({ value }) => {

//     console.log('Me volvi a dibujar')

//   return (
//     <>
//         <small>{ value }</small>
//     </>
//   )
// })
