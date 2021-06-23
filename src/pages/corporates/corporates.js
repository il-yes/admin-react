import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from '../../axios';
import Container from '@material-ui/core/Container';
import SearchFields from '../../components/search';
import CorporateContainer from '../../containers/CorporateContainer'
import {requests} from '../../components/requests-api';
import NavBar from '../../components/navbar'

import LinearProgress from '@material-ui/core/LinearProgress';

let fetchUrl = requests.corporateList

export default function Corporates() {
	const [ corporates, setCorporates ] = useState([])
    const [ pagination, setPagination ] = useState(null)
    const [ loading, setLoading ] = useState(true)
	let location = useLocation();
    
    useEffect(() => {
		setLoading(true)
		async function fetchData() {
			const request = await axios.get(fetchUrl + location.search)
			setCorporates(JSON.parse(request.data.collection))
			setPagination(request.data.pagination)
			setLoading(false)
		}
		fetchData()
		}, [location]);


	async function fetchCorporates(fetchUrl) {
		const request = await axios.get(fetchUrl)
		setCorporates(JSON.parse(request.data.collection))
		setPagination(request.data.pagination)
	}


    return (
		<div>
			<NavBar />
			<Container maxWidth="md">
				<SearchFields />
				{loading ? <LinearProgress /> : ''}
				<CorporateContainer 
				corporates={corporates} 
				pagination={pagination}
				fetchCorporates={fetchCorporates}/>
			</Container>
		</div>
    )
}

