import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from '@mui/material/Stack'
import discord from './images/discord.jpg'
import Menu from './components/Menu'
import { TileGroup } from './components/TileGroup'
import { InfoBox } from './components/InfoBox'
import ControlledCarousel from './components/ControlledCarousel'
import './App.css';
const exampleVid = {
    "autoPlay": false,
    "playbackRate": 1,
    volume: 100,
}
function App(props: object) {
    const [defaultColor, setColor] = useState("red");
    const [defaultVidSettings, setVideoSettings] = useState(exampleVid);
    const [defaultView, setView] = useState(false);
    var [defaultDim, setDim] = useState([20, 15]); //height, width

    useEffect(() => {
        fetch("https://ecs.office.com/config/v1/OneDriveSharePoint/1.0.0.0?agents=Microservices_Rollouts_Test,Segmentation&RolloutEnvironment=Debug&Cloud=Public")
            .then(res => res.json())
            .then(
                (result) => {
                    setColor(result.Microservices_Rollouts_Test.color);
                    setVideoSettings(result.Microservices_Rollouts_Test.vid);
                    setView(result.Microservices_Rollouts_Test.dark);
                    setDim([result.Microservices_Rollouts_Test.dim[0] / 2, result.Microservices_Rollouts_Test.dim[1] / 2]);
                },
                (error) => {
                    console.log(error)
                }
            )

    }, [defaultColor, defaultVidSettings, defaultView, defaultDim])
    if (defaultView) {
        return (
            <div className="darkApp">

                <div className='introduction'>
                    <Menu />

                </div>
                <ControlledCarousel />

                {TileGroup(defaultColor, defaultVidSettings, defaultDim)}


                <Stack spacing={2}>
                    {InfoBox('Right aligned', discord, false)}
                    {InfoBox('Left aligned', discord, true)}
                </Stack>

            </div>);
    }
    else {
        return (
            <div className="App">

                <div className='introduction'>
                    <Menu />

                </div>
                <ControlledCarousel />
                {TileGroup(defaultColor, defaultVidSettings, defaultDim)}

                <Stack spacing={2}>
                    {InfoBox('Right aligned', discord, false)}
                    {InfoBox('Left aligned', discord, true)}

                </Stack>

            </div>);
    }


}

export default App;