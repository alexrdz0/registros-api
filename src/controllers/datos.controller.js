import Datos from '../models/Datos';
import Data from '../models/Datos'

export const createDato = async (req, res)=>{
    const {
    date,
    departamento,
    avance,
    status,
    nuc,
    oficio,
    equipo,
    unidad,
    zona,
    fechaD,
    hora,
    fechaR,
    id_del,
    delito,
    num_if,
    fechaC,
    lic,
    agente,
    fechaRecol,
    dir,
    dis,
    evidencia,
    banco,
    marcaEqui,
    modeloEqui,
    serieEqui,
    marcaAlma,
    modeloAlma,
    serieAlma,
    md5,
    sha1,
    swImagen,
    swArte,
    swInfo
} = req.body;

try{
    const newDato = new Datos({
        date,
        departamento,
        avance,
        status,
        nuc,
        oficio,
        equipo,
        unidad,
        zona,
        fechaD,
        hora,
        fechaR,
        id_del,
        delito,
        num_if,
        fechaC,
        lic,
        agente,
        fechaRecol,
        dir,
        dis,
        evidencia,
        banco,
        marcaEqui,
        modeloEqui,
        serieEqui,
        marcaAlma,
        modeloAlma,
        serieAlma,
        md5,
        sha1,
        swImagen,
        swArte,
        swInfo
    });
    //almacenar el nuevo registro
    const datoSaved = await newDato.save();

    res.status(201).json(datoSaved);
}catch (error){
    console.log(error);
    return res.status(500).json(error);
}
};

export const getDatos = async (req, res)=> {
    const datos = await Data.find();
    res.json(datos);
}

export const getDatoByID = async (req, res)=> {
    const {datoId} = req.params;

    const dato = await Data.findByID();
    res.status(200).json(dato);
};

export const updateDatoById =async (req, res)=> {
    const {datoId} = req.params;
    await Data.findByIdAndUpdate(datoId);
    res.status(200).json();
};

export const getDatoByNuc = async (req, res) => {
    const {datoNuc} = req.query.search;
    const datoEncontrado = await Data.findOne(datoNuc);
    if(!datoEncontrado){
        res.status(400).json({message: "no se pudo encontrar el criterio solicitado"});
    }else{
        res.status(200).json(datoEncontrado);
    }
};