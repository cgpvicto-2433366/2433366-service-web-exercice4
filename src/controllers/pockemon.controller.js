import { getOnePockemon } from "../models/pockemon.model.js";

export const _getOnePockemon = async (req, res) =>{
    const param = req.params.id;

    // Teste si le paramètre id est présent et valide
    if(!param|| parseInt(param) <= 0){
        res.status(400);
        res.send({
            message: "L'identifiant du pockemon est obligatoire et doit être supérieur à 0"
        });
        return;
    }

    try {
        const pockemon = await getOnePockemon(param);
        // Pockemon non trouvé
        if(!pockemon){
            res.status(404).json({ "erreur":"Pokemon introuvable avec l'id "+param })
            return;
        }
        //Pockemon trouvé
        res.json(pockemon);

    } catch (erreur) {
        console.log('Erreur : ', erreur);
        res.status(500)
        res.send({
            "erreur":"Echec lors de la récupération du pokemon avec l'id "+ param
        });
    }
}