export default class Calculator {
    /**
     * FIGYELEM!
     * A feladatban metódusokat kell létrehoznod.
     * Ezek egyszerű függvények, csak egy konkrét objektumhoz tartoznak.
     * Ezért itt az osztályon belül nem kell eléjük írni semmit.
     * Példa:
     * myMethod(name: string = '') {
     *      return name.toLowerCase();
     * }
     */


    /** 
     * 1. feladat:
     * Hozd létre a sum metódust.
     * Két szám típusú paramétert vár és az összegüket adja vissza.
     * @param {number} a - az első szám.
     * @param {number} b - a második szám.
     * @returns {number} a két paraméterként kapott szám összege.
     */
    sum(a: number, b: number) {
        return a + b;
    }


    /** 
     * 2. feladat:
     * Hozd létre a difference metódust.
     * Két szám típusú paramétert vár és a különbségüket adja vissza.
     * @param {number} a - az első szám.
     * @param {number} b - a második szám.
     * @returns {number} a két paraméterként kapott szám különbsége.
     */
    difference(a: number, b: number) {
        return a - b;
    }
    
    /** 
     * 3. feladat:
     * Hozd létre a getProperty metódust.
     * A paramétere egy user típus: {name: string, email: string}.
     * A user-nek a name tulajdonságával tér vissza.
     * Példa: this.getProperty({name: 'Jim', email: 'j@j.hu'})
     * visszatérési értéke: 'Jim'
     * @param {User} user - az objektum.
     * @returns {any} a kulcs alapján kiolvasott tulajdonság értéke.
     */
     getProperty(user: {name: string, email: string}) {
         return user.name;
     }


}
