// styles
import './ErrBox.scss'

// icons
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

function ErrBox({err}) {

    return (
        <article className='errBox'>

            <ErrorOutlineIcon
                className='icon'
            />

            <div>

                <p className='errBox-title'>
                    there was a problem
                </p>
            
                <p>{err}</p>
            
            </div>
        
        </article>
    )
}

export default ErrBox