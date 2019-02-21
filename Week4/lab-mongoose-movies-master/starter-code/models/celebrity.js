const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const myCelebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

const Celebrity = mongoose.model('Celebrity', mySchema);