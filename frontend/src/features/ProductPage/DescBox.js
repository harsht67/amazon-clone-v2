import './DescBox.scss'

import { RiArrowDropUpLine, RiArrowDropDownLine } from 'react-icons/ri'

function DescBox({desc, data, ...props}) {

    const toggleDesc = () => {
        props.toggleDesc()
    }

    return(
        <div className='descBox'>

            <h3 className='descBox__title'>
                About this item
            </h3>

            <ul className={`descBox__content ${desc ? `show` : `hide`}`}>
                { data && data.map(line => <li className='content__line' >{line}</li>) }
            </ul>

            <span 
                className='descBox__btn'
                onClick={toggleDesc}
            >
                { desc ? <RiArrowDropUpLine/> : <RiArrowDropDownLine/>}
                { desc ? 'Read less' : 'Read more' }
            </span>

        </div>
    )
}

export default DescBox