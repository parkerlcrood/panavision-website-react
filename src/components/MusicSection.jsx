function MusicSection(musicObj) {

    const music = musicObj.music;
    const thumbnail = `${import.meta.env.VITE_LOCAL_API_URL}/${music.proj_id}`;
    console.log(`${import.meta.env.VITE_LOCAL_API_URL}/${music.proj_id}`);

    return (<>
        <div className="album-background">
                <div className="album-container">
                    <img src={thumbnail}/>
                </div>
                <div className="album-text">
                    <p className="album-title">{music.title}</p>
                    <p className="album-description">{music.description}</p>
                </div>
        </div>
        </>
    )
}

export default MusicSection;