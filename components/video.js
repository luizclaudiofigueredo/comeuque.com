import React from 'react'

export default function Video({video}) {
  const url = `https://www.youtube.com/embed/${video.videoId}`
  console.log(url)
  return (
    <div className='video-container'>
        <iframe
            width="560" height="315"
            title={video.titulo}
            src={url}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div>
  )
}