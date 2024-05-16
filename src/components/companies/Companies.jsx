import assets from '../../constants/assets';

import './companies.css'

const compData = [
    {
        image: assets.comp_1
    },
    {
        image: assets.comp_2
    },
    {
        image: assets.comp_3
    },
    {
        image: assets.comp_4
    },
    {
        image: assets.comp_5
    }
];

const Companies = () => {
    const compdata = compData
    return (
        <div className='swiper-slide'>
            <div className='swiper-img-container'>
                <img src={assets.comp_1} />
                <img src={assets.comp_2} />
                <img src={assets.comp_3} />
                <img src={assets.comp_4} />
                <img src={assets.comp_5} />
            </div>
            <div className='swiper-img-container'>
                <img src={assets.comp_1} />
                <img src={assets.comp_2} />
                <img src={assets.comp_3} />
                <img src={assets.comp_4} />
                <img src={assets.comp_5} />
            </div>
        </div>
    )
}
export default Companies;