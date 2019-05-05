import React, { Component } from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import filterFactory, { textFilter, multiSelectFilter, numberFilter, selectFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';

const URL = "https://jamalaa.cc/jwtbackend/api/cars"; //Indsæt URL for API, husk at spørger om War fil angående api endpoint

const fuelOptions = {
    0: 'gas',
    1: 'diesel',
    2: 'electricity',
    3: 'hybrid'
};

const gearOptions = {
    0: 'shift',
    1: 'auto',
}; // add in later, cuz it wont load the data in the datafield

const labels = [{
    dataField: 'nummerplate', // husk at ændre til numberplate
    text: 'number plate',
    sort: true,
    filter: textFilter()
}, {
    dataField: 'brand',
    text: 'Brand',
    sort: true,
    filter: textFilter()
}, {
    dataField: 'fueltype',
    text: 'fueltype',
    sort: true,
    filter: textFilter()
    
}, {
    dataField: 'gear',
    text: 'Gear',
    sort: true,
    filter: textFilter()
}, {
    dataField: 'year',
    text: 'year-Model',
    sort: true,
    filter: textFilter()
}, {
    dataField: 'cartype',
    text: 'Cartype',
    sort: true,
    filter: textFilter()
}, {
    dataField: 'seats',
    text: 'Seats',
    sort: true,
    filter: textFilter()
}, {
    dataField: 'doors',
    text: 'Doors',
    sort: true,
    filter: textFilter()
}, {
    dataField: 'price',
    text: 'Price',
    sort: true,
    filter: textFilter()
}];

class Rental extends Component {
    state = { cars: [], msg: "" }
    async componentDidMount() {

        this.setState({ msg: "Loading..." });
        const cars = await
            fetch(URL).then(res => res.json());

        this.setState({ cars, msg: "" });
    }

    render() {

        return <div>
            <BootstrapTable
                striped
                hover
                bootstrap4
                keyField='id'
                data={this.state.cars}
                columns={labels}
                filter={filterFactory()}
                pagination={paginationFactory()}
            />
        </div>
    }
}

export default Rental;