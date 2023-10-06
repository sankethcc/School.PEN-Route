// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
// import FormatBoldIcon from '@mui/icons-material/FormatBold';
// import FormatItalicIcon from '@mui/icons-material/FormatItalic';
// import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
// import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
// import InsertLinkIcon from '@mui/icons-material/InsertLink';
// import Divider from '@mui/material/Divider';
// import Paper from '@mui/material/Paper';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
//   '& .MuiToggleButtonGroup-grouped': {
//     margin: theme.spacing(0.5),
//     border: 0,
//     '&.Mui-disabled': {
//       border: 0,
//     },
//     '&:not(:first-of-type)': {
//       borderRadius: theme.shape.borderRadius,
//     },
//     '&:first-of-type': {
//       borderRadius: theme.shape.borderRadius,
//     },
//   },
// }));

// export default function CustomizedDividers() {
//   const [alignment, setAlignment] = React.useState('left');
//   const [formats, setFormats] = React.useState(() => ['italic']);

//   const handleFormat = (event, newFormats) => {
//     setFormats(newFormats);
//   };

//   const handleAlignment = (event, newAlignment) => {
//     setAlignment(newAlignment);
//   };

//   return (
//     <div>
//       <Paper
//         elevation={0}
//         sx={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           background:'#EAEAEA',
//           borderRadius:'32px',
//           p:'0px 25px'
//         }}
//       >
//         <StyledToggleButtonGroup
//           size="small"
//           value={alignment}
//           exclusive
//           onChange={handleAlignment}
//           aria-label="text alignment"
//         >
          
//           <ToggleButton value="left" aria-label="left aligned">
//             <FormatListNumberedIcon />
//           </ToggleButton>
//           <ToggleButton value="center" aria-label="centered">
//             <FormatListBulletedIcon />
//           </ToggleButton>


//         </StyledToggleButtonGroup>
//         <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
//         <StyledToggleButtonGroup
//           size="small"
//           value={formats}
//           onChange={handleFormat}
//           aria-label="text formatting"
//         >
//           <ToggleButton value="bold" aria-label="bold">
//             <FormatBoldIcon />
//           </ToggleButton>
//           <ToggleButton value="italic" aria-label="italic">
//             <FormatItalicIcon />
//           </ToggleButton>
//           <ToggleButton value="underlined" aria-label="underlined">
//             <FormatUnderlinedIcon />
//           </ToggleButton>
//           <ToggleButton value="link" aria-label="link">
//             <InsertLinkIcon />
//           </ToggleButton>
//         </StyledToggleButtonGroup>
//       </Paper>
//     </div>
//   );
// }