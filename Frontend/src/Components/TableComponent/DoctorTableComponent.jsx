
import MaterialTable from 'material-table';
import React from 'react'
import DoctorDataService from '../../Services/DoctorDataService';

export const DoctorTableComponent = () => {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Surname', field: 'surname' },
            { title: 'Birth Year', field: 'birthYear'},
            {
                title: 'Birth Place',
                field: 'birthCity',
            },
        ],
        data: [
            { name: 'Prem', surname: 'Balaji', birthYear: 1997, birthCity: 'Bangalore' },
            {
                name: 'Raaj',
                surname: 'Raj',
                birthYear: 2000,
                birthCity: 'Chennai',
            },
        ],
        options:{
            actionsColumnIndex: -1,
        }
    });
    return (
        <div>
            <MaterialTable
                title="Doctor Details"
                columns={state.columns}
                data={state.data}
                options={state.options}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            DoctorDataService.addDoctor().then(response=>{
                                console.log(response.status,'add Doctor')
                            })
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data.push(newData);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            DoctorDataService.updateDoctor().then(response=>{
                                console.log(response.status,'Update Doctor')
                            })
                            setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    setState((prevState) => {
                                        const data = [...prevState.data];
                                        data[data.indexOf(oldData)] = newData;
                                        return { ...prevState, data };
                                    });
                                }
                            }, 600);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            DoctorDataService.deleteDoctor().then(response=>{
                                console.log(response.status,'Delete Doctor')
                            })
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data.splice(data.indexOf(oldData), 1);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                }}
            />
        </div>
    )
}
