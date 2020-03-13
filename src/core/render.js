export class Render {

    static dataExtraction(array, property) {
        if (array && array.length) {
            //Якщо параметр definitions => приходить масив об*єктів, 
            //тому його потрібно обробити окремо.
            //(В інших випадках приходить просто масив)
            if (property === 'definitions') {
                return `
                <ul>
                    ${array.map(i=>`<li>${i.definition} (<b>${i.partOfSpeech}</b>)</li>`).join(' ')}
                </ul>
            `
            }
            return `
                <ul>
                    ${array.map(i=>`<li>${i}</li>`).join(' ')}
                </ul>
            `
        } else {
            return 'No results found'
        };
    };

    static renderOptions(array = []) {
        if (array && array.length) {
            return `
            <form>
                 <select class="select-css select-js" id="select-js">
                    ${array.map(i=>`<option>${i}</option>`).join(' ')}
                 </select>
            </form>
        `
        }
    };
}