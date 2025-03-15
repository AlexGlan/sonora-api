import express from 'express';
import AudioTrack from '../models/audio.model.js';

const router = express.Router();

// Get all audio tracks
router.get('/', async (req, res) => {
    try {
        const audioTracks = await AudioTrack.find({});
        res.status(200).json({ data: audioTracks });
    } catch (error) {
        console.error('Error while fetching audio track data:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;