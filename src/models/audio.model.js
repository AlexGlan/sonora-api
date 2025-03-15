import mongoose from "mongoose";

const audioTrackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
    },
    iconName: {
        type: String,
    },
    authorName: {
        type: String,
        required: true,
    },
    originalName: {
        type: String,
        required: true,
    },
    originalAudioLink: {
        type: String,
        required: true,
        unique: true,
    },
    audioSrc: {
        type: String,
        required: true,
        unique: true,
    },
});

const AudioTrack = mongoose.model('audio_track', audioTrackSchema);

export default AudioTrack;