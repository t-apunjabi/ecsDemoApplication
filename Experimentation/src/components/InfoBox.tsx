
import { useState } from 'react';
import Box from '@mui/material/Box';
export function InfoBox(Text:string, Img:string, right:boolean) {
    const [text] = useState(Text);
    const [img] = useState(Img);
    
    const layout = () => {
        if (right) {
            return (<Box
                sx={{
                    display: 'inline-flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    bgcolor: 'background.paper',
                    overflow: 'hidden',
                    borderRadius: '12px',
                    boxShadow: 1,
                    fontWeight: 'bold',
                }}
            >
               
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', md: 'flex-start' },
                        m: 3,
                        minWidth: { md: 350 },
                    }}
                >
                   <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
                        {text}
                    </Box>
                    
                </Box>
                <Box
                    component="img"
                    sx={{
                        height: 233,
                        width: 350,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                />
            </Box>    );
         }
        else {
            return (<Box
                sx={{
                    display: 'inline-flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    bgcolor: 'gray',
                    overflow: 'hidden',
                    borderRadius: '12px',
                    boxShadow: 1,
                    fontWeight: 'bold',

                }}
            >

                <Box
                    component="img"
                    sx={{
                        height: 233,
                        width: 350,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                    }}
                    src={img}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', md: 'flex-start' },
                        m: 3,
                        minWidth: { md: 350 },
                    }}
                >
                    <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
                        {text}
                    </Box>


                </Box>
            </Box>)
        }
    }
    return (
        <div>
            {layout()}
        </div>    
        
    );
}

