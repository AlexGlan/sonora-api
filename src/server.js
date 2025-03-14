import express from 'express';

const app = express();

const PORT = process.env.PORT || 3001;
const env = process.env.NODE_ENV?.toLowerCase();

app.listen(PORT, () => {
    if (env === 'development') {
        console.log(`Server running in development mode on http://localhost:${PORT}`);        
    } else {
        console.log(`Server started on port: ${PORT}`);
    }
});
