import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
  isPublished: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false // Assuming a default value is needed
  },
  views: {
    type: Number,
    default: 0
  },
  duration: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User" // Corrected to "User" for consistency with typical naming conventions
  },
  thumbnail: {
    type: String, // Assuming the type should be String, adjust if needed
  },
  videoFile: {
    type: String,
    required: true
  }
}, { timestamps: true });

videoSchema.plugin(mongooseAggregatePaginate);


export const Video = mongoose.model("Video", videoSchema);
