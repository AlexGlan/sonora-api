import express from 'express';
import { connectDB } from './config/db.js';
import audioRoutes from './routes/audio.route.js';

const app = express();

const PORT = process.env.PORT || 3001;
const env = process.env.NODE_ENV?.toLowerCase();

app.use('/api/audio',audioRoutes);

app.listen(PORT, () => {
    connectDB();
    if (env === 'development') {
        console.log(`Server running in development mode on http://localhost:${PORT}`);        
    } else {
        console.log(`Server started on port: ${PORT}`);
    }
});
