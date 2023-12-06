import * as _React from 'react'; 
import { styled } from '@mui/system'; 
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; 
import shopImage from '../..assets/images/image.jpg';

interface Props {
    title: string
}

// code out our styled components
const Root = styled('div')({
    padding: 0,
    margin: 0
})

const Main = styled('main')({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .5)), url(${shopImage});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top 5px', 
    position: 'absolute',
    marginTop: '10px'
})


// This is our firsst functional based component!
export const Home = (props: Props) => {

    // return is always HTML & it can have ONLY 1 parent div 
    return (
        <div>
            <h1> { props.title }</h1>
        </div>
    )
}