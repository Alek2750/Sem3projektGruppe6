import React, { Component } from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import filterFactory, { textFilter /* multiSelectFilter, numberFilter, selectFilter */ } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import apiFacade from "../apiFacade";
import Navbar from '../Header/Navbar'

//const URL = "https://jamalaa.cc/jwtbackend/api/cars"; //Indsæt URL for API, husk at spørger om War fil angående api endpoint

/* const fuelOptions = {
    0: 'gas',
    1: 'diesel',
    2: 'electricity',
    3: 'hybrid'
};

const gearOptions = {
    0: 'shift',
    1: 'auto',
}; */ // add in later, cuz it wont load the data in the datafield

const labels = [{
    dataField: 'numberplate', 
    text: 'number plate',
    filter: textFilter()
}, {
    dataField: 'brand',
    text: 'Brand',
    sort: true,
    filter: textFilter()
}, {
    dataField: 'fueltype',
    text: 'fueltype',
    filter: textFilter()

}, {
    dataField: 'gear',
    text: 'Gear',
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
    filter: textFilter(),

},
 {
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
}
];

const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    clickToExpand: true
  };

  const expandRow = {
    showExpandColumn: true,
    renderer: row => (
      <div>
        <p>{ `This Expand row is belong to rowKey ${row.id}` }</p>
        <p>If you would like to rent this vehicle, just press the button below that says Rent</p>
        <p>You can render anything here, also you can add additional data on every row object</p>
        <p>expandRow.renderer callback will pass the origin row object to you</p>
        <button>Rent this vehicle</button>
      </div>
    )
  };

class Rental extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cars: [],
            msg: "",
            booking: {
                startdate2: "2019-08-20",
                enddate2: "2019-08-29",
                car2Id: 9,
                totalPrice: 12000
            }

        }

    }



    async componentDidMount() {
        const startdate = new Date(this.props.match.params.startdate).toISOString().slice(0, 10).replace(/-/g, "-");
        const enddate = new Date(this.props.match.params.enddate).toISOString().slice(0, 10).replace(/-/g, "-");

        const newurl = `https://johachim.dk/jwtbackend/api/cars/${startdate}/${enddate}`;

        apiFacade.postData("https://johachim.dk/jwtbackend/api/booking", this.state.booking).then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', JSON.stringify(response)));

        this.setState({ msg: "Loading..." });
        const cars = await fetch(newurl).then(res => res.json());
        console.log(cars)
        this.setState({ cars, msg: "" });

        console.log(this.props)
        console.log(this.props.match.params.startdate)
        console.log(this.props.match.params.enddate)
        console.log(startdate);
        console.log(enddate);
    }

    render() {

        return <div>
            <Navbar />
            <BootstrapTable
                striped
                hover
                bootstrap4
                keyField='id'
                data={this.state.cars}
                columns={labels}
                filter={filterFactory()}
                pagination={paginationFactory()}
                selectRow={ selectRow }
                expandRow={ expandRow }
            >

            </BootstrapTable>
        </div>

    }
}

export default Rental;