import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

export function Message(message) {
    return <>
        <Box color="text.primary" style={{ height: "100%" }} clone>
            <Paper>
                <Box >
                    {message.data}
                </Box>
            </Paper>
        </Box>
    </>

}