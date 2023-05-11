const file = require('./data.json');

const indian_religion_caste=file.religion

const religions=indian_religion_caste.map((e)=>{
    return e.name
})

function getCaste(filter){
    const result = indian_religion_caste.filter(obj => obj.name === filter);
    return result[0].castes
}

const Hindu=getCaste("Hindu")
const Muslim=getCaste("Muslim")
const MuslimShia=getCaste("Muslim - Shia")
const MuslimSunni=getCaste("Muslim - Sunni")
const Christian=getCaste("Christian")
const Sikh=getCaste("Sikh")
const JainAll=getCaste("Jain - All")
const JainDigambar=getCaste("Jain - Digambar")
const JainShwetambar=getCaste("Jain - Shwetambar")
const Parsi=getCaste("Parsi")
const Buddhist=getCaste("Buddhist")
const Jewish=getCaste("Jewish")
const InterReligion=getCaste("Inter-Religion")
const NoReligiousBelief=getCaste("No Religious Belief")

module.exports = {indian_religion_caste,religions,Hindu,Muslim,MuslimShia,MuslimSunni,Christian,Sikh,JainAll,JainDigambar,JainShwetambar,Parsi,Buddhist,Jewish,InterReligion,NoReligiousBelief};