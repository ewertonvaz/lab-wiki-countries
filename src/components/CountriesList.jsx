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
                            >
                                {country.name.common}
                            </a>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default CountriesList;