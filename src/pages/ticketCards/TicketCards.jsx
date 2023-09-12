import React from 'react';
import Cards from './components/Cards';
import departImg from '../../assets/home/depart.png'
import returnImg from '../../assets/home/return.png'

const TicketCards = () => {

    const tickets = [
        {
            departAgency: departImg,
            returnAgency: returnImg,
            departAgencyName: "arab airlines",
            returnAgencyName: "USA airlines",
            from: "DHA",
            to: "COX'S",
            tk: 700,
            place: "Cox's Bazar",
            hour: 4.5,
            distance: 100,
            availableSits: 15,
        },
        {
            departAgency: departImg,
            returnAgency: returnImg,
            departAgencyName: "arab airlines",
            returnAgencyName: "USA airlines",
            from: "DHA",
            to: "RANG",
            tk: 500,
            place: "Rangga Mati",
            hour: 4.5,
            distance: 100,
            availableSits: 25,
        },
        {
            departAgency: departImg,
            returnAgency: returnImg,
            departAgencyName: "arab airlines",
            returnAgencyName: "USA airlines",
            from: "DHA",
            to: "COX'S",
            tk: 500,
            place: "Cox's Bazar",
            hour: 4.5,
            distance: 100,
            availableSits: 25,
        },
        {
            departAgency: departImg,
            returnAgency: returnImg,
            departAgencyName: "arab airlines",
            returnAgencyName: "USA airlines",
            from: "DHA",
            to: "COX'S",
            tk: 500,
            place: "Cox's Bazar",
            hour: 4.5,
            distance: 100,
            availableSits: 25,
        },
        {
            departAgency: departImg,
            returnAgency: returnImg,
            departAgencyName: "arab airlines",
            returnAgencyName: "USA airlines",
            from: "DHA",
            to: "COX'S",
            tk: 500,
            place: "Cox's Bazar",
            hour: 4.5,
            distance: 100,
            availableSits: 25,
        },
    ]


    return (
        <div className='my-[300px] max-w-[1200px] mx-auto'>
            <Cards tickets={tickets}></Cards>
        </div>
    );
};

export default TicketCards;