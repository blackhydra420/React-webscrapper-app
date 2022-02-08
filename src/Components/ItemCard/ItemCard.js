import react from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

const ItemCard = (props) => {
    const rating = props.item.rating;
    const [star, halfStar] = rating.split(".");

    let starRating = [];

    for(let i=0; i<Number(star); i++) {
        starRating.push(i);
    }
    if(Number(halfStar) > 0) starRating.push(Number(halfStar));

    let desc = props.item.description;

    if(desc.length > 95) desc = desc.substring(0,95) + "...";

    return(
        <div className='w-60 p-2 rounded-lg bg-slate-700 shadow-md transform transition-all hover:-translate-y-2 hover:shadow-lg duration-200 ease-out'>
            <div className='rounded-md mb-2'>
                <img src={props.item.imgLink} className="rounded-md" alt="item-image"/>
            </div>
            <div className='p-1'>
                <span className='font-bold text-xl text-sky-200'>{props.item.title}</span><br/>
                <span className='text-sm text-slate-300'>{desc}</span><br/>
                <span className='text-sm text-slate-400'>{
                    starRating.map(s => {
                        if(s == 5) return <FaStarHalf className='inline' />
                        else return <FaStar className='inline' />
                    })
                }</span><br/>
                <button className='btn-primary my-2'>{props.item.price}</button>
            </div>
        </div>
    );
}

export default ItemCard;