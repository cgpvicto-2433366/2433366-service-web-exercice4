import pool from '../config/db.js'

/**
 * Methode pour recuperer un pockemon dans la bd a partir 
 * de son identifiant
 *  
 * Format de reponse:
 * // Succès avec la route /api/pokemons/1
 * // Code de statut 200
 * {
 *      "nom":"Bulbasaur",
 *      "type_primaire":"Grass",
 *      "type_secondaire":"Poison",
 *      "pv":45,
 *      "attaque":49,
 *      "defense":49
 *  }
 *
 *  // Erreur : Le pokemon n'est pas trouvé
 *  // Code de statut 404
 *  {
 *      "erreur":"Pokemon introuvable avec l'id 1245"
 *  }
 *
 *  // Erreur : Il y a eu une erreur lors de la requête SQL 
 *  // Code de statut 500
 *  // Inscrivez à la console le code de statut SQL et le message d'erreur généré
 *  {
 *      "erreur":"Echec lors de la récupération du pokemon avec l'id 1245"
 *  }
 *
 * @param {} id // L'identifiant du pokemon à récupérer
 */
export const getOnePockemon = async (id) =>{
    const requete = 'SELECT nom, type_primaire, type_secondaire, pv, attaque, defense FROM pokemon where id =?'
    const param = [id]

    try{
        const [resultat] = await pool.query(requete, param);
        return resultat[0] ?? null;
    } catch(erreur){
        console.log(`Erreur, code: ${erreur.code} sqlState ${erreur.sqlState} : ${erreur.sqlMessage}`);
        throw erreur;
    }
}

