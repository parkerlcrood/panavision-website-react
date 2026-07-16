function VideoSection(videoObj) {

    const video = videoObj.video;
    const thumbnail = `https://img.youtube.com/vi/${video.video_id}/0.jpg`;
    const embed_url = `https://www.youtube.com/embed/${video.video_id}`

    return (<>
        
        <span className="wrap">
            <div id="top" style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundImage: `url(${thumbnail})`,
                backgroundSize: "cover",
                filter:"blur(15px)",
                transform: "scale(1.3)",
                zIndex: "-1",
                justifySelf:"center",
            }}>
            </div>
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.4)",
                    zIndex: 0,
                }}
            />
            <figure className="videocolumn">
                <iframe className="videoembed" src={embed_url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </figure>
            <figure className="videoexplainer">
                <div><h3 className="videotitle">{video.title}</h3>
                </div>
                <div><p className="explainer">{video.description}</p>
                </div>
            </figure>
        </span>  
        </>
    )
}

export default VideoSection;