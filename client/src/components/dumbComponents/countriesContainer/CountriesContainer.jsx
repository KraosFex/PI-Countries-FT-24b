// import stilos
import Filter from "../filter/Filter";
import Order from "../order/Order";

// styles
import "./CountriesContainer.css"

const CountriesContainer = ({ 
                        contries, 
                        listPages, 
                        onSelectChange,
                        options }) => {
    return(
        <div className="ContainerPaginate">
            <div className="countainefilters">
                <ul className="listPages"> 
                    { listPages } 
                </ul>
                <Filter onSelectChange={onSelectChange} options={options} />
                <Order onSelectChange={onSelectChange}/>
            </div>
            <div className="containerCountries">
                { contries }
            </div>
        </div>
    )
}

export default CountriesContainer;