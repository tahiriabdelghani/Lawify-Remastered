import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const AvocatShema = new mongoose.Schema({
  role: {
    type: String,
    default: "avocat",
  },
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a validate email",
    },
    unique: true,
  },
  password: {
    select: false,
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
  },
  phoneNumber: {
    type: String,
    maxlength: 20,
    trim: true,
    default: "0616202020",
  },
  city: {
    type: String,
    enum: [
      "Afourer",
      "Agadir",
      "Ait Melloul",
      "Al Hoceima",
      "Assa",
      "Benguerir",
      "Beni Mellal",
      "Berrechid",
      "Casablanca",
      "Deroua",
      "El Gara",
      "El Hajeb",
      "El Jadida",
      "Erfoud",
      "Fes",
      "Fkih Ben Salah",
      "Kenitra",
      "Khemisset",
      "Khouribga",
      "Ksar el Kebir",
      "Larache",
      "Mansour",
      "Marrakesh",
      "Mehediyah",
      "Meknes",
      "Mohammedia",
      "Nador",
      "Ouazzane",
      "Oued Zem",
      "Oujda",
      "Oulad Teima",
      "Rabat",
      "Safi",
      "Sefrou",
      "Settat",
      "Sidi Bennour",
      "Sidi Slimane",
      "Skhirat",
      "Tahala",
      "Tan-Tan",
      "Tangier",
      "Tarfaya",
      "Taza",
      "Temara",
      "Tiflet",
      "Tiznit",
      "Touissite",
    ],
    required: [true, "Please provide city"],
  },
  speciality: {
    type: String,
    enum: ["Rien", "Sport", "Famille"],
    // default: "Nothing",
    required: [true, "Please provide speciality"],
  },
  price: {
    type: Number,
    default: 3,
  },
  image: String,
  onlineService: {
    type: Boolean,
  },
  cabinetService: {
    type: Boolean,
  },
  presentation: {
    type: String,
  },
  competences: {
    type: Array,
    default: [],
  },
  domaines: {
    type: Array,
    default: [],
  },
  adresse: {
    type: String,
    default:""
  },
  website: {
    type: String,
    default:""
  },
  tele: {
    type: String,
    default:""
  },

  langues: {
    type: Array,
  },
  formations: {
    type: Array,
  },
  Tarifs: {
    type: Array,
  },
  Status: { type: String, default: "NotConfirmed" },
  //Upload Certificat
});

AvocatShema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

AvocatShema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};
AvocatShema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

export default mongoose.model("Avocat", AvocatShema);
