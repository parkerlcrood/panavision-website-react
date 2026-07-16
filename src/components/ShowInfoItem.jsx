function ShowInfoItem({show}) {

    const dateString = show.date.split("T")[0];
    const dateArr = dateString.split("-");
    const showDateString = (dateArr[1] + "/" + dateArr[2] + "/" + dateArr[0]);

    return (
            <div className="show-item">
                <p className="showVenue">{show.venue}</p>
                <p className="showLocation">{show.city}, {show.state_province ? show.state_province : show.country}</p>
                <p className="showDate">{showDateString}</p>
                <a href={show.info_url} target="_blank"><button className="showInfo">Info</button></a>
            </div>
    );
}

export default ShowInfoItem;