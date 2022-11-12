function CountriesList({allCountries}) {
    return (
        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <div className="list-group">
                 {
                    allCountries.map( country => {
                        return (
                            <a key={country.alpha3Code} 
                                className="list-group-item list-group-item-action"
                                href={`/${country.alpha3Code}`}
                                style={{display: "flex", flexDirection: "column", alignItems: "center"}}
                            >
                                <img 
                                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} 
                                    alt="" 
                                    width="60px"
                                />
                                <span style={{fontSize:"1.2rem", marginTop: "4px"}}>{country.name.common}</span>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default CountriesList;