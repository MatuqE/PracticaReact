import React from 'react'

export const PokemonCard = ({ data, sprites }) => {

  return (
    <>
        <section
            style={{ height: 200 }}
        >
            <h2 className='text-capitalize'> #{data.id} - {data.name} </h2>
            {/* <div className=''>
                <img src={data.sprites.front_default} alt="" />
                <img src={data.sprites.back_default} alt="" />
                <hr />
                <img src={data.sprites.front_shiny} alt="" />
                <img src={data.sprites.back_shiny} alt="" />
            </div> */}

        <div>
            
            {
                sprites.map(sprite=>{
                    return(
                        <img src={sprite} alt="name" key={sprite}/>
                    )   
                })
            }

        </div>

        </section>
    </>
  )
}
