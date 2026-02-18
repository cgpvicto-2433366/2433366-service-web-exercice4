import { getOnePockemon, getAllPokemons } from "../models/pockemon.model.js";

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

/**
 * Recuperer la liste des pockemons en groupes de 25
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const _getAllPockemon = async (req, res) =>{
    let page = req.query.page
    const type = req.query.type || ""
    const limit =25

    //validation du parametre page
    if(page){
        if(parseInt(page)>=1){
            page = parseInt(page)
        }
        else{
            res.status(400);
            res.send({
                message: "La page spécifiée n'est pas valide."
            });
            return;
        }
    }else{
        page = 1
    }

    const offset = (page - 1)*limit;

    try {
        const pokemons = await getAllPokemons(offset, limit, type);
    
        resultat = {
            "pokemons": pokemons[0],
            "type": type,
            "nombrePokemonTotal": pokemons[1],
            "page": page,
            "totalPage": Math.ceil(pokemons[1] / limit)
        }
        res.json(resultat);

    } catch (erreur) {
        console.log('Erreur : ', erreur);
        res.status(500)
        res.send({
            "erreur":"Echec lors de la récupération du pokemon avec l'id "+ param
        });
    }
}