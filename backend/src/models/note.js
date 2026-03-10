import { Schema } from 'mongoose';
import { model } from 'mongoose';
import { TAGS, TYPES } from '@mini-snipped-vault/shared';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      default: '',
      trim: true,
    },
    tag: {
      type: String,
      enum: TAGS,
      default: 'Todo',
    },
    type: {
      type: String,
      enum: TYPES,
      default: 'note',
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      virtuals: true,
      id: true,
      transform: (doc, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  },
);

noteSchema.index({
  title: 'text',
  content: 'text',
});

export const Note = model('Note', noteSchema);
