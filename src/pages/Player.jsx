import React from 'react'
import styled from 'styled-components'
import {BsArrowLeft} from "react-icons/bs";
import video from "../assets/video.mp4"
import { useNavigate } from 'react-router-dom';


const Player = () => {

const navigate = useNavigate();

  return ( <Container>

        <div className='player'>
            <div className='back'>
                <BsArrowLeft onClick={()=> navigate(-1)}/>
            </div>
        </div>
        <video className="video" src={video} autoPlay loop controls muted>

        </video>
    </Container>
  )
}

export default Player

const Container = styled.div`
.player{
    width: 100vw;
    .back{
        position: absolute;
        padding: 2rem;
        z-index: 1;
        svg{
            font-size: 3rem;
            cursor: pointer;
        }
    }
}
video{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;