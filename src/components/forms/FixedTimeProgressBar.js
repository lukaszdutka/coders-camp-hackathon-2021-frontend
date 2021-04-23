// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import LinearProgress from "@material-ui/core/LinearProgress";
//
// const useStyles = makeStyles({
//     root: {
//         width: "100%",
//     },
// });
//
// export const FixedTimeProgressBar = (onFinish) => {
//     console.log(onFinish)
//     const classes = useStyles();
//     const [progress, setProgress] = React.useState(0);
//
//     React.useEffect(() => {
//         const timer = setInterval(() => {
//             setProgress((oldProgress) => {
//                 if (oldProgress === 100) {
//                     onFinish();
//                     return 0;
//                 }
//                 const diff = 30;
//                 return Math.min(oldProgress + diff, 100);
//             });
//         }, 500);
//
//         return () => {
//             clearInterval(timer);
//         };
//     }, [onFinish]);
//
//     return (
//         <div className={classes.root}>
//             <LinearProgress variant="determinate" value={progress} />
//         </div>
//     );
// };
