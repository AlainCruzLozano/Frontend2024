import PropTypes from "prop-types"

const CityCardContent= ({weather}) =>{
    return(
    <>
        <img
            src={`http:${weather.current.condition.icon}`}
            className="card-img-top"
            alt="..."
        />  
        <div className="card-body" style={{margin:"auto"}}>
            <h5 className="card-tittle">{`${weather.location.name},${weather.location.region}-${weather.location.country}`}</h5>
            <p className="card-text">{weather.current.condition.text}</p>
            <p className="card-text justify-content-between">
            <i className="bi bi-thermometer-half text-danger"></i>&nbsp;{`${weather.current.temp_c}°`}&nbsp;&nbsp;&nbsp;
            <i className="bi bi-droplet-half text-primary"></i>&nbsp;{`${weather.current.humidity}%`}&nbsp;&nbsp;&nbsp;
            <i className="bi bi-wind text-success"></i>&nbsp;{`${weather.current.wind_kph} kph`}
            </p>
        </div>
    </>
    )
}
CityCardContent.propTypes ={
    weather: PropTypes.object.isRequired
}
export default CityCardContent