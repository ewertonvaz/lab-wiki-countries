import { useParams } from 'react-router-dom';

function CountryDetails({allCountries}) {
    const { countryID } = useParams();
    const country = allCountries.find( country => country.alpha3Code === countryID);

    function getBorderName(border){
        return (allCountries.find(el => el.alpha3Code === border).name.common)
    }

    return (
        <div className="col-7">
            <img 
                src={`https://flagpedia.net/data/flags/icon/256x192/${country.alpha2Code.toLowerCase()}.png`} 
                alt="" 
                width="180px"
            />
            <h1>{country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul style={{listStyle: "none"}}>
                        {
                            country.borders.map( border => {
                                return ( 
                                    <li key={border}><a href={`/${border}`}>{getBorderName(border)}</a></li>
                                )
                            })
                        }
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
    );
}

export default CountryDetails;