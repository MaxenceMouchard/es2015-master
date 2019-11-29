
/**
 * La classe TextIndexer permet d'indexer du text via la méthode indexText
 * 
 */
export class TextIndexer {
    constructor() {
        this.map = new Map();
    }

    /**
     * Permet d'indexer du texte. Chaque mot doit être rangé dans un Map.
     * Le map doit contenir tous les mots rencotrés associé au nombre de fois que le mot à été rencontré dans le texte.
     * Les fonctions String.split() et String.replace vous serons utiles !
     * @param text Le texte source à indexer
     */
    indexText(text) {
        let _text = text.replace(/'/g, " ").replace(".", " ").replace(/,/g, " ").toLowerCase();
        let aText = _text.split(" ");
        aText.forEach(element => {
            if(!this.map.has(element))
                this.map.set(element, 1);
            else
                this.map.set(element, this.map.get(element) + 1);
        });

    }

    /**
     * Le poids d'un mot correspond au nombre de fois qu'il à été rencontré dans le texte.
     */
    getWeight(word) {
        return this.map.get(word);
    }

    /**
     * retourne le nombre de mots indexés
     */
    get count(){
    }
}

