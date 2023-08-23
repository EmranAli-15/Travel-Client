import React from 'react';
import Cards from './components/Cards';

const TicketCards = () => {

    const tickets = [
        {
            img: "https://www.travelandexplorebd.com/storage/app/public/posts/October2019/dreamstime_xxl_55742473.jpg",
            from: "DHA",
            to: "COX'S",
            tk: 700,
            place: "Cox's Bazar",
            hour: 4.5,
            distance: 100,
            availableSits: 15,
        },
        {
            img: "https://www.travelandexplorebd.com/storage/app/public/posts/October2019/dreamstime_xxl_55742473.jpg",
            from: "DHA",
            to: "RANG",
            tk: 500,
            place: "Rangga Mati",
            hour: 4.5,
            distance: 100,
            availableSits: 25,
        },
        {
            img: "https://www.travelandexplorebd.com/storage/app/public/posts/October2019/dreamstime_xxl_55742473.jpg",
            from: "DHA",
            to: "COX'S",
            tk: 500,
            place: "Cox's Bazar",
            hour: 4.5,
            distance: 100,
            availableSits: 25,
        },
        {
            img: "https://www.travelandexplorebd.com/storage/app/public/posts/October2019/dreamstime_xxl_55742473.jpg",
            from: "DHA",
            to: "COX'S",
            tk: 500,
            place: "Cox's Bazar",
            hour: 4.5,
            distance: 100,
            availableSits: 25,
        },
        {
            img: "https://www.travelandexplorebd.com/storage/app/public/posts/October2019/dreamstime_xxl_55742473.jpg",
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
        <div className='my-[300px] max-w-[1400px] mx-auto'>
            <Cards tickets={tickets}></Cards>
        </div>
    );
};

export default TicketCards;