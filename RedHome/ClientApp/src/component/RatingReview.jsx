import React from 'react'

function RatingReview({ rating, setRating }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star, index) => {
        return (  
          <span
          key = {index}
            className='start'
            style={{
              cursor: 'pointer',
              color: rating >= star ? 'gold' : 'gray',
              fontSize: `25px`,
            }}
            onClick={() => {
              setRating(star)
            }}
          >
            {' '}
            ★{' '}
          </span>
        )
      })}
    </div>
  )
}

export default RatingReview;