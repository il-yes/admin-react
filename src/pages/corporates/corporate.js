import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import Container from '@material-ui/core/Container';
import {requests} from '../../components/requests-api';
import BasicTable from '../../components/BasicTable';
import ResultTable from '../../components/ResultTable';
import axios from '../../axios'
import NavBar from '../../components/navbar'

let fetchUrl = requests.corporateList

export default function Corporate() {
    const { id } = useParams();
    const [ corp, setCorp ] = useState(null)
    const columnsCorp = ['#', 'name', 'sector', 'siren']
    const columnsResult = ['ca', 'margin', 'ebidta', 'loss', 'year']

    useEffect(() => {
        async function fetchData() {
			const request = await axios.get(fetchUrl + '/' + id)
            setCorp(request.data)
		}
		fetchData()
    }, [])

    return(
        <div>
            <NavBar />
			<Container maxWidth="md">
                {corp !== null ? <BasicTable 
                            columns={columnsCorp} 
                            corp={corp}/> : 'loading'}
                            <hr />
                            {corp !== null ? <ResultTable 
                                                columns={columnsResult} 
                                                results={corp.results}/> : 'loading'}
                </Container>

        </div>
    )
}