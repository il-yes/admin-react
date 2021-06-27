import React from 'react';
import EnhancedTable from '../components/EnhancedTable'


export default function CorporateContainer({corporates, pagination, fetchCorporates}) {

    return (
        <div className="container">
        
            {corporates.length > 0 && pagination 
                        ? <EnhancedTable  
                                corporates={corporates} 
                                pagination={pagination}/> 
                        :  "il n'y a pas de données..."}

        </div>
    )
}