import React from 'react';
import { Tile } from './Tile'
import VideoPlayer from './VideoPlayer'
import surface from '../images/surface.png'
import m365 from '../images/microsoft-365.png'
import w11 from '../images/w11.png'
import gp from '../images/GP.jpg'

const imgs = [surface, m365, w11,gp];
const text = ["Surface Laptop Go 2", "Microsoft 365", "Windows 11","Xbox Game Pass"];
type State = { arr: Array<boolean> };
type Action = { type: Array<boolean>};
function reducer(state: State, action: Action): State {
    return { arr : action.type };
}

export function TileGroup(fontColor: string, vid: object, dim: number[]) {
    const [state, dispatch] = React.useReducer(reducer, {arr:[false,false,false,false,false]});
    const handle = (id: string) => {
        const num = parseInt(id, 10);
        if (state.arr[num - 1]) {
            state.arr[num - 1] = false;
            
            dispatch({ type: state.arr })
            return //state.arr;
        }
        for (let i = 0; i < 5; i++) {
            state.arr[i] = false;
        }
        state.arr[num - 1] = true;
        console.log(state.arr)
        dispatch({ type: state.arr})
        //return //state.arr;
    }

    return (
            <React.Fragment >
            {/*{//rows}*/}
            {Tile(fontColor, dim[0], dim[1], imgs[0], text[0], '', 'T1', state.arr[0], ()=> handle("1"))}
            {Tile(fontColor, dim[0], dim[1], imgs[1], text[1], '', 'T1', state.arr[1], ()=> handle("2"))}
            {Tile(fontColor, dim[0], dim[1], imgs[2], text[2], '', 'T1', state.arr[2], ()=> handle("3"))}
            {Tile(fontColor, dim[0], dim[1], imgs[3], text[3], '', 'T1', state.arr[3], ()=> handle("4"))}
            {state.arr[0] && <VideoPlayer url={'https://www.youtube.com/watch?v=Myn1Kw_RINQ'} settings={vid} />}
            {state.arr[1] && <VideoPlayer url={'https://www.youtube.com/watch?v=jT3bDt2qrHQ'} settings={vid} />}
            {state.arr[2] && <VideoPlayer url={'https://www.youtube.com/watch?v=rJesac0_Ftw'} settings={vid} />}
            {state.arr[3] && <VideoPlayer url={'https://www.youtube.com/watch?v=rJesac0_Ftw'} settings={vid} />}
            </React.Fragment>
           
           
      );
}

