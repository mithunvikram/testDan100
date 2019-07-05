
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const testEntitySchema = new Schema({
   Enter_Name: String,
   Enter_num: Number
})

const testEntityModel = mongoose.model('testEntity', testEntitySchema, 'testEntity');
export default testEntityModel;
